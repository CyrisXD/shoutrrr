<?php

declare(strict_types=1);

namespace App\Notifications;

use App\Enums\NotificationType;
use App\Models\PostTarget;
use App\Notifications\Concerns\GatedByPreferences;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class PublishFailedNotification extends Notification implements ShouldQueue
{
    use GatedByPreferences;
    use Queueable;

    public function __construct(private PostTarget $target)
    {
        $this->afterCommit();
    }

    /**
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return $this->gatedVia($notifiable, NotificationType::PublishFailed);
    }

    /**
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        $post = $this->target->post()->firstOrFail();

        return $this->databasePayload($post->workspace_id, [
            'event' => NotificationType::PublishFailed->value,
            'title' => 'Post failed to publish',
            'body' => 'Your post failed to publish on '.$this->target->platform->value.'.',
            'href' => route('posts.index'),
            'icon' => 'alert-triangle',
        ]);
    }

    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('A post failed to publish')
            ->line('Your post failed to publish on '.$this->target->platform->value.'.')
            ->action('View posts', route('posts.index'));
    }
}
