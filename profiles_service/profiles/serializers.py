from rest_framework import  serializers
from profiles.models import Profiles
#from django_countries.fields import CountryField

class ProfileSerializer(serializers.ModelSerializer):
    #country = CountryField(name_only=True)
    class Meta:
        model = Profiles
        fields = ['user_id','phone_number','profile_photo','gender','country']

