import { createAsyncThunk } from '@reduxjs/toolkit';

import { $api } from '@/shared/api/api';
import { getUsersPageLimit, getUsersPageOffset } from '../../selectors/usersPageSelectors';
import { User } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/stateSchema';

interface ApiResponse {
    count: number;
    next: string;
    previous: string;
    results: User[];
}

export const fetchUsers = createAsyncThunk<
ApiResponse,
    void,
    ThunkConfig<string>
    >(
        'usersPage/fetchUsers',
        async (_, thunkApi) => {
            const { rejectWithValue, getState } = thunkApi;

            const limit = getUsersPageLimit(getState());
            const offset = getUsersPageOffset(getState());

            try {
                const response = await $api.get<ApiResponse>('/users/', {
                    params: {
                        limit: limit,
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
