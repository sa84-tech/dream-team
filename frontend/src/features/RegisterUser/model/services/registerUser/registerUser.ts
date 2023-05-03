import { ThunkConfig } from '@/app/providers/StoreProvider/config/stateSchema';
import { User } from '@/entities/User';
import { $api } from '@/shared/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRegistrationData } from '../../selectors/registrationSelectors';
import {
    validateRegistrationData,
} from '../validateRegistrationData/validateRegistrationData';
import { getFirstName, getLastName } from '@/shared/lib/names/getName';
import { RegistrationErrors, ValidateRegistrationError } from '../../types/registration';

export const registerUser = createAsyncThunk<User, void, ThunkConfig<RegistrationErrors>>(
    'registration/registerUser',
    async (_, thunkApi) => {
        const { rejectWithValue, getState } = thunkApi;

        const formData = getRegistrationData(getState());
        console.log("🚀 ~ file: registerUser.ts:18 ~ formData:", formData)

        const errors = validateRegistrationData(formData);
        console.log("🚀 ~ file: registerUser.ts:20 ~ errors:", errors)

        if (Object.keys(errors).length !== 0) {
            rejectWithValue(errors);
        }

        const requestBody = {
            firstName: getFirstName(formData?.name),
            lastName: getLastName(formData?.name),
            email: formData?.email,
            password: formData?.password1,
        };

        try {
            const response = await $api.post<User>('/users/', requestBody);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            errors.error = [ValidateRegistrationError.SERVER_ERROR];
            return rejectWithValue(errors);
        }
    },
);
