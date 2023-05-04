import { getUserInited } from '@/features/AuthByEmail';
import { authActions } from '@/features/AuthByEmail/model/slices/authSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './providers/Router/ui/AppRouter';
import './styles/index.scss';

function App() {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(authActions.initAuthData());
    }, [dispatch]);

    return <div className="app">{inited && <AppRouter />}</div>;
}

export default App;
