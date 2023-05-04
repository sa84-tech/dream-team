import { ThunkConfig } from '@/app/providers/StoreProvider/config/stateSchema';
import { User } from '@/entities/User';
import { $api } from '@/shared/api/api';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { ValidationErrors } from '@/shared/const/validation';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { authActions } from '../slices/authSlice';
import { AuthErrors } from '../types/authSchema';

interface LoginByEmailProps {
    email: string;
    password: string;
}

export const loginByEmail = createAsyncThunk<
    User,
    LoginByEmailProps,
    ThunkConfig<AuthErrors | string>
>('auth/loginByEmail', async (authData, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;

    try {
        const response = await $api.post<User>('/login/', authData);

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
        dispatch(authActions.setAuthData(response.data));
        return response.data;
    } catch (_err) {
        const err = _err as AxiosError;

        if (err.response) {
            if (err.response.status === 400) {
                return rejectWithValue(err.response.data as AuthErrors);
            }

            if (err.response.status === 401) {
                return rejectWithValue(ValidationErrors.INCORRECT_CREDENTIALS);
            }

            return rejectWithValue(ValidationErrors.SERVER_ERROR);
        }

        if (err.request) {
            return rejectWithValue(ValidationErrors.NO_RESPONSE);
        }

        return rejectWithValue(ValidationErrors.UNKNOWN_ERROR);
    }
});
