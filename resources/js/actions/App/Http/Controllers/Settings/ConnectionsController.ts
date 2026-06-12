import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Settings\ConnectionsController::edit
* @see app/Http/Controllers/Settings/ConnectionsController.php:19
* @route '/settings/connections'
*/
export const edit = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/settings/connections',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Settings\ConnectionsController::edit
* @see app/Http/Controllers/Settings/ConnectionsController.php:19
* @route '/settings/connections'
*/
edit.url = (options?: RouteQueryOptions) => {
    return edit.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ConnectionsController::edit
* @see app/Http/Controllers/Settings/ConnectionsController.php:19
* @route '/settings/connections'
*/
edit.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\ConnectionsController::edit
* @see app/Http/Controllers/Settings/ConnectionsController.php:19
* @route '/settings/connections'
*/
edit.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Settings\ConnectionsController::edit
* @see app/Http/Controllers/Settings/ConnectionsController.php:19
* @route '/settings/connections'
*/
const editForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\ConnectionsController::edit
* @see app/Http/Controllers/Settings/ConnectionsController.php:19
* @route '/settings/connections'
*/
editForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Settings\ConnectionsController::edit
* @see app/Http/Controllers/Settings/ConnectionsController.php:19
* @route '/settings/connections'
*/
editForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \App\Http\Controllers\Settings\ConnectionsController::destroy
* @see app/Http/Controllers/Settings/ConnectionsController.php:41
* @route '/settings/connections/{socialAccount}'
*/
export const destroy = (args: { socialAccount: string | { id: string } } | [socialAccount: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/settings/connections/{socialAccount}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Settings\ConnectionsController::destroy
* @see app/Http/Controllers/Settings/ConnectionsController.php:41
* @route '/settings/connections/{socialAccount}'
*/
destroy.url = (args: { socialAccount: string | { id: string } } | [socialAccount: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { socialAccount: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { socialAccount: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            socialAccount: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        socialAccount: typeof args.socialAccount === 'object'
        ? args.socialAccount.id
        : args.socialAccount,
    }

    return destroy.definition.url
            .replace('{socialAccount}', parsedArgs.socialAccount.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Settings\ConnectionsController::destroy
* @see app/Http/Controllers/Settings/ConnectionsController.php:41
* @route '/settings/connections/{socialAccount}'
*/
destroy.delete = (args: { socialAccount: string | { id: string } } | [socialAccount: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Settings\ConnectionsController::destroy
* @see app/Http/Controllers/Settings/ConnectionsController.php:41
* @route '/settings/connections/{socialAccount}'
*/
const destroyForm = (args: { socialAccount: string | { id: string } } | [socialAccount: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Settings\ConnectionsController::destroy
* @see app/Http/Controllers/Settings/ConnectionsController.php:41
* @route '/settings/connections/{socialAccount}'
*/
destroyForm.delete = (args: { socialAccount: string | { id: string } } | [socialAccount: string | { id: string } ] | string | { id: string }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const ConnectionsController = { edit, destroy }

export default ConnectionsController