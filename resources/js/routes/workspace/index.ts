import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\WorkspaceController::invitation
* @see app/Http/Controllers/WorkspaceController.php:145
* @route '/invitation/{token}'
*/
export const invitation = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: invitation.url(args, options),
    method: 'get',
})

invitation.definition = {
    methods: ["get","head"],
    url: '/invitation/{token}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\WorkspaceController::invitation
* @see app/Http/Controllers/WorkspaceController.php:145
* @route '/invitation/{token}'
*/
invitation.url = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { token: args }
    }

    if (Array.isArray(args)) {
        args = {
            token: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        token: args.token,
    }

    return invitation.definition.url
            .replace('{token}', parsedArgs.token.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\WorkspaceController::invitation
* @see app/Http/Controllers/WorkspaceController.php:145
* @route '/invitation/{token}'
*/
invitation.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: invitation.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkspaceController::invitation
* @see app/Http/Controllers/WorkspaceController.php:145
* @route '/invitation/{token}'
*/
invitation.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: invitation.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\WorkspaceController::invitation
* @see app/Http/Controllers/WorkspaceController.php:145
* @route '/invitation/{token}'
*/
const invitationForm = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: invitation.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkspaceController::invitation
* @see app/Http/Controllers/WorkspaceController.php:145
* @route '/invitation/{token}'
*/
invitationForm.get = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: invitation.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\WorkspaceController::invitation
* @see app/Http/Controllers/WorkspaceController.php:145
* @route '/invitation/{token}'
*/
invitationForm.head = (args: { token: string | number } | [token: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: invitation.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

invitation.form = invitationForm

const workspace = {
    invitation: Object.assign(invitation, invitation),
}

export default workspace