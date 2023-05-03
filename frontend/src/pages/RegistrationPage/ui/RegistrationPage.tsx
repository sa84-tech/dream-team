import { RegisterUser } from '@/features/RegisterUser';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './RegistrationPage.module.scss';

interface RegistrationPageProps {
    className?: string;
}

export const RegistrationPage = memo((props: RegistrationPageProps) => {
    const { className } = props;

    return (
        <main className={classNames(cls.RegistrationPage, {}, [className])}>
            <RegisterUser />
        </main>
    );
});
