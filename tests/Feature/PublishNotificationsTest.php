<?php

use App\Enums\ErrorKind;
use App\Enums\PostTargetStatus;
use App\Jobs\PublishPostTarget;
use App\Models\Post;
use App\Models\PostTarget;
use App\Models\User;
use App\Notifications\AccountNeedsAttentionNotification;
use App\Notifications\PostPublishedNotification;
use App\Notifications\PublishFailedNotification;
use Illuminate\Support\Facades\Notification;

test('successful publish notifies the author', function () {
    Notification::fake();
    $user = User::factory()->create();
    $post = Post::factory()->for($user, 'author')->create();
    $target = PostTarget::factory()->for($post)->create(['status' => PostTargetStatus::Publishing]);

    // Drive onSuccess directly (the connector layer is exercised elsewhere).
    (new PublishPostTarget($target))->notifyPublished($target);

    Notification::assertSentTo($user, PostPublishedNotification::class);
});

test('terminal non-auth failure notifies the author of publish failure', function () {
    Notification::fake();
    $user = User::factory()->create();
    $post = Post::factory()->for($user, 'author')->create();
    $target = PostTarget::factory()->for($post)->create();

    (new PublishPostTarget($target))->notifyFailed($target, ErrorKind::Unknown);

    Notification::assertSentTo($user, PublishFailedNotification::class);
    Notification::assertNotSentTo($user, AccountNeedsAttentionNotification::class);
});

test('terminal auth-expired failure notifies account-needs-attention instead', function () {
    Notification::fake();
    $user = User::factory()->create();
    $post = Post::factory()->for($user, 'author')->create();
    $target = PostTarget::factory()->for($post)->create();

    (new PublishPostTarget($target))->notifyFailed($target, ErrorKind::AuthExpired);

    Notification::assertSentTo($user, AccountNeedsAttentionNotification::class);
    Notification::assertNotSentTo($user, PublishFailedNotification::class);
});
