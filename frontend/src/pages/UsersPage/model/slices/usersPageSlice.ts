import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { User } from '@/entities/User';
import { fetchUsers } from '../services/fetchUsers/fetchUsers';
import { UsersPageSchema } from '../types/usersPage';

const usersAdapter = createEntityAdapter<User>({
    selectId: (user) => user.id,
});

export const getUsers = usersAdapter.getSelectors<StateSchema>(
    (state) => state.usersPage || usersAdapter.getInitialState()
);

const usersPageSlice = createSlice({
    name: 'usersPageSlice',
    initialState: usersAdapter.getInitialState<UsersPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        next: '',
        previous: '',
        total: 0,
        limit: 8,
        offset: 0,
    }),
    reducers: {
        setOffset: (state, action: PayloadAction<number>) => {
            state.offset = action.payload;
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.next = action.payload.next;
                state.previous = action.payload.previous;
                state.total = action.payload.count;
                
                if (action.meta.arg.addMore) {
                    usersAdapter.addMany(state, action.payload.results);
                } else {
                    usersAdapter.setAll(state, action.payload.results);
                }
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    reducer: usersPageReducer,
    actions: usersPageActions,
} = usersPageSlice;
