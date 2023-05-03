import { RegistrationFormSchema } from '@/entities/RegistrationForm';
import { RegistrationErrors, ValidateRegistrationError } from '../../types/registration';

export const validateRegistrationData = (registrationForm?: RegistrationFormSchema) => {
    const errors: RegistrationErrors = {};
    if (!registrationForm) {
        errors.error = [ValidateRegistrationError.NO_DATA];
        return errors
    }
    
    const { name, email, password1, password2 } = registrationForm;


    if (!name) {
        errors.name
            ? errors.name.push(ValidateRegistrationError.REQUIRED_FIELD)
            : (errors.name = [ValidateRegistrationError.REQUIRED_FIELD]);
    }

    if (!email) {
        errors.email
            ? errors.email?.push(ValidateRegistrationError.REQUIRED_FIELD)
            : (errors.email = [ValidateRegistrationError.REQUIRED_FIELD]);
    }

    if (!password1) {
        errors.password1
            ? errors.password1?.push(ValidateRegistrationError.REQUIRED_FIELD)
            : (errors.password1 = [ValidateRegistrationError.REQUIRED_FIELD]);
    }

    if (password1 && password1.length <= 5) {
        errors.password1
            ? errors.password1?.push(ValidateRegistrationError.SHORT_PASSWORD)
            : (errors.password1 = [ValidateRegistrationError.SHORT_PASSWORD]);
    }

    if (!password2) {
        errors.password2
            ? errors.password2?.push(ValidateRegistrationError.REQUIRED_FIELD)
            : (errors.password2 = [ValidateRegistrationError.REQUIRED_FIELD]);
    }

    if (password1 !== password2) {
        errors.password2
            ? errors.password2?.push(ValidateRegistrationError.PASSWORD_MISMATCH)
            : (errors.password2 = [ValidateRegistrationError.PASSWORD_MISMATCH]);
    }

    return errors;
};
