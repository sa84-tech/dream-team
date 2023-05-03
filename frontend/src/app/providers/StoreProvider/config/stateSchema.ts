import { CounterSchema } from '@/entities/Counter';
import { AuthSchema } from '@/features/AuthByEmail';
import { RegistrationSchema } from '@/features/RegisterUser';
import { UserDetailsPageSchema } from '@/pages/UserDetailsPage';
import { UsersPageSchema } from '@/pages/UsersPage';

export interface StateSchema {
    counter: CounterSchema;
    usersPage: UsersPageSchema;
    userDetails: UserDetailsPageSchema;
    auth: AuthSchema;
    registration: RegistrationSchema;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}
