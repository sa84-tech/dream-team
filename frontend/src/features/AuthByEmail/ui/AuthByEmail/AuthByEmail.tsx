import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import {
    getAuthValidationErrors,
    getEmail,
    getError,
    getIsLoading,
    getPassword,
} from '../../model/selectors/authByEmailSelectors';
import { authActions } from '../../model/slices/authSlice';
import { LoginForm } from '../LoginForm/LoginForm';
import { loginByEmail } from '../../model/services/loginByEmail';

interface AuthByEmailProps {
    onSuccess: () => void;
}

export const AuthByEmail = memo((props: AuthByEmailProps) => {
    const { onSuccess } = props;

    const dispatch = useAppDispatch();
    const email = useSelector(getEmail);
    const password = useSelector(getPassword);
    const validationErrors = useSelector(getAuthValidationErrors);
    const authError = useSelector(getError);
    const isLoading = useSelector(getIsLoading);

    const onChangeEmail = useCallback(
        (value?: string) => {
            dispatch(authActions.setEmail(value ?? ''));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value?: string) => {
            dispatch(authActions.setPassword(value ?? ''));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByEmail());
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess();
        }
    }, [onSuccess, dispatch]);

    return (
        <LoginForm
            email={email}
            password={password}
            onChangeEmail={onChangeEmail}
            onChangePassword={onChangePassword}
            onLoginClick={onLoginClick}
            validationErrors={validationErrors}
            authError={authError}
            isLoading={isLoading}
        />
    );
});
