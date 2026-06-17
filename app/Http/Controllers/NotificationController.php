<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    /**
     * Mark a single notification as read.
     *
     * Only the owning user's notifications are accessible; the relation
     * scopes the query so a 404 is returned for cross-user access.
     */
    public function markRead(Request $request, string $notification): RedirectResponse
    {
        $record = $request->user()->notifications()->findOrFail($notification);
        $record->markAsRead();

        return back();
    }

    /**
     * Mark all unread notifications for the current workspace as read.
     */
    public function markAllRead(Request $request): RedirectResponse
    {
        $request->user()
            ->unreadNotifications()
            ->where('data->workspace_id', $request->user()->current_workspace_id)
            ->update(['read_at' => now()]);

        return back();
    }
}
