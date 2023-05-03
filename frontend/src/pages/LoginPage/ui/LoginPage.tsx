import { LoginForm } from '@/entities/LoginForm';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './LoginPage.module.scss';

interface LoginPageProps {
    className?: string;
}

export const LoginPage = memo((props: LoginPageProps) => {
    const { className } = props;

    return (
        <main className={classNames(cls.LoginPage, {}, [className])}>
            <LoginForm />
        </main>
    );
});
