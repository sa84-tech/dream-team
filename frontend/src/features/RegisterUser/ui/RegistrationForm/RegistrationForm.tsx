import { PasswordIcon } from '@/entities/PasswordIcon/PasswordIcon';
import { RegistrationErrors } from '@/features/RegisterUser';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { memo, useMemo, useState } from 'react';
import { RegistrationFormSchema } from '../../model/types/registration';
import cls from './RegistrationForm.module.scss';

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

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const PasswordIconSlot1 = useMemo(
        () => (
            <PasswordIcon
                onClick={() => setShowPassword1((p) => !p)}
                isPasswordVisible={showPassword1}
            />
        ),
        [setShowPassword1, showPassword1],
    );

    const PasswordIconSlot2 = useMemo(
        () => (
            <PasswordIcon
                onClick={() => setShowPassword2((p) => !p)}
                isPasswordVisible={showPassword2}
            />
        ),
        [setShowPassword2, showPassword2],
    );

    return (
        <div className={classNames(cls.RegistrationForm, {}, [className])}>
            <h2 className={cls.title}>Регистрация</h2>

            <Input
                value={data?.name}
                onChange={onChangeName}
                errors={errors?.name}
                placeholder="Имя"
                autofocus
                type="text"
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
                errors={errors?.password1}
                type={showPassword1 ? 'text' : 'password'}
                IconSlot={PasswordIconSlot1}
            />

            <Input
                value={data?.password2}
                onChange={onChangePassword2}
                placeholder="Подтвердите пароль"
                errors={errors?.password2}
                type={showPassword2 ? 'text' : 'password'}
                IconSlot={PasswordIconSlot2}
            />

            <Button
                size={ButtonSize.L}
                variant={ButtonVariant.PRIMARY}
                onClick={onRegister}
                disabled={isLoading}
            >
                Зарегистрироваться
            </Button>
        </div>
    );
});
