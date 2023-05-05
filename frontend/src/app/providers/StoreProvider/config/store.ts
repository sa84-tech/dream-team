import { authReducer } from '@/features/AuthByEmail/model/slices/authSlice';
import { registrationReducer } from '@/features/RegisterUser/model/slices/registrationSlice';
import { userDetailsReducer } from '@/pages/UserDetailsPage/model/slices/userDetailsSlice';
import { usersPageReducer } from '@/pages/UsersPage/model/slices/usersPageSlice';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './stateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        usersPage: usersPageReducer,
        userDetails: userDetailsReducer,
        auth: authReducer,
        registration: registrationReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];
