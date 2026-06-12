import { Form, Head, router, usePage } from '@inertiajs/react';
import {
    AtSign,
    BriefcaseBusiness,
    CircleAlert,
    Plug,
    RefreshCw,
    Trash2,
    X as XIcon,
} from 'lucide-react';
import { useState } from 'react';

import BlueskyConnectionController from '@/actions/App/Http/Controllers/ConnectedAccounts/BlueskyConnectionController';
import ConnectedAccountController from '@/actions/App/Http/Controllers/ConnectedAccounts/ConnectedAccountController';
import OAuthConnectionController from '@/actions/App/Http/Controllers/ConnectedAccounts/OAuthConnectionController';
import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Account = {
    id: string;
    platform: string;
    platform_label: string;
    handle: string;
    display_name: string | null;
    avatar_url: string | null;
    status: 'active' | 'needs_attention';
    status_label: string;
    auth_method: string;
    connected_by: string | null;
    token_expires_at: string | null;
};

type Capability = {
    platform: string;
    label: string;
    supportsOAuth: boolean;
    supportsAppPassword: boolean;
    configured: boolean;
};

type Props = {
    accounts: Account[];
    capabilities: Capability[];
    canManage: boolean;
};

function platformIcon(platform: string) {
    switch (platform) {
        case 'x':
            return <XIcon className="size-4" />;
        case 'linkedin':
            return <BriefcaseBusiness className="size-4" />;
        default:
            return <AtSign className="size-4" />;
    }
}

function BlueskyConnectDialog() {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <AtSign className="size-4" />
                    Connect Bluesky
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Connect a Bluesky account</DialogTitle>
                    <DialogDescription>
                        Use an{' '}
                        <a
                            href="https://bsky.app/settings/app-passwords"
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                        >
                            app password
                        </a>{' '}
                        instead of your main password. App passwords bypass 2FA,
                        and disconnecting here does not revoke them on Bluesky.
                    </DialogDescription>
                </DialogHeader>
                <Form
                    {...BlueskyConnectionController.store.form()}
                    options={{ preserveScroll: true }}
                    resetOnSuccess
                    onSuccess={() => setOpen(false)}
                >
                    {({ errors, processing }) => (
                        <>
                            <div className="space-y-4 py-2">
                                <div className="grid gap-2">
                                    <Label htmlFor="identifier">
                                        Handle or email
                                    </Label>
                                    <Input
                                        id="identifier"
                                        name="identifier"
                                        placeholder="you.bsky.social"
                                        required
                                    />
                                    <InputError message={errors.identifier} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="app_password">
                                        App password
                                    </Label>
                                    <Input
                                        id="app_password"
                                        name="app_password"
                                        type="password"
                                        placeholder="xxxx-xxxx-xxxx-xxxx"
                                        required
                                    />
                                    <InputError message={errors.app_password} />
                                </div>
                                <Collapsible>
                                    <CollapsibleTrigger asChild>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                        >
                                            Advanced: service URL
                                        </Button>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="grid gap-2 pt-2">
                                        <Label htmlFor="pds_url">
                                            Service URL
                                        </Label>
                                        <Input
                                            id="pds_url"
                                            name="pds_url"
                                            placeholder="https://bsky.social"
                                        />
                                        <InputError message={errors.pds_url} />
                                    </CollapsibleContent>
                                </Collapsible>
                            </div>
                            <DialogFooter>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setOpen(false)}
                                >
                                    Cancel
                                </Button>
                                <Button type="submit" disabled={processing}>
                                    {processing ? 'Connecting...' : 'Connect'}
                                </Button>
                            </DialogFooter>
                        </>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
}

function ConnectButtons({ capabilities }: { capabilities: Capability[] }) {
    return (
        <div className="flex flex-wrap gap-2">
            {capabilities.map((capability) => {
                if (capability.supportsAppPassword) {
                    return <BlueskyConnectDialog key={capability.platform} />;
                }

                if (!capability.configured) {
                    return (
                        <Button
                            key={capability.platform}
                            variant="outline"
                            disabled
                        >
                            {platformIcon(capability.platform)}
                            Connect {capability.label}
                        </Button>
                    );
                }

                return (
                    <Button key={capability.platform} variant="outline" asChild>
                        <a
                            href={OAuthConnectionController.redirect.url({
                                platform: capability.platform,
                            })}
                        >
                            {platformIcon(capability.platform)}
                            Connect {capability.label}
                        </a>
                    </Button>
                );
            })}
        </div>
    );
}

function ReconnectBlueskyDialog({ account }: { account: Account }) {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="sm">
                    <RefreshCw className="size-4" />
                    Reconnect
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Reconnect {account.handle}</DialogTitle>
                    <DialogDescription>
                        Re-enter the app password for this Bluesky account.
                    </DialogDescription>
                </DialogHeader>
                <Form
                    {...ConnectedAccountController.reconnect.form(account.id)}
                    options={{ preserveScroll: true }}
                    onSuccess={() => setOpen(false)}
                >
                    {({ errors, processing }) => (
                        <>
                            <div className="space-y-4 py-2">
                                <div className="grid gap-2">
                                    <Label htmlFor={`identifier-${account.id}`}>
                                        Handle or email
                                    </Label>
                                    <Input
                                        id={`identifier-${account.id}`}
                                        name="identifier"
                                        defaultValue={account.handle.replace(
                                            /^@/,
                                            '',
                                        )}
                                        required
                                    />
                                    <InputError message={errors.identifier} />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor={`password-${account.id}`}>
                                        App password
                                    </Label>
                                    <Input
                                        id={`password-${account.id}`}
                                        name="app_password"
                                        type="password"
                                        required
                                    />
                                    <InputError message={errors.app_password} />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit" disabled={processing}>
                                    {processing
                                        ? 'Reconnecting...'
                                        : 'Reconnect'}
                                </Button>
                            </DialogFooter>
                        </>
                    )}
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default function ConnectedAccounts({
    accounts,
    capabilities,
    canManage,
}: Props) {
    const disconnect = (account: Account) => {
        // The controller flashes a success message which FlashListener turns into
        // a toast — don't toast again here or it fires twice.
        router.delete(ConnectedAccountController.destroy.url(account.id), {
            preserveScroll: true,
        });
    };

    const reconnectOAuth = (account: Account) => {
        window.location.href = OAuthConnectionController.redirect.url({
            platform: account.platform,
        });
    };

    const { flash } = usePage().props;
    const [dismissedError, setDismissedError] = useState<string | null>(null);
    // Connect/reconnect failures for every platform flash an `error`; surface it
    // as a persistent, dismissible banner (the toast alone is easy to miss).
    const connectError =
        flash?.error && flash.error !== dismissedError ? flash.error : null;

    return (
        <div className="flex flex-col gap-6 p-4">
            <Head title="Accounts" />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Heading
                    title="Connected accounts"
                    description="Workspace-owned social accounts shared by every member."
                />
                {canManage && <ConnectButtons capabilities={capabilities} />}
            </div>

            {connectError && (
                <Alert variant="destructive" className="relative pr-10">
                    <CircleAlert />
                    <AlertTitle>Couldn't connect the account</AlertTitle>
                    <AlertDescription>{connectError}</AlertDescription>
                    <button
                        type="button"
                        onClick={() => setDismissedError(flash?.error ?? null)}
                        aria-label="Dismiss"
                        className="absolute top-3 right-3 text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <XIcon className="size-4" />
                    </button>
                </Alert>
            )}

            {accounts.length === 0 ? (
                <div className="flex flex-col items-center gap-3 rounded-md border border-dashed p-10 text-center">
                    <Plug className="size-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                        No accounts connected yet.
                        {canManage
                            ? ' Connect X, LinkedIn, or Bluesky to get started.'
                            : ' Ask an admin to connect one.'}
                    </p>
                </div>
            ) : (
                <div className="grid gap-3">
                    {accounts.map((account) => (
                        <div
                            key={account.id}
                            className="flex flex-col gap-4 rounded-md border p-4 sm:flex-row sm:items-center sm:justify-between"
                        >
                            <div className="flex min-w-0 items-center gap-3">
                                <Avatar>
                                    <AvatarImage
                                        src={account.avatar_url ?? undefined}
                                        alt={account.handle}
                                    />
                                    <AvatarFallback>
                                        {platformIcon(account.platform)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="min-w-0">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="truncate font-medium">
                                            {account.display_name ??
                                                account.handle}
                                        </span>
                                        <Badge
                                            variant={
                                                account.status === 'active'
                                                    ? 'secondary'
                                                    : 'destructive'
                                            }
                                        >
                                            {account.status_label}
                                        </Badge>
                                    </div>
                                    <p className="truncate text-sm text-muted-foreground">
                                        {account.platform_label} &middot;{' '}
                                        {account.handle}
                                        {account.connected_by
                                            ? ` - by ${account.connected_by}`
                                            : ''}
                                    </p>
                                </div>
                            </div>

                            {canManage && (
                                <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                                    {account.auth_method === 'app_password' ? (
                                        <ReconnectBlueskyDialog
                                            account={account}
                                        />
                                    ) : (
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() =>
                                                reconnectOAuth(account)
                                            }
                                        >
                                            <RefreshCw className="size-4" />
                                            Reconnect
                                        </Button>
                                    )}
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => disconnect(account)}
                                    >
                                        <Trash2 className="size-4 text-destructive" />
                                        Disconnect
                                    </Button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

ConnectedAccounts.layout = {
    breadcrumbs: [
        {
            title: 'Accounts',
            href: ConnectedAccountController.index().url,
        },
    ],
};
