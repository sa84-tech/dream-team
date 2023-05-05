import { StateSchema } from '@/app/providers/StoreProvider';

export const getUsersPageIsLoading = (state: StateSchema) => state.usersPage?.isLoading;

export const getUsersPageError = (state: StateSchema) => state.usersPage?.error;

export const getUsersPageOffset = (state: StateSchema) => state.usersPage?.offset ?? 0;

export const getUsersPageNext = (state: StateSchema) => state.usersPage?.next ? true : false;

export const getUsersPageTotal = (state: StateSchema) => state.usersPage?.total;
