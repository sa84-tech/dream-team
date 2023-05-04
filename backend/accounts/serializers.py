from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        if 'password' in validated_data:
            from django.contrib.auth.hashers import make_password
            validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

    class Meta:
        model = get_user_model()
        fields = '__all__'
        write_only_fields = ('password',)


class UserShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'first_name', 'last_name', 'avatar')


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['email'] = user.email
        return token
