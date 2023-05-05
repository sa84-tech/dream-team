import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './UserDetailsPageHeader.module.scss';
import { User } from '@/entities/User';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface UserDetailsPageHeaderProps {
    className?: string;
    user?: User;
    isLoading?: boolean;
}

export const UserDetailsPageHeader = (props: UserDetailsPageHeaderProps) => {
    const { className, user, isLoading } = props;

    return (
        <div className={classNames(cls.UserDetailsPageHeader, {}, [className])}>
            <main className={cls.container}>
                <div className={classNames(cls.card, {}, [className])}>
                    {isLoading ? (
                        <Skeleton className={cls.avatar} border="50%" width={187} height={187} />
                    ) : (
                        <>
                            <Avatar className={cls.avatar} src={user?.avatar} size={187} />
                            <div className={cls.info}>
                                <h1 className={cls.name}>
                                    {user?.firstName} {user?.lastName}
                                </h1>
                                <div className={cls.role}>{user?.role}</div>
                            </div>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
};
