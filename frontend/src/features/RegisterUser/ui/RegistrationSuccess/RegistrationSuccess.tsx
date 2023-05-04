import { routePath } from '@/app/providers/Router/config/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './RegistrationSuccess.module.scss';
import { registrationActions } from '../../model/slices/registrationSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface RegistrationSuccessProps {
    className?: string;
}

export const RegistrationSuccess = memo((props: RegistrationSuccessProps) => {
    const { className } = props;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onButtonClick = useCallback(() => {
        dispatch(registrationActions.clearData());
        navigate(routePath.login);
    }, [dispatch, navigate]);

    return (
        <div className={classNames(cls.RegistrationSuccess, {}, [className])}>
            <h2>Поздравляем!</h2>
            <p>
                Вы успешно прошли регистрацию. Используейте свой e-mail и пароль
                для входа.
            </p>
            <Button
                size={ButtonSize.L}
                variant={ButtonVariant.PRIMARY}
                onClick={onButtonClick}
                fullWidth={false}
            >
                Ок
            </Button>
        </div>
    );
});
