from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ScSerializer
from .models import Sc

# Create your views here.

class ScView(viewsets.ModelViewSet):
    serializer_class = ScSerializer
    queryset = Sc.objects.all()