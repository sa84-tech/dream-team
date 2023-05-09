import EyeClosedIcon from '@/shared/assets/icons/eye-closed.svg';
import EyeOpenedIcon from '@/shared/assets/icons/eye-opened.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './PasswordIcon.module.scss';

interface PasswordIconProps {
    className?: string;
    onClick?: () => void;
    isPasswordVisible?: boolean;
}

export const PasswordIcon = memo((props: PasswordIconProps) => {
    const { className, isPasswordVisible, onClick } = props;

    return (
        <button
            className={classNames(cls.ShowPassword, {}, [className])}
            onClick={onClick}
        >
            {isPasswordVisible ? <EyeClosedIcon /> : <EyeOpenedIcon />}
        </button>
    );
});
