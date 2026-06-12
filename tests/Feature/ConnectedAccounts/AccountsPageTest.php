<?php

use App\Enums\WorkspaceRole;
use App\Models\ConnectedAccount;
use App\Models\User;
use App\Models\Workspace;
use App\Models\WorkspaceMembership;
use Inertia\Testing\AssertableInertia as Assert;

function viewerInWorkspace(WorkspaceRole $role): User
{
    $user = User::factory()->create();
    $workspace = Workspace::factory()->create(['owner_id' => $user->id]);
    WorkspaceMembership::factory()->create([
        'workspace_id' => $workspace->id,
        'user_id' => $user->id,
        'role' => $role,
    ]);
    $user->forceFill(['current_workspace_id' => $workspace->id])->save();
    ConnectedAccount::factory()->create([
        'workspace_id' => $workspace->id,
        'handle' => '@listed',
    ]);

    return $user;
}

test('the accounts page lists accounts and exposes capabilities and canManage to owners', function () {
    $owner = viewerInWorkspace(WorkspaceRole::Owner);

    test()->actingAs($owner)->get('/accounts')
        ->assertInertia(fn (Assert $page) => $page
            ->component('accounts/index')
            ->where('canManage', true)
            ->has('capabilities', 3)
            ->has('accounts', 1)
            ->where('accounts.0.handle', '@listed')
            ->missing('accounts.0.secret'),
        );
});

test('members see the list but cannot manage', function () {
    $member = viewerInWorkspace(WorkspaceRole::Member);

    test()->actingAs($member)->get('/accounts')
        ->assertInertia(fn (Assert $page) => $page
            ->component('accounts/index')
            ->where('canManage', false),
        );
});

test('the accounts page requires authentication', function () {
    test()->get('/accounts')->assertRedirect(route('login'));
});
