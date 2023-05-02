import { User } from '@/entities/User';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserDetails } from '../services/fetchUserDetails/fetchUserDetails';
import { UserDetailsPageSchema } from '../types/userDetailsPage';

const initialState: UserDetailsPageSchema  = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const userDetailsSlice = createSlice({
    name: 'userDetailsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserDetails.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchUserDetails.fulfilled, (state, action: PayloadAction<User>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchUserDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: userDetailsActions } = userDetailsSlice;
export const { reducer: userDetailsReducer } = userDetailsSlice;
