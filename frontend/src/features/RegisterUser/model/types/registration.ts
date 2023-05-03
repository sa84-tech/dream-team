import { RegistrationFormSchema } from "@/entities/RegistrationForm";
import { User } from "@/entities/User";

export enum ValidateRegistrationError {
    INCORRECT_EMAIL = 'некоректный e-mail',
    REQUIRED_FIELD = 'обязательное поле',
    PASSWORD_MISMATCH = 'пароли не совпадают',
    SHORT_PASSWORD = 'слишком короткий пароль',
    NO_DATA = 'нет данных',
    SERVER_ERROR = 'ошибка на сервере',
}

export type RegistrationErrors = OptionalRecord<keyof RegistrationFormSchema, ValidateRegistrationError[]>

export interface RegistrationSchema {
    isLoading: boolean,
    error?: string;
    data?: RegistrationFormSchema;
    user?: User;
    validateErrors?: RegistrationErrors;
}