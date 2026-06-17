<?php

declare(strict_types=1);

namespace App\Notifications;

use App\Enums\NotificationType;
use App\Models\WorkspaceInvitation;
use App\Notifications\Concerns\GatedByPreferences;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class WorkspaceInviteNotification extends Notification implements ShouldQueue
{
    use GatedByPreferences;
    use Queueable;

    public function __construct(
        private WorkspaceInvitation $invitation,
        private string $plainToken,
    ) {
        $this->afterCommit();
    }

    /**
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return $this->gatedVia($notifiable, NotificationType::WorkspaceInvite);
    }

    /**
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return $this->databasePayload($this->invitation->workspace_id, [
            'event' => NotificationType::WorkspaceInvite->value,
            'title' => 'Workspace invitation',
            'body' => $this->invitation->workspace->name.' invited you to collaborate.',
            'href' => route('workspace.invitation', $this->plainToken),
            'icon' => 'users',
        ]);
    }

    public function toMail(object $notifiable): MailMessage
    {
        $url = route('workspace.invitation', $this->plainToken);

        return (new MailMessage)
            ->subject('You have been invited to a workspace')
            ->line($this->invitation->workspace->name.' has invited you to collaborate.')
            ->action('Accept invitation', $url)
            ->line('This invitation expires on '.$this->invitation->expires_at->toDayDateTimeString().'.');
    }
}
