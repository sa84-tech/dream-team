import { AuthByEmail } from '@/features/AuthByEmail';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import cls from './LoginPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { routePath } from '@/app/providers/Router/config/routeConfig';

interface LoginPageProps {
    className?: string;
}

export const LoginPage = memo((props: LoginPageProps) => {
    const { className } = props;
    const navigate = useNavigate()

    const onAuthSuccess = useCallback(() => {
        navigate(routePath.users);
    }, [navigate])
    
    return (
        <main className={classNames(cls.LoginPage, {}, [className])}>
            <AuthByEmail onSuccess={onAuthSuccess} />
        </main>
    );
});
