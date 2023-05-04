import { ButtonHTMLAttributes, memo } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
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
    square?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        variant = ButtonVariant.OUTLINE,
        children,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
    };

    return (
        <button
            className={classNames(cls.Button, mods, [cls[variant], cls[size], className])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
