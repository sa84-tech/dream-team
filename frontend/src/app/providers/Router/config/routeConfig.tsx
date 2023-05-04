import { LoginPage } from '@/pages/LoginPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { RegistrationPage } from '@/pages/RegistrationPage';
import { UserDetailsPage } from '@/pages/UserDetailsPage';
import { UsersPage } from '@/pages/UsersPage';
import { RouteProps } from 'react-router-dom';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
}

enum AppRoutes {
    USERS = 'users',
    USERS_DETAILS = 'users_details',
    LOGIN = 'login',
    REGISTRATION = 'registration',
    NOT_FOUND = 'not_found',
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.USERS]: '/',
    [AppRoutes.USERS_DETAILS]: '/users/', //+ :id
    [AppRoutes.LOGIN]: '/login/',
    [AppRoutes.REGISTRATION]: '/registration/',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.USERS]: {
        path: routePath.users,
        element: <UsersPage />,
        authOnly: true,
    },
    [AppRoutes.USERS_DETAILS]: {
        path: `${routePath.users_details}:id`,
        element: <UserDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.LOGIN]: {
        path: routePath.login,
        element: <LoginPage />,
    },
    [AppRoutes.REGISTRATION]: {
        path: routePath.registration,
        element: <RegistrationPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: routePath.not_found,
        element: <NotFoundPage />,
    },
};
