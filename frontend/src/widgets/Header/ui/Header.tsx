import { authActions } from '@/features/AuthByEmail/model/slices/authSlice';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/Button/Button';
import { ReactNode, memo, useCallback } from 'react';
import cls from './Header.module.scss';
import { useResize } from '@/shared/lib/hooks/useResize/useResize';
import ExitIcon from '@/shared/assets/icons/exit.svg';

interface HeaderProps {
    mainContentSlot: ReactNode;
    navBtnSlot?: ReactNode;
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { className, mainContentSlot, navBtnSlot } = props;
    const dispatch = useAppDispatch();

    const screenSize = useResize();

    const onExit = useCallback(() => {
        dispatch(authActions.logout());
    }, [dispatch]);

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <div className={cls.navBtnWrapper}>{navBtnSlot}</div>
            {mainContentSlot}
            {screenSize.isMD ? (
                <Button
                    className={cls.logoutBtn}
                    variant={ButtonVariant.OUTLINE_INVERTED}
                    onClick={onExit}
                >
                    Выход
                </Button>
            ) : (
                <Button
                    className={cls.logoutBtn}
                    variant={ButtonVariant.CLEAR}
                    onClick={onExit}
                    square
                >
                    <ExitIcon />
                </Button>
            )}
        </header>
    );
});
