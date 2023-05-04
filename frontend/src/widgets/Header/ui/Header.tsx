import { authActions } from '@/features/AuthByEmail/model/slices/authSlice';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { ReactNode, memo, useCallback } from 'react';
import cls from './Header.module.scss';

interface HeaderProps {
    mainContentSlot: ReactNode;
    navBtnSlot?: ReactNode;
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { className, mainContentSlot, navBtnSlot } = props;
    const dispatch = useAppDispatch();

    const onExit = useCallback(() => {
        dispatch(authActions.logout());
    }, [dispatch]);

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <div className={cls.navBtnWrapper}>{navBtnSlot}</div>
            {mainContentSlot}
            <Button
                className={cls.logoutBtn}
                variant={ButtonVariant.OUTLINE_INVERTED}
                onClick={onExit}
            >
                Выход
            </Button>
        </header>
    );
});
