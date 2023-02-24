from rest_framework import serializers
from .models import StreetCard_FHIR

class StreetCard_FHIRSerializer(serializers.ModelSerializer):
    class Meta:
        model = StreetCard_FHIR
        fields = ('id', 'name', 'client_id', 'scope','url','redirect_uri','patientId','patientName')
