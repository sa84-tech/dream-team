import ErrorIcon from '@/shared/assets/icons/error.svg';
import SuccessIcon from '@/shared/assets/icons/success.svg';
import WarningIcon from '@/shared/assets/icons/warning.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Button, ButtonSize, ButtonVariant } from '../Button/Button';
import cls from './Result.module.scss';

type resultType = 'success' | 'warning' | 'error';

interface ResultProps {
    className?: string;
    text: string;
    type?: resultType;
    width?: number;
    onClick?: () => void;
}

export const Result = memo((props: ResultProps) => {
    const { className, type = 'success', text, width = 350, onClick } = props;

    const getIcon = useCallback((type: resultType) => {
        const icons = {
            success: <SuccessIcon />,
            warning: <WarningIcon />,
            error: <ErrorIcon />,
        };
        return icons[type];
    }, []);

    return (
        <div
            className={classNames(cls.Result, {}, [className])}
            style={{ width }}
        >
            <div className={cls.icon}>{getIcon(type)}</div>
            <p>{text}</p>
            <Button
                size={ButtonSize.L}
                variant={ButtonVariant.PRIMARY}
                onClick={onClick}
                fullWidth={false}
            >
                Ок
            </Button>
        </div>
    );
});
