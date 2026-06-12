import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\ConnectedAccounts\BlueskyConnectionController::store
* @see app/Http/Controllers/ConnectedAccounts/BlueskyConnectionController.php:21
* @route '/accounts/connect/bluesky'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/accounts/connect/bluesky',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ConnectedAccounts\BlueskyConnectionController::store
* @see app/Http/Controllers/ConnectedAccounts/BlueskyConnectionController.php:21
* @route '/accounts/connect/bluesky'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ConnectedAccounts\BlueskyConnectionController::store
* @see app/Http/Controllers/ConnectedAccounts/BlueskyConnectionController.php:21
* @route '/accounts/connect/bluesky'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\BlueskyConnectionController::store
* @see app/Http/Controllers/ConnectedAccounts/BlueskyConnectionController.php:21
* @route '/accounts/connect/bluesky'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ConnectedAccounts\BlueskyConnectionController::store
* @see app/Http/Controllers/ConnectedAccounts/BlueskyConnectionController.php:21
* @route '/accounts/connect/bluesky'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

const BlueskyConnectionController = { store }

export default BlueskyConnectionController