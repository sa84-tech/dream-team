import { authActions } from '@/features/AuthByEmail/model/slices/authSlice';
import BackIcon from '@/shared/assets/icons/back.svg';
import ExitIcon from '@/shared/assets/icons/exit.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useResize } from '@/shared/lib/hooks/useResize/useResize';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { ReactNode, useCallback } from 'react';
import cls from './Header.module.scss';

interface HeaderProps {
    contentSlot: ReactNode;
    className?: string;
    onBackClick?: () => void;
}

export const Header = (props: HeaderProps) => {
    const { className, contentSlot, onBackClick } = props;
    const dispatch = useAppDispatch();

    const screenSize = useResize();

    const onExit = useCallback(() => {
        dispatch(authActions.logout());
    }, [dispatch]);

    const navBtn = screenSize.isMD ? (
        <Button variant={ButtonVariant.OUTLINE_INVERTED} onClick={onBackClick}>
            Назад
        </Button>
    ) : (
        <Button variant={ButtonVariant.CLEAR} onClick={onBackClick} square>
            <BackIcon />
        </Button>
    );

    const exitBtn = screenSize.isMD ? (
        <Button variant={ButtonVariant.OUTLINE_INVERTED} onClick={onExit}>
            Выход
        </Button>
    ) : (
        <Button variant={ButtonVariant.CLEAR} onClick={onExit} square>
            <ExitIcon />
        </Button>
    );

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <nav>
                <div>{onBackClick && navBtn}</div>
                {exitBtn}
            </nav>

            {contentSlot}
        </header>
    );
};
