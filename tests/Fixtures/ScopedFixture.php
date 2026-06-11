<?php

declare(strict_types=1);

namespace Tests\Fixtures;

use App\Concerns\HasWorkspaceScope;
use Illuminate\Database\Eloquent\Attributes\Table;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

#[Table(name: 'workspace_memberships')]
class ScopedFixture extends Model
{
    use HasUuids, HasWorkspaceScope;

    protected $guarded = [];

    public $timestamps = true;
}
