import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './UserDetailsPage.module.scss';
import { Counter } from '@/entities/Counter';

interface UserDetailsPageProps {
    className?: string;
}

export const UserDetailsPage = memo((props: UserDetailsPageProps) => {
    const { className } = props;
	
    return (
        <div className={classNames(cls.UserDetailsPage, {}, [className])}>
            USER DETAILS PAGE
            <Counter />
        </div>
    );
});
