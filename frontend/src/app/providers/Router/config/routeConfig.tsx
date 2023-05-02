import { LoginPage } from '@/pages/LoginPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { UserDetailsPage } from '@/pages/UserDetailsPage';
import { UsersPage } from '@/pages/UsersPage';
import { RouteProps } from 'react-router-dom';

enum AppRoutes {
    USERS = 'users',
    USERS_DETAILS = 'users_details',
    LOGIN = 'login',
    NOT_FOUND = 'not_found',
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.USERS]: '/',
    [AppRoutes.USERS_DETAILS]: '/users/', //+ :id
    [AppRoutes.LOGIN]: '/login/',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.USERS]: {
        path: routePath.users,
        element: <UsersPage />,
    },
    [AppRoutes.USERS_DETAILS]: {
        path: `${routePath.users_details}:id`,
        element: <UserDetailsPage />,
    },
    [AppRoutes.LOGIN]: {
        path: routePath.login,
        element: <LoginPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: routePath.not_found,
        element: <NotFoundPage />,
    },
};
