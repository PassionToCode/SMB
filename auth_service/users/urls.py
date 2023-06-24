from django.urls import path
#from rest_framework.routers import DefaultRouter
from users.views import UserListAPIView

urlpatterns = [
    path("all-users",UserListAPIView.as_view(),name="all-users"),    
]