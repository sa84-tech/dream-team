import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
    getCreatedUser,
    getRegistrationData,
    getRegistrationIsLoading,
    getRegistrationValidationErrors,
} from '../../model/selectors/registrationSelectors';
import { registerUser } from '../../model/services/registerUser/registerUser';
import { registrationActions } from '../../model/slices/registrationSlice';
import { RegistrationForm } from '../RegistrationForm/RegistrationForm';
import { RegistrationSuccess } from '../RegistrationSuccess/RegistrationSuccess';

interface RegisterUserProps {
    className?: string;
}

export const RegisterUser = memo((props: RegisterUserProps) => {
    const { className } = props;
    
    const dispatch = useAppDispatch();
    const registrationData = useSelector(getRegistrationData);
    const validationErrors = useSelector(getRegistrationValidationErrors);
    const isLoading = useSelector(getRegistrationIsLoading);
    const newUser = useSelector(getCreatedUser);

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

    if (newUser) {
        return <RegistrationSuccess />;
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
