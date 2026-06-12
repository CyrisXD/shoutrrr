import WorkspaceController from './WorkspaceController'
import Auth from './Auth'
import Settings from './Settings'
import ConnectedAccounts from './ConnectedAccounts'

const Controllers = {
    WorkspaceController: Object.assign(WorkspaceController, WorkspaceController),
    Auth: Object.assign(Auth, Auth),
    Settings: Object.assign(Settings, Settings),
    ConnectedAccounts: Object.assign(ConnectedAccounts, ConnectedAccounts),
}

export default Controllers