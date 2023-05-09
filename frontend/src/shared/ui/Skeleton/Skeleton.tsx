import { classNames } from '@/shared/lib/classNames/classNames';
import { CSSProperties, memo } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    display?: 'block' | 'inline-block' | 'inline'
    border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const { className, height, width, border, display = 'block' } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
        display,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
});
