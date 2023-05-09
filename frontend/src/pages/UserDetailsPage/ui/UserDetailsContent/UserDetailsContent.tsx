import { User } from '@/entities/User';
import EmailIcon from '@/shared/assets/icons/email.svg';
import PhoneIcon from '@/shared/assets/icons/phone.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { memo } from 'react';
import cls from './UserDetailsContent.module.scss';

interface UserDetailsContentProps {
    className?: string;
    user?: User;
    isLoading?: boolean;
}

export const UserDetailsContent = memo((props: UserDetailsContentProps) => {
    const { className, user, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.UserDetailsContent, {}, [className])}>
                <section className={cls.content}>
                    <Skeleton border="8px" width="100%" height={96} />
                    <br/>
                    <Skeleton border="8px" width="95%" height={96} />
                    <br/>
                    <Skeleton border="8px" width="92%" height={72} />
                </section>
                <aside className={cls.contacts}>
                    <Skeleton className={cls.email} border="8px" width={150} height={24} />
                    <Skeleton className={cls.phone} border="8px" width={140} height={24} />
                </aside>
            </div>
        );
    }

    return (
        <div className={classNames(cls.UserDetailsContent, {}, [className])}>
            <section className={cls.content}>
                {user?.bio ? (
                    user.bio
                ) : (
                    <p className={cls.noProfile}>Профиль не заполнен</p>
                )}
            </section>
            <aside className={cls.contacts}>
                <a className={cls.email} href={`email:${user?.email}`}>
                    <EmailIcon /> {user?.email}
                </a>
                {user?.phone && (
                    <a className={cls.phone} href={`tel:${user?.phone}`}>
                        <PhoneIcon /> +{user?.phone}
                    </a>
                )}
            </aside>
        </div>
    );
});
