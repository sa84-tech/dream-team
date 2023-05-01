import { classNames } from '@/shared/lib/classNames/classNames';
import { HTMLAttributes, ReactNode } from 'react';
import cls from './Card.module.scss';

export enum CardVariant {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    variant?: CardVariant;
    children: ReactNode;
    max?: boolean;
}

export const Card = (props: CardProps) => {
    const {
        className,
        variant = CardVariant.OUTLINED,
        children,
        max,
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(cls.Card, {[cls.max]: max}, [cls[variant], className])}
            {...otherProps}
        >
            {children}
        </div>
    );
};
