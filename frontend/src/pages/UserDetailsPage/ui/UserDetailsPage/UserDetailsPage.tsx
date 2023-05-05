import { routePath } from '@/app/providers/Router/config/routeConfig';
import BackIcon from '@/shared/assets/icons/back.svg';
import EmailIcon from '@/shared/assets/icons/email.svg';
import PhoneIcon from '@/shared/assets/icons/phone.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useResize } from '@/shared/lib/hooks/useResize/useResize';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { Header } from '@/widgets/Header';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
    gerUserDetails,
    getUserDetailsIsLoading,
} from '../../model/selectors/userDetailsSelectors';
import { fetchUserDetails } from '../../model/services/fetchUserDetails/fetchUserDetails';
import { UserDetailsPageHeader } from '../UserDetailsPageHeader/UserDetailsPageHeader';
import cls from './UserDetailsPage.module.scss';

interface UserDetailsPageProps {
    className?: string;
}

export const UserDetailsPage = (props: UserDetailsPageProps) => {
    const { className } = props;
    const { id } = useParams<{ id: string }>();

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const user = useSelector(gerUserDetails);
    const isLoading = useSelector(getUserDetailsIsLoading);

    const onBackClick = useCallback(() => {
        navigate(routePath.users);
    }, [navigate]);

    const screenSize = useResize();

    useEffect(() => {
        if (id) {
            dispatch(fetchUserDetails(Number(id)));
        }
    }, [dispatch, id]);

    return (
        <div className={classNames(cls.UserDetailsPage, {}, [className])}>
            <Header
                mainContentSlot={<UserDetailsPageHeader user={user} isLoading={isLoading} />}
                navBtnSlot={
                    screenSize.isMD ? (
                        <Button variant={ButtonVariant.OUTLINE_INVERTED} onClick={onBackClick}>
                            Назад
                        </Button>
                    ) : (
                        <Button variant={ButtonVariant.CLEAR} onClick={onBackClick} square>
                            <BackIcon />
                        </Button>
                    )
                }
            />
            <main className={cls.main}>
                <section className={cls.content}>{user?.bio ? user.bio : <h2>Профиль не заполнен</h2>}</section>
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
            </main>
            <div className={cls.more}></div>
        </div>
    );
};
