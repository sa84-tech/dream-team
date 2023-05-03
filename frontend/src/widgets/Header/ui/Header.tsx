import { routePath } from '@/app/providers/Router/config/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { ReactNode, memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './Header.module.scss';

interface HeaderProps {
    mainContentSlot: ReactNode;
    navBtnSlot?: ReactNode;
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { className, mainContentSlot, navBtnSlot } = props;
    const navigate = useNavigate();

    const onExit = useCallback(() => {
        navigate(routePath.login);
    }, [navigate]);

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
