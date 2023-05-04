import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { routePath } from '../config/routeConfig';
import { getAuthData } from '@/features/AuthByEmail/model/selectors/authByEmailSelectors';

interface RequireAuthProps {
    children: JSX.Element;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
    const auth = useSelector(getAuthData);
    const location = useLocation();

    if (!auth) {
        return <Navigate to={routePath.login} state={{ from: location }} replace />;
    }

    return children;
};
