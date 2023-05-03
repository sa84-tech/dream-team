import { UsersList } from '@/entities/User';
import Arrow from '@/shared/assets/icons/arrow.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonVariant } from '@/shared/ui/Button/Button';
import { Header } from '@/widgets/Header';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUsersPageIsLoading, getUsersPageNext, getUsersPageOffset } from '../../model/selectors/usersPageSelectors';
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
    const offset = useSelector(getUsersPageOffset)
    const next = useSelector(getUsersPageNext)

    useEffect(() => {
        dispatch(fetchUsers({}));
    }, [dispatch]);

    const onShowMore = useCallback(() => {
        
        if (next) {
            dispatch(usersPageActions.setOffset(offset + 8));
            dispatch(fetchUsers({addMore: true}))
        }
    }, [dispatch, offset, next])

    return (
        <div className={classNames(cls.UsersPage, {}, [className])}>
            <Header mainContentSlot={<UsersPageHeader />} />
            <main className={cls.main}>
                <UsersList isLoading={isLoading} users={users} />
            </main>
            <div className={classNames(cls.more, {[cls.hidden]: !next})}>
                <Button className={cls.logoutBtn} variant={ButtonVariant.OUTLINE} onClick={onShowMore} disabled={!next}>
                    Показать еще <Arrow />
                </Button>
            </div>
        </div>
    );
});
