import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { InternalAxiosRequestConfig } from 'axios';

export const addAuthToken = (config: InternalAxiosRequestConfig) => {
    const authData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    
    if (authData) {
        const tokens = JSON.parse(authData);
        if (config.headers) {
            config.headers.Authorization = `Bearer ${tokens?.access}`;
        }
    }
    return config;
};
