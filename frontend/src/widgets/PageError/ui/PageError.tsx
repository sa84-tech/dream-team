import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { Button } from '@/shared/ui/Button/Button';

interface PageErrorProps {
    className?: string;
    message?: string;
}

export const PageError = (props: PageErrorProps) => {
    const { className, message } = props;
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{ message || 'Произошла непредвиденная ошибка'}</p>
            <Button onClick={reloadPage}>Обновить страницу</Button>
        </div>
    );
};
