import { ThunkConfig } from '@/app/providers/StoreProvider/config/stateSchema';
import { User } from '@/entities/User';
import { $api } from '@/shared/api/api';
import { ValidationErrors } from '@/shared/const/validation';
import { getFirstName, getLastName } from '@/shared/lib/names/getName';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { getRegistrationData } from '../../selectors/registrationSelectors';
import {
    RegistrationErrors,
} from '../../types/registration';
import { validateRegistrationData } from '../validateRegistrationData/validateRegistrationData';

export const registerUser = createAsyncThunk<
    User,
    void,
    ThunkConfig<RegistrationErrors | string>
>('registration/registerUser', async (_, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const formData = getRegistrationData(getState());
    const errors = validateRegistrationData(formData);
    
    if (Object.keys(errors).length !== 0) {
        return rejectWithValue(errors);
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
            throw new Error('no data');
        }

        return response.data;
    } catch (_err) {
        const err = _err as AxiosError;

        if (err.response) {
            if (err.response.status === 400) {
                return rejectWithValue(err.response.data as RegistrationErrors);
            }
            return rejectWithValue(ValidationErrors.SERVER_ERROR);
        }

        if (err.request) {
            return rejectWithValue(ValidationErrors.NO_RESPONSE);
        }

        return rejectWithValue(ValidationErrors.UNKNOWN_ERROR);
    }
});
