import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::redirect
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:25
* @route '/accounts/connect/{platform}'
*/
export const redirect = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect.url(args, options),
    method: 'get',
})

redirect.definition = {
    methods: ["get","head"],
    url: '/accounts/connect/{platform}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::redirect
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:25
* @route '/accounts/connect/{platform}'
*/
redirect.url = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { platform: args }
    }

    if (Array.isArray(args)) {
        args = {
            platform: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        platform: args.platform,
    }

    return redirect.definition.url
            .replace('{platform}', parsedArgs.platform.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::redirect
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:25
* @route '/accounts/connect/{platform}'
*/
redirect.get = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: redirect.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::redirect
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:25
* @route '/accounts/connect/{platform}'
*/
redirect.head = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: redirect.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::redirect
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:25
* @route '/accounts/connect/{platform}'
*/
const redirectForm = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::redirect
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:25
* @route '/accounts/connect/{platform}'
*/
redirectForm.get = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::redirect
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:25
* @route '/accounts/connect/{platform}'
*/
redirectForm.head = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: redirect.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

redirect.form = redirectForm

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::callback
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:34
* @route '/accounts/callback/{platform}'
*/
export const callback = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: callback.url(args, options),
    method: 'get',
})

callback.definition = {
    methods: ["get","head"],
    url: '/accounts/callback/{platform}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::callback
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:34
* @route '/accounts/callback/{platform}'
*/
callback.url = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { platform: args }
    }

    if (Array.isArray(args)) {
        args = {
            platform: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        platform: args.platform,
    }

    return callback.definition.url
            .replace('{platform}', parsedArgs.platform.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::callback
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:34
* @route '/accounts/callback/{platform}'
*/
callback.get = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: callback.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::callback
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:34
* @route '/accounts/callback/{platform}'
*/
callback.head = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: callback.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::callback
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:34
* @route '/accounts/callback/{platform}'
*/
const callbackForm = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: callback.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::callback
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:34
* @route '/accounts/callback/{platform}'
*/
callbackForm.get = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: callback.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::callback
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:34
* @route '/accounts/callback/{platform}'
*/
callbackForm.head = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: callback.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

callback.form = callbackForm

const OAuthConnectionController = { redirect, callback }

export default OAuthConnectionController