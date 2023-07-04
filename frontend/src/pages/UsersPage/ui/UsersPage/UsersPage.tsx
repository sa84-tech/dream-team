import { UsersList } from '@/entities/User';
import Arrow from '@/shared/assets/icons/arrow.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { Header } from '@/widgets/Header';
import { PageError } from '@/widgets/PageError';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    getUsersPageError,
    getUsersPageIsLoading,
    getUsersPageNext,
    getUsersPageOffset,
} from '../../model/selectors/usersPageSelectors';
import { fetchUsers } from '../../model/services/fetchUsers/fetchUsers';
import { getUsers, usersPageActions } from '../../model/slices/usersPageSlice';
import { UsersPageHeader } from '../UsersPageHeader/UsersPageHeader';
import cls from './UsersPage.module.scss';

interface UsersPageProps {
    className?: string;
}

export const UsersPage = memo((props: UsersPageProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const users = useSelector(getUsers.selectAll);
    const isLoading = useSelector(getUsersPageIsLoading);
    const offset = useSelector(getUsersPageOffset);
    const next = useSelector(getUsersPageNext);
    const error = useSelector(getUsersPageError);

    const initLoading = isLoading && offset === 0;

    useEffect(() => {
        dispatch(fetchUsers({}));
    }, [dispatch]);

    const onShowMore = useCallback(() => {
        if (next) {
            dispatch(usersPageActions.setOffset(offset + 8));
            dispatch(fetchUsers({ addMore: true }));
        }
    }, [dispatch, offset, next]);

    return (
        <div className={classNames(cls.UsersPage, {}, [className])}>
            <Header contentSlot={<UsersPageHeader />} />
            <main className={cls.main}>
                {error ? (
                    <PageError message={error} />
                ) : (
                    <UsersList isLoading={initLoading} users={users} />
                )}
            </main>
            <div className={classNames(cls.more, { [cls.hidden]: !next })}>
                <Button variant={ButtonVariant.OUTLINE} onClick={onShowMore} isLoading={isLoading}>
                    Показать еще <Arrow />
                </Button>
            </div>
        </div>
    );
});
