import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '@/shared/api/api';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/stateSchema';
import { User } from '@/entities/User';
import { routePath } from '@/app/providers/Router/config/routeConfig';

export const fetchUserDetails = createAsyncThunk<
    User,
    number,
    ThunkConfig<string>
    >(
        'userDetails/fetchUserDetails',
        async (userId, thunkApi) => {
            const { rejectWithValue } = thunkApi;

            try {
                const response = await $api.get<User>(routePath.users_details + userId);

                if (!response.data) {
                    throw new Error();
                }

                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue('error');
            }
        },
    );
