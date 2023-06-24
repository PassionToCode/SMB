from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from django_countries.fields import CountryField
# Create your models here.


class Profiles(models.Model):
    user_id = models.IntegerField(primary_key=True)    
    phone_number = PhoneNumberField(verbose_name="Phone Number",max_length=30,default=None)
    profile_photo = models.ImageField(verbose_name="Photo",default="/default.jpg",null=True,blank=True)
    GENDER = (('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Others'),)
    gender = models.CharField(verbose_name="Gender",max_length=1,choices=GENDER,default='O')
    country = CountryField(verbose_name="Country",blank=False,null=False)

    REQUIRED_FIELDS = ['user_id','phone_number','profile_photo','gender','country']

    def __str__(self):
        return f"{self.user_id}'s profile"
