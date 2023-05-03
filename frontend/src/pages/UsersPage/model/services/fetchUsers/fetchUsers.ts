import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider/config/stateSchema';
import { User } from '@/entities/User';
import { $api } from '@/shared/api/api';
import { getUsersPageOffset } from '../../selectors/usersPageSelectors';

interface ApiResponse {
    count: number;
    next: string;
    previous: string;
    results: User[];
}

interface FetchUsersProps {
    addMore?: boolean;
}

export const fetchUsers = createAsyncThunk<ApiResponse, FetchUsersProps, ThunkConfig<string>>(
    'usersPage/fetchUsers',
    async ({ addMore }, thunkApi) => {
        const { rejectWithValue, getState } = thunkApi;
        const offset = addMore ? getUsersPageOffset(getState()) : 0;

        try {
            const response = await $api.get<ApiResponse>('/users/', {
                params: {
                    offset: offset,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
