import { routePath } from '@/app/providers/Router/config/routeConfig';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Result } from '@/shared/ui/Result/Result';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    getCreatedUser,
    getRegistrationData,
    getRegistrationIsLoading,
    getRegistrationValidationErrors,
} from '../../model/selectors/registrationSelectors';
import { registerUser } from '../../model/services/registerUser/registerUser';
import { registrationActions } from '../../model/slices/registrationSlice';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm';

interface RegisterUserProps {
    className?: string;
}

export const RegisterUser = memo((props: RegisterUserProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const registrationData = useSelector(getRegistrationData);
    const validationErrors = useSelector(getRegistrationValidationErrors);
    const isLoading = useSelector(getRegistrationIsLoading);
    const newUser = useSelector(getCreatedUser);

    const onChangeName = useCallback(
        (value?: string) => {
            dispatch(registrationActions.setData({ name: value || '' }));
        },
        [dispatch]
    );

    const onChangeEmail = useCallback(
        (value?: string) => {
            dispatch(registrationActions.setData({ email: value || '' }));
        },
        [dispatch]
    );

    const onChangePassword1 = useCallback(
        (value?: string) => {
            dispatch(registrationActions.setData({ password1: value || '' }));
        },
        [dispatch]
    );

    const onChangePassword2 = useCallback(
        (value?: string) => {
            dispatch(registrationActions.setData({ password2: value || '' }));
        },
        [dispatch]
    );

    const onRegister = useCallback(() => {
        dispatch(registerUser());
    }, [dispatch]);

    const onSuccess = useCallback(() => {
        dispatch(registrationActions.clearData());
        navigate(routePath.login);
    }, [dispatch, navigate]);

    if (newUser) {
        return (
            <Result
                text='Вы успешно прошли регистрацию. Используейте свой e-mail и пароль для входа.'
                type='success'
                onClick={onSuccess}
            />
        );
    }

    return (
        <RegistrationForm
            data={registrationData}
            errors={validationErrors}
            onChangeName={onChangeName}
            onChangeEmail={onChangeEmail}
            onChangePassword1={onChangePassword1}
            onChangePassword2={onChangePassword2}
            onRegister={onRegister}
            isLoading={isLoading}
            className={className}
        />
    );
});
