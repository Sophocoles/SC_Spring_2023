from rest_framework import serializers
from .models import CustomUser, Provider, Client, Agency, FhirEndpoint
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.models import update_last_login
from django.contrib.auth.hashers import make_password

User = get_user_model()

class CustomUserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Add this line

    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

        
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    
    username_field = User.EMAIL_FIELD

    def validate(self, attrs):
        data = super().validate(attrs)
        update_last_login(None, self.user)
        print("Access token:", data['access'])

        return data
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provider
        fields = '__all__'
        
class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = '__all__'
        
class AgencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Agency
        fields = '__all__'

class EndpointSerializer(serializers.ModelSerializer):
    class Meta:
        model = FhirEndpoint
        fields = '__all__'

class ProviderClientsSerializer(ClientSerializer):
    user = serializers.SerializerMethodField()

    class Meta(ClientSerializer.Meta):
        depth = 1

    def get_user(self, obj):
        user_serializer = UserSerializer(obj.user)
        return user_serializer.data