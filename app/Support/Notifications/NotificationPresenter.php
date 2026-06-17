<?php

declare(strict_types=1);

namespace App\Support\Notifications;

use App\Models\User;
use Illuminate\Notifications\DatabaseNotification;

class NotificationPresenter
{
    /**
     * @return array{items: array<int, array<string, mixed>>, unreadCount: int}
     */
    public static function collection(User $user, ?string $workspaceId, int $limit = 15): array
    {
        if ($workspaceId === null) {
            return ['items' => [], 'unreadCount' => 0];
        }

        $base = $user->notifications()->where('data->workspace_id', $workspaceId);

        $items = (clone $base)
            ->latest()
            ->orderByDesc('id')
            ->limit($limit)
            ->get()
            ->map(static fn (DatabaseNotification $n): array => self::item($n))
            ->all();

        return [
            'items' => $items,
            'unreadCount' => (clone $base)->whereNull('read_at')->count(),
        ];
    }

    /**
     * @return array<string, mixed>
     */
    public static function item(DatabaseNotification $notification): array
    {
        /** @var array<string, mixed> $data */
        $data = $notification->data;

        return [
            'id' => $notification->id,
            'event' => $data['event'] ?? '',
            'title' => $data['title'] ?? '',
            'body' => $data['body'] ?? '',
            'href' => $data['href'] ?? null,
            'icon' => $data['icon'] ?? 'bell',
            'read' => $notification->read_at !== null,
            'timeLabel' => $notification->created_at?->diffForHumans() ?? '',
        ];
    }
}
