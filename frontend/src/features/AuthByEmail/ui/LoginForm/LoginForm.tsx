import { routePath } from '@/app/providers/Router/config/routeConfig';
import { PasswordIcon } from '@/entities/PasswordIcon/PasswordIcon';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { memo, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthErrors } from '../../model/types/authSchema';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    email?: string;
    password?: string;
    onChangeEmail?: (value: string) => void;
    onChangePassword?: (value: string) => void;
    onLoginClick?: () => void;
    validationErrors?: AuthErrors;
    authError?: string;
    isLoading?: boolean;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
        email,
        password,
        onChangeEmail,
        onChangePassword,
        onLoginClick,
        validationErrors,
        authError,
        isLoading,
    } = props;

    const [showPassword, setShowPassword] = useState(false);

    const PasswordIconSlot = useMemo(
        () => (
            <PasswordIcon
                onClick={() => setShowPassword((p) => !p)}
                isPasswordVisible={showPassword}
            />
        ),
        [setShowPassword, showPassword],
    );

    const link = useMemo(
        () => <Link to={routePath.registration} className={cls.link}>
            Зарегистрироваться
        </Link>
    ,[]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <h2 className={cls.title}>Авторизация</h2>
            {authError && <div className={cls.error}>{authError}</div>}

            <Input
                value={email}
                onChange={onChangeEmail}
                placeholder="Электронная почта"
                type="email"
                errors={validationErrors?.email}
                autofocus
            />
            <Input
                value={password}
                onChange={onChangePassword}
                placeholder="Пароль"
                errors={validationErrors?.password}
                type={showPassword ? 'text' : 'password'}
                IconSlot={PasswordIconSlot}
            />

            <Button
                onClick={onLoginClick}
                size={ButtonSize.L}
                variant={ButtonVariant.PRIMARY}
                disabled={isLoading}
            >
                Войти
            </Button>

            {link}
        </div>
    );
});
