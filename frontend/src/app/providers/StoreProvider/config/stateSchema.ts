import { CounterSchema } from '@/entities/Counter';
import { UserDetailsPageSchema } from '@/pages/UserDetailsPage';
import { UsersPageSchema } from '@/pages/UsersPage';

export interface StateSchema {
    counter: CounterSchema;
    usersPage: UsersPageSchema;
    userDetails: UserDetailsPageSchema;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}
