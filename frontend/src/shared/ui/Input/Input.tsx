import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import { InputHTMLAttributes, ReactNode, useEffect, useRef } from 'react';
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
    IconSlot?: ReactNode;
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
        IconSlot,
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
        [cls.inputErrorBorder]: hasErrors,
    };

    return (
        <div className={classNames(cls.Input, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>{placeholder}</div>
            )}
            <div className={cls.inputWrapper}>
                <input
                    type={type}
                    value={value}
                    onChange={onChangeValue}
                    className={classNames('', mods)}
                    {...otherProps}
                />
                {IconSlot && <div className={cls.iconWrapper}>{IconSlot}</div>}
            </div>

            {hasErrors &&
                errors.map((error) => (
                    <div key={error} className={cls.errorWrapper}>
                        {error}
                    </div>
                ))}
        </div>
    );
};
