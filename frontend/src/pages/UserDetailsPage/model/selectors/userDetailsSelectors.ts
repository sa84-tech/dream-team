import { StateSchema } from '@/app/providers/StoreProvider';

export const gerUserDetails = (state: StateSchema) => state.userDetails?.data;
export const getUserDetailsError = (state: StateSchema) => state.userDetails?.error;
export const getUserDetailsIsLoading = (state: StateSchema) => state.userDetails?.isLoading;
