from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
from users.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','email','first_name','last_name','is_staff']
        

class CreateUserSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User        
        fields = ['id','username','email','first_name','last_name','is_staff','password']
