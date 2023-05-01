import { CounterSchema } from '@/entities/Counter';
import { UsersPageSchema } from '@/pages/UsersPage';

export interface StateSchema {
    counter: CounterSchema;
    usersPage: UsersPageSchema;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}
