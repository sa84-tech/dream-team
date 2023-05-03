import { routePath } from '@/app/providers/Router/config/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <h2 className={cls.title}>Авторизация</h2>

            <Input placeholder="Электронная почта" type="email" autofocus />
            <Input placeholder="Пароль" type="password" />

            <Button size={ButtonSize.L} variant={ButtonVariant.PRIMARY}>
                Войти
            </Button>
            <Link to={routePath.registration} className={cls.link}>
                Зарегистрироваться
            </Link>
        </div>
    );
});
