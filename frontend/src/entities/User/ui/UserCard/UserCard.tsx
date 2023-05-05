import { routePath } from '@/app/providers/Router/config/routeConfig';
import Like from '@/shared/assets/icons/like.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../model/types/user';
import cls from './UserCard.module.scss';

interface UserCardProps {
    className?: string;
    user: User;
    isLoading?: boolean;
}

export const UserCard = memo((props: UserCardProps) => {
    const { className, user, isLoading } = props;

    if (isLoading) {
        return (
            <Card className={classNames(cls.UserCard, {}, [cls.card, className])}>
                <Skeleton className={cls.avatar} border="50%" width={134} height={134} />
                <div className={cls.name}>
                    <Skeleton className={cls.title} border="8px" width={200} height={24} />
                </div>
                <Skeleton className={cls.like} border="8px" width={26} height={26} />
            </Card>
        );
    }

    return (
        <Link
            to={routePath.users_details + user.id}
            className={classNames(cls.UserCard, {}, [className])}
        >
            <Card className={classNames(cls.card, {}, [className])}>
                <Avatar className={cls.avatar} src={user.avatar} size={134} />
                <div className={cls.name}>
                    {user.firstName} {user.lastName}
                </div>
                <Button variant={ButtonVariant.CLEAR} className={cls.like}>
                    <Like />
                </Button>
            </Card>
        </Link>
    );
});
