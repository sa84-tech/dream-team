import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import axios, {
    AxiosError,
    InternalAxiosRequestConfig
} from 'axios';

export interface OriginalRequestConfig extends InternalAxiosRequestConfig {
    hasAttempt?: boolean;
}

export const refreshAccessToken = async (
    error: AxiosError,
    refreshUrl: string
) => {
    const originalRequest: OriginalRequestConfig = error.config!;

    if (originalRequest.url !== 'token/' && error.response) {
        if (error.response.status === 401 && !originalRequest.hasAttempt) {
            originalRequest.hasAttempt = true;

            const authData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (!authData) {
                return Promise.reject(error);
            }
            const tokens = JSON.parse(authData);

            try {
                const res = await axios.post(
                    originalRequest.baseURL + refreshUrl,
                    {
                        refresh: tokens.refresh,
                    }
                );

                localStorage.setItem(
                    USER_LOCALSTORAGE_KEY,
                    JSON.stringify({
                        ...tokens,
                        ...res.data,
                    })
                );
                return originalRequest;
            } catch (err) {
                return Promise.reject(err);
            }
        }
    }

    return Promise.reject(error);
};
