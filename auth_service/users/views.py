from django.shortcuts import render
from rest_framework.generics import (ListAPIView)
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from users.serializers import UserSerializer
from users.models import User

# Create your views here.
class UserListAPIView(ListAPIView):    
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]