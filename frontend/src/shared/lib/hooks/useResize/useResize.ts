import { Breakpoints } from '@/shared/const/screen';
import { useState, useEffect } from 'react';

export const useResize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = (event: any) => {
            setWidth(event.target.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return {
        isSM: width >= Breakpoints.SCREEN_SM,
        isMD: width >= Breakpoints.SCREEN_MD,
        isLG: width >= Breakpoints.SCREEN_LG,
        isXL: width >= Breakpoints.SCREEN_XL,
        isXXL: width >= Breakpoints.SCREEN_XXL,
    };
};
