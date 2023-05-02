from django.contrib.auth import get_user_model
from rest_framework import viewsets

from .serializers import UserSerializer, UserShortSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

    def get_serializer_class(self):
        if self.action == 'list':
            return UserShortSerializer
        return UserSerializer
