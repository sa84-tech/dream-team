import { User } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useResize } from '@/shared/lib/hooks/useResize/useResize';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import cls from './UserDetailsPageHeader.module.scss';

interface UserDetailsPageHeaderProps {
    className?: string;
    user?: User;
    isLoading?: boolean;
    error?: string;
}

export const UserDetailsPageHeader = (props: UserDetailsPageHeaderProps) => {
    const { className, user, isLoading, error } = props;

    const screen = useResize();

    const skeletonNameHeight = screen.isXL ? 75 : 42;
    const skeletonRoleHeight = screen.isXL ? 42 : 22;

    if (isLoading) {
        return (
            <div className={classNames(cls.UserDetailsPageHeader, {}, [className])}>
                <div className={classNames(cls.card, {}, [className])}>
                    <Skeleton className={cls.avatar} border="50%" width={187} height={187} />
                    <div className={cls.info}>
                        <h1 className={cls.name}>
                            <Skeleton
                                border="8px"
                                width={skeletonNameHeight * 6}
                                height={skeletonNameHeight}
                            />
                        </h1>
                        <div className={cls.role}>
                            <Skeleton
                                border="8px"
                                width="75%"
                                height={skeletonRoleHeight}
                                display="inline-block"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.UserDetailsPageHeader, {}, [className])}>
                <h1 style={{ textAlign: 'center' }} className={cls.name}>
                    Нет данных
                </h1>
            </div>
        );
    }

    return (
        <div className={classNames(cls.UserDetailsPageHeader, {}, [className])}>
            <div className={classNames(cls.card, {}, [className])}>
                <Avatar className={cls.avatar} src={user?.avatar} size={187} />
                <div className={cls.info}>
                    <h1 className={cls.name}>
                        {user?.firstName} {user?.lastName}
                    </h1>
                    <div className={cls.role}>{user?.role}</div>
                </div>
            </div>
        </div>
    );
};
