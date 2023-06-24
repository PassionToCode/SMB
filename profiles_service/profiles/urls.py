
from django.urls import path
#from rest_framework.routers import DefaultRouter
from profiles.views import ProfileListCreateView,ProfileDetailView

urlpatterns = [
    path("all-profiles",ProfileListCreateView.as_view(),name="all-profiles"),
    path("profile/<int:pk>",ProfileDetailView.as_view(),name="profile")
]
