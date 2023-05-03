import { RegistrationForm } from '@/entities/RegistrationForm';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
    getRegistrationData,
    getRegistrationValidateErrors
} from '../../model/selectors/registrationSelectors';
import { registerUser } from '../../model/services/registerUser/registerUser';
import { registrationActions } from '../../model/slices/registrationSlice';
import cls from './RegisterUser.module.scss';

interface RegisterUserProps {
    className?: string;
}

export const RegisterUser = memo((props: RegisterUserProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const registrationData = useSelector(getRegistrationData);
    const validateErrors = useSelector(getRegistrationValidateErrors);

    const onChangeName = useCallback(
        (value?: string) => {
            dispatch(registrationActions.setData({ name: value || '' }));
        },
        [dispatch],
    );

    const onChangeEmail = useCallback(
        (value?: string) => {
            dispatch(registrationActions.setData({ email: value || '' }));
        },
        [dispatch],
    );

    const onChangePassword1 = useCallback(
        (value?: string) => {
            dispatch(registrationActions.setData({ password1: value || '' }));
        },
        [dispatch],
    );

    const onChangePassword2 = useCallback(
        (value?: string) => {
            dispatch(registrationActions.setData({ password2: value || '' }));
        },
        [dispatch],
    );

    const onRegister = useCallback(() => {
        dispatch(registerUser());
    }, [dispatch]);

    return (
        <div className={classNames(cls.RegisterUser, {}, [className])}>
            <RegistrationForm
                data={registrationData}
                errors={validateErrors}
                onChangeName={onChangeName}
                onChangeEmail={onChangeEmail}
                onChangePassword1={onChangePassword1}
                onChangePassword2={onChangePassword2}
                onRegister={onRegister}
            />
        </div>
    );
});
