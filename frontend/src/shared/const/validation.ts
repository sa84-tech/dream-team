export enum ValidationErrors {
    INCORRECT_EMAIL = 'некоректный e-mail',
    INCORRECT_CREDENTIALS = 'неверное имя пользователя или пароль',
    REQUIRED_FIELD = 'обязательное поле',
    PASSWORD_MISMATCH = 'пароли не совпадают',
    SHORT_PASSWORD = 'слишком короткий пароль',
    NO_DATA = 'нет данных',
    SERVER_ERROR = 'Сервер недоступен',
    UNKNOWN_ERROR = 'Неизвестная ошибка',
    NO_RESPONSE = 'Нет ответа от сервера',
}
