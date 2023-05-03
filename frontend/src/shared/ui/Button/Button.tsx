import { ButtonHTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonVariant {
    PRIMARY = 'primary',
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outline_inverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
    fullWidth?: boolean;
    size?: ButtonSize;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        variant = ButtonVariant.OUTLINE,
        children,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, {}, [cls[variant], cls[size], className])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
