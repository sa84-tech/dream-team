import { User } from '@/entities/User';

export type AuthErrors = OptionalRecord<'email' | 'password', string[]>;

export interface AuthSchema {
    email: string;
    password: string;
    isLoading: boolean;
    error?: string;
    authData?: User;
    validationErrors?: AuthErrors;

    _inited: boolean;
}
