from django.shortcuts import render
from rest_framework import viewsets
from .serializers import StreetCard_FHIRSerializer
from .models import StreetCard_FHIR

# Create your views here.

class StreetCard_FHIRView(viewsets.ModelViewSet):
    serializer_class = StreetCard_FHIRSerializer
    queryset = StreetCard_FHIR.objects.all()