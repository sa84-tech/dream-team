import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { routePath } from '@/app/providers/Router/config/routeConfig';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui/Button/Button';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
    const { className } = props;

    const navigate = useNavigate();

    const onAuthSuccess = useCallback(() => {
        navigate(routePath.users);
    }, [navigate]);

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            <p>404 Страница не найдена</p>
            <Button onClick={onAuthSuccess}>На главную</Button>
        </div>
    );
});
