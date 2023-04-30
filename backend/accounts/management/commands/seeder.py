import json
import os

from django.contrib.auth import get_user_model
from django.core.management import BaseCommand
from environs import Env

from accounts.models import CustomUser
from django.db import IntegrityError

from config.settings import BASE_DIR

env = Env()
env.read_env()

ADM_PASSWD = env.str('INIT_ADM_PSWD', default='Admin00')
USR_PASSWD = env.str('INIT_USR_PSWD', default='User00')

UserModel = get_user_model()


class Command(BaseCommand):
    def handle(self, *args, **options):
        try:
            file_path = os.path.join(BASE_DIR, 'accounts', 'management', 'commands', 'fake_data.json')
            with open(file_path, 'r', encoding='utf-8') as read_file:
                data = json.load(read_file)

            if data.get('users'):
                for user in data['users']:
                    try:
                        if user['is_superuser']:
                            password = ADM_PASSWD
                        else:
                            password = USR_PASSWD
                        new_user = UserModel.objects.create_user(**user, password=password)
                        new_user.save()
                        print(f'** New user created ({new_user.get_full_name()}) **')
                    except IntegrityError:
                        print(f'** User {user["email"]} aready exists **')

        except IOError as error:
            print('!!!', error)
            return
