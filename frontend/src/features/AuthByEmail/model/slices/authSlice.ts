import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthSchema } from '../types/authSchema';
import { loginByEmail } from '../services/loginByEmail';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { User } from '@/entities/User';

const initialState: AuthSchema = {
    isLoading: false,
    email: '',
    password: '',
    _inited: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
            state._inited = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByEmail.pending, (state) => {
                state.error = undefined;
                state.validationErrors = undefined;
                state.isLoading = true;
            })
            .addCase(loginByEmail.fulfilled, (state) => {
                state.isLoading = false;
                state.validationErrors = undefined;
                state.error = undefined;
            })
            .addCase(loginByEmail.rejected, (state, action) => {
                state.isLoading = false;
                if (typeof action.payload === 'string') {
                    state.error = action.payload;
                } else {
                    state.validationErrors = action.payload;
                }
            });
    },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;