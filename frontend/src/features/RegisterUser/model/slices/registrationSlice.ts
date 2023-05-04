import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegistrationFormSchema, RegistrationSchema } from '../types/registration';
import { registerUser } from '../services/registerUser/registerUser';
import { User } from '@/entities/User';

const initData = {
    email: '',
    name: '',
    password1: '',
    password2: '',
};

const initialState: RegistrationSchema = {
    isLoading: false,
    validationErrors: undefined,
    data: initData,
    user: undefined,
};

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<RegistrationFormSchema>) => {
            state.data = {
                ...state.data,
                ...action.payload,
            };
        },
        clearData: (state) => {
            state.user = undefined;
            state.data = initData;
            state.validationErrors = undefined;
            state.error = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(
                registerUser.fulfilled,
                (state, action: PayloadAction<User>) => {
                    state.isLoading = false;
                    state.user = action.payload;
                }
            )
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                if (typeof action.payload === 'string') {
                    state.error = action.payload;
                } else {
                    state.validationErrors = action.payload;
                }
            });
    },
});

export const { actions: registrationActions } = registrationSlice;
export const { reducer: registrationReducer } = registrationSlice;
