import { RegistrationErrors } from '@/features/RegisterUser';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { memo } from 'react';
import cls from './RegistrationForm.module.scss';
import { RegistrationFormSchema } from '../../model/types/registration';

interface RegistrationFormProps {
    className?: string;
    data?: RegistrationFormSchema;
    errors?: RegistrationErrors;
    isLoading?: boolean;
    onChangeName?: (value: string) => void;
    onChangeEmail?: (value: string) => void;
    onChangePassword1?: (value: string) => void;
    onChangePassword2?: (value: string) => void;
    onRegister?: () => void;
}

export const RegistrationForm = memo((props: RegistrationFormProps) => {
    const {
        className,
        data,
        errors,
        isLoading,
        onChangeName,
        onChangeEmail,
        onChangePassword1,
        onChangePassword2,
        onRegister,
    } = props;

    return (
        <div className={classNames(cls.RegistrationForm, {}, [className])}>
            <h2 className={cls.title}>Регистрация</h2>

            <Input
                value={data?.name}
                onChange={onChangeName}
                errors={errors?.name}
                placeholder="Имя"
                autofocus
            />

            <Input
                value={data?.email}
                onChange={onChangeEmail}
                placeholder="Электронная почта"
                type="email"
                errors={errors?.email}
            />

            <Input
                value={data?.password1}
                onChange={onChangePassword1}
                placeholder="Пароль"
                type="password"
                errors={errors?.password1}
            />

            <Input
                value={data?.password2}
                onChange={onChangePassword2}
                placeholder="Подтвердите пароль"
                type="password"
                errors={errors?.password2}
            />

            <Button size={ButtonSize.L} variant={ButtonVariant.PRIMARY} onClick={onRegister} disabled={isLoading}>
                Зарегистрироваться
            </Button>
        </div>
    );
});
