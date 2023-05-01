import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LoginPage.module.scss';

interface LoginPageProps {
    className?: string;
}

export const LoginPage = memo((props: LoginPageProps) => {
    const { className } = props;
	
    return (
        <div className={classNames(cls.LoginPage, {}, [className])}>
            
        </div>
    );
});
