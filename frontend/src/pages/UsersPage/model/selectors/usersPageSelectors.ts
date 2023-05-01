import { StateSchema } from '@/app/providers/StoreProvider';

export const getUsersPageIsLoading = (state: StateSchema) => state.usersPage?.isLoading;

export const getUsersPageError = (state: StateSchema) => state.usersPage?.error;

export const getUsersPageOffset = (state: StateSchema) => state.usersPage?.offset || 0;

export const getUsersPageLimit = (state: StateSchema) => state.usersPage?.limit || 8;

export const getUsersPageTotal = (state: StateSchema) => state.usersPage?.total;

export const getUsersPageCount = (state: StateSchema) => {
    const limit = state.usersPage?.limit;
    const total = state.usersPage?.total;
    return Math.ceil(total / limit)
};
