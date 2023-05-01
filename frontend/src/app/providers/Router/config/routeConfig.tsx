import { LoginPage } from '@/pages/LoginPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { UserDetailsPage } from '@/pages/UserDetailsPage';
import { UsersPage } from '@/pages/UsersPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
    USERS = 'users',
    USERS_DETAILS = 'users_details',
    LOGIN = 'login',
    NOT_FOUND = 'not_found',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.USERS]: {
        path: '/',
        element: <UsersPage />,
    },
    [AppRoutes.USERS_DETAILS]: {
        path: `/users/:id`,
        element: <UserDetailsPage />,
    },
    [AppRoutes.LOGIN]: {
        path: '/login',
        element: <LoginPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
