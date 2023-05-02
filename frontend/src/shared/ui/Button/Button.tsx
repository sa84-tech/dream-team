import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonVariant {
    PRIMARY = 'primary',
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outline_inverted',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const { className, variant = ButtonVariant.OUTLINE, children, ...otherProps } = props;

    return (
        <button className={classNames(cls.Button, {}, [cls[variant], className])} {...otherProps}>
            {children}
        </button>
    );
});
