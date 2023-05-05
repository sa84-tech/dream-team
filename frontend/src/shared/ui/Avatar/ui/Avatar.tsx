import { classNames } from '@/shared/lib/classNames/classNames';
import { CSSProperties, useLayoutEffect, useMemo, useState } from 'react';
import { Skeleton } from '../../Skeleton/Skeleton';
import cls from './Avatar.module.scss';
import NoImage from '@/shared/assets/images/no_image-min.jpg';

interface AvatarProps {
    className?: string;
    size?: number;
    src?: string;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const { className, size = 100, src, alt } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };
        img.onerror = () => {
            setIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading) {
        return (
            <Skeleton
                className={classNames(cls.Avatar, {}, [className])}
                width={size}
                height={size}
                border="50%"
            />
        );
    }

    if (hasError) {
        return (
            <img
                className={classNames(cls.Avatar, {}, [className])}
                src={NoImage}
                alt={alt}
                style={styles}
            />
        );
    }
    NoImage;
    return (
        <img
            className={classNames(cls.Avatar, {}, [className])}
            src={src}
            alt={alt}
            style={styles}
        />
    );
};
