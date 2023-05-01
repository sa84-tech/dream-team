import { ReactNode, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Header.module.scss';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';

interface HeaderProps {
    mainContentSlot: ReactNode;
    navBtnSlot?: ReactNode;
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { className, mainContentSlot, navBtnSlot } = props;
	
    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <div className={cls.navBtnWrapper}>
                {/* <Button theme={ButtonTheme.OUTLINE_INVERTED}>Назад</Button> */}
                {navBtnSlot}
            </div>
            {mainContentSlot}
            <Button className={cls.logoutBtn} variant={ButtonVariant.OUTLINE_INVERTED}>Выход</Button>
        </header>
    );
});
