import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './AuthByEmail.module.scss';
import { memo } from 'react';

interface AuthByEmailProps {
    className?: string;
}

export const AuthByEmail = memo((props: AuthByEmailProps) => {
    const { className } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cls.AuthByEmail, {}, [className])}>
           
        </div>
    );
});