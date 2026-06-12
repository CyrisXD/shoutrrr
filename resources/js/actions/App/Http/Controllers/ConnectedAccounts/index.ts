import ConnectedAccountController from './ConnectedAccountController'
import OAuthConnectionController from './OAuthConnectionController'
import BlueskyConnectionController from './BlueskyConnectionController'

const ConnectedAccounts = {
    ConnectedAccountController: Object.assign(ConnectedAccountController, ConnectedAccountController),
    OAuthConnectionController: Object.assign(OAuthConnectionController, OAuthConnectionController),
    BlueskyConnectionController: Object.assign(BlueskyConnectionController, BlueskyConnectionController),
}

export default ConnectedAccounts