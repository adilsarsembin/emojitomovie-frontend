import { LOGIN_ROUTE, MAINMENU_ROUTE, MULTIPLAYER_ROUTE, PACKAGES_ROUTE, QUICKGAME_ROUTE, REGISTRATION_ROUTE, SETTINGS_ROUTE } from "./utils/consts"
import Multiplayer from './pages/Multiplayer/Multiplayer'
import Settings from './pages/Settings/Settings'
import Mainmenu from './pages/Mainmenu/Mainmenu'
import Login from './pages/Login/Login'
import Registration from './pages/Registration/Registration'
import Packages from './pages/Packages/Packages'
import Quickgame from './pages/Quickgame/Quickgame'

export const authRoutes = [
	{
		path: MULTIPLAYER_ROUTE,
		component: Multiplayer
	},
	{
		path: SETTINGS_ROUTE,
		component: Settings
	},
	{
		path: MAINMENU_ROUTE,
		component: Mainmenu
	},
	{
		path: PACKAGES_ROUTE,
		component: Packages
	},
	
]
export const publicRoutes = [
	{
		path: LOGIN_ROUTE,
		component: Login
	},
	{
		path: REGISTRATION_ROUTE,
		component: Registration
	},
	{
		path: QUICKGAME_ROUTE,
		component: Quickgame
	}
]

