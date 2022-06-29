import Chat from './pages/Chat';
import Login from './pages/Login';
import { CHAT_ROUTE, LOGIN_ROUTE } from './utils/consts';

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]