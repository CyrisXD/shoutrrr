import ProfileController from './ProfileController'
import WorkspaceSettingsController from './WorkspaceSettingsController'
import ConnectionsController from './ConnectionsController'
import NotificationPreferencesController from './NotificationPreferencesController'
import SecurityController from './SecurityController'

const Settings = {
    ProfileController: Object.assign(ProfileController, ProfileController),
    WorkspaceSettingsController: Object.assign(WorkspaceSettingsController, WorkspaceSettingsController),
    ConnectionsController: Object.assign(ConnectionsController, ConnectionsController),
    NotificationPreferencesController: Object.assign(NotificationPreferencesController, NotificationPreferencesController),
    SecurityController: Object.assign(SecurityController, SecurityController),
}

export default Settings