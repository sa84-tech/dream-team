# Dream Team App

## React + Django Rest Framework

#### *Тестовое задание на позицию Frontend-разработчика React.

### Технологии

#### Frontent:
* Typescript
* React
* Redux
* Feature-Sliced Design
* Vite
* Axios

#### Backend
* Python
* Django
* Django Rest Framework


## Запуск в режиме разработки

### Backend
```shell
cd ./backend
python -m venv venv
./venv/Scripts/activate  # для Windows
source ./venv/bin/activate  # для Linux
python -m pip install --upgrade pip
pip install -r requirements.txt
python manage.py migrate
python manage.py seeder  # фейковые данные, необязательно
python manage.py runserver
```

### Frontent
```shell
cd ../frontend
npm install
npm run dev
```

## Переменные окружения для продакшена
### Backend
```shell
DJANGO_SECRET=
DJANGO_DEBUG=false
DJANGO_ALLOWED_HOSTS= 
DJANGO_CORS_ALLOWED_ORIGINS=
DJANGO_CORS_ORIGIN_WHITELIST=G
DJANGO_CSRF_TRUSTED_ORIGINS=
DJANGO_DB_URL=
DJANGO_SECURE_SSL_REDIRECT=true
DJANGO_SECURE_HSTS_SECONDS=2592000
DJANGO_SECURE_HSTS_INCLUDE_SUBDOMAINS=true
DJANGO_SECURE_HSTS_PRELOAD=true
DJANGO_SESSION_COOKIE_SECURE=true
DJANGO_CSRF_COOKIE_SECURE=true
```
### Frontent
```
API_URL=
DEBUG=false
```
