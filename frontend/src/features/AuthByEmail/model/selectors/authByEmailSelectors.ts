import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserInited = (state: StateSchema) => state.auth._inited;
export const getEmail = (state: StateSchema) => state.auth.email ?? '';
export const getPassword = (state: StateSchema) => state.auth.password ?? '';
export const getAuthData = (state: StateSchema) => state.auth.authData;
export const getIsLoading = (state: StateSchema) => state.auth.isLoading;
export const getError = (state: StateSchema) => state.auth.error;
export const getAuthValidationErrors = (state: StateSchema) =>
    state.auth?.validationErrors;
