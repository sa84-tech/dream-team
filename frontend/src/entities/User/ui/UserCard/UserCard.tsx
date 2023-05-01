import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './UserCard.module.scss';
import { User } from '../../model/types/user';
import { Card } from '@/shared/ui/Card/Card';
import { Avatar } from '@/shared/ui/Avatar';
import Like from '@/shared/assets/like.svg';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';

interface UserCardProps {
    className?: string;
    user: User;
}

export const UserCard = memo((props: UserCardProps) => {
    const { className, user } = props;

    return (
        <Card className={classNames(cls.UserCard, {}, [className])}>
            <Avatar className={cls.avatar} src={user.avatar} size={134} />
            <div className={cls.name}>
                {user.firstName} {user.lastName}
            </div>
            <Button variant={ButtonVariant.CLEAR} className={cls.like}>
                <Like />
            </Button>
        </Card>
    );
});
