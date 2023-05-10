import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { User } from '../../model/types/user';
import { UserCard } from '../UserCard/UserCard';
import cls from './UsersList.module.scss';

interface UsersListProps {
    className?: string;
    users: User[];
    isLoading?: boolean;
}

export const UsersList = memo((props: UsersListProps) => {
    const { className, users, isLoading } = props;

    const renderListItem = useCallback(
        (user: User) => <UserCard key={user.id} user={user} className={cls.card} />,
        [],
    );

    if (isLoading) {
        return (
            <div className={classNames(cls.UsersList, {}, [className])}>
                <UserCard user={{ id: 0, email: '' }} isLoading={true} className={cls.card} />
                <UserCard user={{ id: 0, email: '' }} isLoading={true} className={cls.card} />
                <UserCard user={{ id: 0, email: '' }} isLoading={true} className={cls.card} />
                <UserCard user={{ id: 0, email: '' }} isLoading={true} className={cls.card} />
                <UserCard user={{ id: 0, email: '' }} isLoading={true} className={cls.card} />
                <UserCard user={{ id: 0, email: '' }} isLoading={true} className={cls.card} />
                <UserCard user={{ id: 0, email: '' }} isLoading={true} className={cls.card} />
                <UserCard user={{ id: 0, email: '' }} isLoading={true} className={cls.card} />
            </div>
        );
    }

    if (!users && !isLoading) {
        <div className={classNames(cls.UsersList, {}, [className])}>
            <h2>Нет данных</h2>
        </div>;
    }

    return (
        <div className={classNames(cls.UsersList, {}, [className])}>
            {users.map(renderListItem)}
        </div>
    );
});
