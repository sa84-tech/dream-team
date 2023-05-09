import { routePath } from '@/app/providers/Router/config/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Header } from '@/widgets/Header';
import { PageError } from '@/widgets/PageError';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
    gerUserDetails,
    getUserDetailsError,
    getUserDetailsIsLoading,
} from '../../model/selectors/userDetailsSelectors';
import { fetchUserDetails } from '../../model/services/fetchUserDetails/fetchUserDetails';
import { UserDetailsContent } from '../UserDetailsContent/UserDetailsContent';
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
    const error = useSelector(getUserDetailsError);

    const onBackClick = useCallback(() => {
        navigate(routePath.users);
    }, [navigate]);

    useEffect(() => {
        if (id) {
            dispatch(fetchUserDetails(Number(id)));
        }
    }, [dispatch, id]);

    return (
        <div className={classNames(cls.UserDetailsPage, {}, [className])}>
            <Header
                contentSlot={
                    <UserDetailsPageHeader
                        user={user}
                        isLoading={isLoading}
                        error={error}
                    />
                }
                onBackClick={onBackClick}
            />
            <main className={cls.main}>
                {error ? (
                    <PageError message={error} />
                ) : (
                    <UserDetailsContent user={user} isLoading={isLoading} />
                )}
            </main>
            <div className={cls.more}></div>
        </div>
    );
};
