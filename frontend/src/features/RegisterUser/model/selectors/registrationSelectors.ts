import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationData = (state: StateSchema) => state.registration?.data;
export const getCreatedUser = (state: StateSchema) => state.registration?.user;
export const getRegistrationError = (state: StateSchema) => state.registration?.error;
export const getRegistrationIsLoading = (state: StateSchema) => state.registration?.isLoading;
export const getRegistrationValidationErrors = (state: StateSchema) =>
    state.registration?.validationErrors;
