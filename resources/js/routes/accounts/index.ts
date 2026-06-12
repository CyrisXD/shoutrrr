import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import bluesky from './bluesky'
/**
* @see \App\Http\Controllers\ConnectedAccounts\ConnectedAccountController::index
* @see app/Http/Controllers/ConnectedAccounts/ConnectedAccountController.php:25
* @route '/accounts'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/accounts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ConnectedAccounts\ConnectedAccountController::index
* @see app/Http/Controllers/ConnectedAccounts/ConnectedAccountController.php:25
* @route '/accounts'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ConnectedAccounts\ConnectedAccountController::index
* @see app/Http/Controllers/ConnectedAccounts/ConnectedAccountController.php:25
* @route '/accounts'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\ConnectedAccountController::index
* @see app/Http/Controllers/ConnectedAccounts/ConnectedAccountController.php:25
* @route '/accounts'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\ConnectedAccountController::index
* @see app/Http/Controllers/ConnectedAccounts/ConnectedAccountController.php:25
* @route '/accounts'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\ConnectedAccountController::index
* @see app/Http/Controllers/ConnectedAccounts/ConnectedAccountController.php:25
* @route '/accounts'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\ConnectedAccountController::index
* @see app/Http/Controllers/ConnectedAccounts/ConnectedAccountController.php:25
* @route '/accounts'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::connect
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:25
* @route '/accounts/connect/{platform}'
*/
export const connect = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: connect.url(args, options),
    method: 'get',
})

connect.definition = {
    methods: ["get","head"],
    url: '/accounts/connect/{platform}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::connect
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:25
* @route '/accounts/connect/{platform}'
*/
connect.url = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return connect.definition.url
            .replace('{platform}', parsedArgs.platform.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::connect
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:25
* @route '/accounts/connect/{platform}'
*/
connect.get = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: connect.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::connect
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:25
* @route '/accounts/connect/{platform}'
*/
connect.head = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: connect.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::connect
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:25
* @route '/accounts/connect/{platform}'
*/
const connectForm = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: connect.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::connect
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:25
* @route '/accounts/connect/{platform}'
*/
connectForm.get = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: connect.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\OAuthConnectionController::connect
* @see app/Http/Controllers/ConnectedAccounts/OAuthConnectionController.php:25
* @route '/accounts/connect/{platform}'
*/
connectForm.head = (args: { platform: string | number } | [platform: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: connect.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

connect.form = connectForm

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

/**
* @see \App\Http\Controllers\ConnectedAccounts\ConnectedAccountController::reconnect
* @see app/Http/Controllers/ConnectedAccounts/ConnectedAccountController.php:55
* @route '/accounts/{account}/reconnect'
*/
export const reconnect = (args: { account: string | { id: string } } | [account: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reconnect.url(args, options),
    method: 'post',
})

reconnect.definition = {
    methods: ["post"],
    url: '/accounts/{account}/reconnect',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ConnectedAccounts\ConnectedAccountController::reconnect
* @see app/Http/Controllers/ConnectedAccounts/ConnectedAccountController.php:55
* @route '/accounts/{account}/reconnect'
*/
reconnect.url = (args: { account: string | { id: string } } | [account: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { account: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { account: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            account: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        account: typeof args.account === 'object'
        ? args.account.id
        : args.account,
    }

    return reconnect.definition.url
            .replace('{account}', parsedArgs.account.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ConnectedAccounts\ConnectedAccountController::reconnect
* @see app/Http/Controllers/ConnectedAccounts/ConnectedAccountController.php:55
* @route '/accounts/{account}/reconnect'
*/
reconnect.post = (args: { account: string | { id: string } } | [account: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: reconnect.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\ConnectedAccountController::reconnect
* @see app/Http/Controllers/ConnectedAccounts/ConnectedAccountController.php:55
* @route '/accounts/{account}/reconnect'
*/
const reconnectForm = (args: { account: string | { id: string } } | [account: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reconnect.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\ConnectedAccountController::reconnect
* @see app/Http/Controllers/ConnectedAccounts/ConnectedAccountController.php:55
* @route '/accounts/{account}/reconnect'
*/
reconnectForm.post = (args: { account: string | { id: string } } | [account: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reconnect.url(args, options),
    method: 'post',
})

reconnect.form = reconnectForm

/**
* @see \App\Http\Controllers\ConnectedAccounts\ConnectedAccountController::destroy
* @see app/Http/Controllers/ConnectedAccounts/ConnectedAccountController.php:98
* @route '/accounts/{account}'
*/
export const destroy = (args: { account: string | { id: string } } | [account: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/accounts/{account}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ConnectedAccounts\ConnectedAccountController::destroy
* @see app/Http/Controllers/ConnectedAccounts/ConnectedAccountController.php:98
* @route '/accounts/{account}'
*/
destroy.url = (args: { account: string | { id: string } } | [account: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { account: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { account: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            account: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        account: typeof args.account === 'object'
        ? args.account.id
        : args.account,
    }

    return destroy.definition.url
            .replace('{account}', parsedArgs.account.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ConnectedAccounts\ConnectedAccountController::destroy
* @see app/Http/Controllers/ConnectedAccounts/ConnectedAccountController.php:98
* @route '/accounts/{account}'
*/
destroy.delete = (args: { account: string | { id: string } } | [account: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\ConnectedAccountController::destroy
* @see app/Http/Controllers/ConnectedAccounts/ConnectedAccountController.php:98
* @route '/accounts/{account}'
*/
const destroyForm = (args: { account: string | { id: string } } | [account: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\ConnectedAccountController::destroy
* @see app/Http/Controllers/ConnectedAccounts/ConnectedAccountController.php:98
* @route '/accounts/{account}'
*/
destroyForm.delete = (args: { account: string | { id: string } } | [account: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const accounts = {
    index: Object.assign(index, index),
    connect: Object.assign(connect, connect),
    callback: Object.assign(callback, callback),
    bluesky: Object.assign(bluesky, bluesky),
    reconnect: Object.assign(reconnect, reconnect),
    destroy: Object.assign(destroy, destroy),
}

export default accounts