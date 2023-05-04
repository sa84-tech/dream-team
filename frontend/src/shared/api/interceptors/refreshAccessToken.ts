import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import axios, { AxiosRequestConfig } from 'axios';

export interface OriginalRequestConfig extends AxiosRequestConfig {
    hasAttempt?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const refreshAccessToken = async (error: any) => {
    const originalRequest: OriginalRequestConfig = error.config;

    if (originalRequest.url !== 'token/' && error.response) {
        if (
            (error.response.status === 401 || error.response.status === 403) &&
            !error.config.hasAttempt
        ) {
            originalRequest.hasAttempt = true;

            const authData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (!authData) {
                return Promise.reject(error);
            }
            const tokens = JSON.parse(authData);

            try {
                const res = await axios.post(`${__API__}/api/token/refresh/`, {
                    refresh: tokens.refresh,
                });

                localStorage.setItem(
                    USER_LOCALSTORAGE_KEY,
                    JSON.stringify({
                        ...tokens,
                        ...res.data,
                    }),
                );
                return originalRequest;
            } catch (err) {
                return Promise.reject(err);
            }
        }
    }

    return Promise.reject(error);
};
