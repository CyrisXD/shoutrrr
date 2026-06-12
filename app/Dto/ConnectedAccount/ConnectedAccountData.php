<?php

declare(strict_types=1);

namespace App\Dto\ConnectedAccount;

use App\Enums\Platform;
use Carbon\CarbonImmutable;
use Illuminate\Support\Facades\Date;
use Laravel\Socialite\Two\User as SocialiteUser;

final readonly class ConnectedAccountData
{
    /**
     * @param  array<string, mixed>|null  $session
     */
    public function __construct(
        public Platform $platform,
        public string $remoteAccountId,
        public string $handle,
        public ?string $displayName,
        public ?string $avatarUrl,
        public string $authMethod,
        public ?string $accessToken = null,
        public ?string $refreshToken = null,
        public ?string $appPassword = null,
        public ?array $session = null,
        public ?CarbonImmutable $tokenExpiresAt = null,
    ) {}

    public static function fromSocialite(Platform $platform, SocialiteUser $user): self
    {
        $attributes = get_object_vars($user);
        $expiresIn = $attributes['expiresIn'] ?? null;

        return new self(
            platform: $platform,
            remoteAccountId: (string) $user->getId(),
            handle: self::resolveHandle($platform, $user),
            displayName: $user->getName(),
            avatarUrl: $user->getAvatar(),
            authMethod: 'oauth',
            accessToken: $attributes['token'] ?? null,
            refreshToken: $attributes['refreshToken'] ?? null,
            tokenExpiresAt: $expiresIn ? Date::now()->addSeconds((int) $expiresIn)->toImmutable() : null,
        );
    }

    private static function resolveHandle(Platform $platform, SocialiteUser $user): string
    {
        $nickname = $user->getNickname();

        return match ($platform) {
            Platform::X => '@'.$nickname,
            default => $nickname ?? $user->getName() ?? (string) $user->getId(),
        };
    }
}
