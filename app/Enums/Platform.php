<?php

declare(strict_types=1);

namespace App\Enums;

enum Platform: string
{
    case X = 'x';
    case Bluesky = 'bluesky';
    case LinkedIn = 'linkedin';

    public function label(): string
    {
        return match ($this) {
            self::X => 'X',
            self::Bluesky => 'Bluesky',
            self::LinkedIn => 'LinkedIn',
        };
    }

    public function socialiteDriver(): ?string
    {
        return match ($this) {
            self::X => 'x',
            self::LinkedIn => 'linkedin-openid',
            self::Bluesky => null,
        };
    }

    /**
     * @return list<string>
     */
    public function scopes(): array
    {
        return match ($this) {
            // `users.email` is required because Socialite's X driver always
            // requests the `confirmed_email` field from /2/users/me; without the
            // scope that call 403s ("Missing required OAuth2 scopes: users.email").
            self::X => ['users.read', 'users.email', 'tweet.read', 'tweet.write', 'offline.access'],
            self::LinkedIn => ['openid', 'profile', 'email', 'w_member_social'],
            self::Bluesky => [],
        };
    }

    public function configKey(): ?string
    {
        return match ($this) {
            self::X => 'services.x',
            self::LinkedIn => 'services.linkedin-openid',
            self::Bluesky => null,
        };
    }

    public function supportsOAuth(): bool
    {
        return $this->socialiteDriver() !== null;
    }

    public function supportsAppPassword(): bool
    {
        return $this === self::Bluesky;
    }

    public function isConfigured(): bool
    {
        if ($this->supportsAppPassword()) {
            return true;
        }

        $key = $this->configKey();

        return $key !== null
            && config($key.'.client_id') !== null
            && config($key.'.client_secret') !== null;
    }

    /**
     * @return list<array{platform: string, label: string, supportsOAuth: bool, supportsAppPassword: bool, configured: bool}>
     */
    public static function capabilities(): array
    {
        return array_map(fn (self $platform): array => [
            'platform' => $platform->value,
            'label' => $platform->label(),
            'supportsOAuth' => $platform->supportsOAuth(),
            'supportsAppPassword' => $platform->supportsAppPassword(),
            'configured' => $platform->isConfigured(),
        ], self::cases());
    }
}
