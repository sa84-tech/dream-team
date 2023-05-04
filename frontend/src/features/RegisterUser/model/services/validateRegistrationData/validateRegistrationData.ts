import { RegistrationErrors, RegistrationFormSchema } from '../../types/registration';
import { ValidationErrors } from '@/shared/const/validation';

export const validateRegistrationData = (registrationForm?: RegistrationFormSchema) => {
    const errors: RegistrationErrors = {};
    if (!registrationForm) {
        errors.apiError = [ValidationErrors.NO_DATA];
        return errors
    }
    
    const { name, email, password1, password2 } = registrationForm;


    if (!name) {
        errors.name
            ? errors.name.push(ValidationErrors.REQUIRED_FIELD)
            : (errors.name = [ValidationErrors.REQUIRED_FIELD]);
    }

    if (!email) {
        errors.email
            ? errors.email?.push(ValidationErrors.REQUIRED_FIELD)
            : (errors.email = [ValidationErrors.REQUIRED_FIELD]);
    }

    if (!password1) {
        errors.password1
            ? errors.password1?.push(ValidationErrors.REQUIRED_FIELD)
            : (errors.password1 = [ValidationErrors.REQUIRED_FIELD]);
    }

    if (password1 && password1.length <= 5) {
        errors.password1
            ? errors.password1?.push(ValidationErrors.SHORT_PASSWORD)
            : (errors.password1 = [ValidationErrors.SHORT_PASSWORD]);
    }

    if (!password2) {
        errors.password2
            ? errors.password2?.push(ValidationErrors.REQUIRED_FIELD)
            : (errors.password2 = [ValidationErrors.REQUIRED_FIELD]);
    }

    if (password1 !== password2) {
        errors.password2
            ? errors.password2?.push(ValidationErrors.PASSWORD_MISMATCH)
            : (errors.password2 = [ValidationErrors.PASSWORD_MISMATCH]);
    }

    return errors;
};
