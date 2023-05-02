import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './UserDetailsPageHeader.module.scss';
import { Card, CardVariant } from '@/shared/ui/Card/Card';
import { User } from '@/entities/User';
import { Avatar } from '@/shared/ui/Avatar';

interface UserDetailsPageHeaderProps {
    className?: string;
    user?: User;
}


export const UserDetailsPageHeader = (props: UserDetailsPageHeaderProps) => {
    const { className, user } = props;

    return (
        <div className={classNames(cls.UserDetailsPageHeader, {}, [className])}>
            <main className={cls.container}>
                <Card className={classNames(cls.card, {}, [className])} variant={CardVariant.NORMAL}>
                    <Avatar className={cls.avatar} src={user?.avatar} size={187} />
                    <div className={cls.info}>
                        <h1 className={cls.name}>
                            {user?.firstName} {user?.lastName}
                        </h1>
                        <div className={cls.role}>{user?.role}</div>
                    </div>
                </Card>
            </main>
        </div>
    );
};
