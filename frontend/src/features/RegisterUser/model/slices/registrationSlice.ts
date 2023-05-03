import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegistrationSchema } from '../types/registration';
import { RegistrationFormSchema } from '@/entities/RegistrationForm';
import { registerUser } from '../services/registerUser/registerUser';
import { User } from '@/entities/User';

const initData = {
    email: '',
    name: '',
    password1: '',
    password2: '',
}

const initialState: RegistrationSchema = {
    isLoading: false,
    validateErrors: undefined,
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.validateErrors = action.payload;
            });
    },
});

export const { actions: registrationActions } = registrationSlice;
export const { reducer: registrationReducer } = registrationSlice;
