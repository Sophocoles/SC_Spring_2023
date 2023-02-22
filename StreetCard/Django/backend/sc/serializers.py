from rest_framework import serializers
from .models import Sc

class ScSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sc
        fields = ('id', 'title', 'description', 'completed')