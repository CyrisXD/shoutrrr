import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
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

const ConnectedAccountController = { index, reconnect, destroy }

export default ConnectedAccountController