from rest_framework.generics import (ListCreateAPIView,RetrieveUpdateDestroyAPIView)
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from profiles.models import Profiles
from profiles.serializers import ProfileSerializer
# Create your views here.

class ProfileListCreateView(ListCreateAPIView):
    queryset = Profiles.objects.all()
    serializer_class = ProfileSerializer
    #permission_classes = [IsAuthenticated,IsAdminUser]
    
class ProfileDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Profiles.objects.all()
    serializer_class = ProfileSerializer    
    #permission_classes = [IsAuthenticated,]

