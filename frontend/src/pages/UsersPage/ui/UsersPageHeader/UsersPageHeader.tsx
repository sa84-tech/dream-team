import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './UsersPageHeader.module.scss';

interface UsersPageHeaderProps {
    className?: string;
}

export const UsersPageHeader = memo((props: UsersPageHeaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.UsersPageHeader, {}, [className])}>
            <h1>Наша команда</h1>
            <p>
                Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их
                плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.
            </p>
        </div>
    );
});
