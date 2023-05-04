import { User } from '@/entities/User';

export interface RegistrationSchema {
    isLoading: boolean;
    error?: string;
    data?: RegistrationFormSchema;
    user?: User;
    validationErrors?: RegistrationErrors;
}

export interface RegistrationFormSchema {
    email?: string;
    name?: string;
    firstName?: string;
    lastName?: string;
    password1?: string;
    password2?: string;
}

export type RegistrationErrors = OptionalRecord<
    keyof RegistrationFormSchema | 'apiError',
    string[]
>;
