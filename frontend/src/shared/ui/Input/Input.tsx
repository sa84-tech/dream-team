import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    errors?: string[];
}

export const Input = (props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        errors = [],
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const hasErrors = errors.length > 0;

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.errorBorder]: hasErrors,
    };

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            {placeholder && <div className={cls.placeholder}>{placeholder}</div>}
            <input
                type={type}
                value={value}
                onChange={onChangeValue}
                className={classNames(cls.input, mods)}
                {...otherProps}
            />
            {hasErrors && errors.map((error) => <div key={error} className={cls.error}>{error}</div>)}
        </div>
    );
};
