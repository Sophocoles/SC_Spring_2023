from django.contrib.auth.models import AbstractUser
from django.db import models

class FhirEndpoint(models.Model):
    name = models.CharField(max_length=255)
    url = models.URLField()
    client_id = models.CharField(max_length=120)
    redirect_uri = models.CharField(max_length=200)
    scope = models.CharField(max_length=1000)
    agencies = models.ManyToManyField('Agency', blank=True)

    def __str__(self):
        return self.name

class Agency(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    website = models.CharField(max_length=100)
    contact_person = models.CharField(max_length=100)
    phone_numbers = models.CharField(max_length=100)
    email = models.EmailField()
    description = models.TextField()
    endpoints = models.ManyToManyField('FhirEndpoint', blank=True)

class CustomUser(AbstractUser):
    email = models.EmailField(blank=False, unique=True)
    first_name = models.CharField(max_length=30, blank=False)
    last_name = models.CharField(max_length=30, blank=False)
    USER_TYPE_CHOICES = (
        ('client', 'Client'),
        ('provider', 'Provider'),
    )
    user_type = models.CharField(max_length=10, choices=USER_TYPE_CHOICES, blank=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    def __str__(self):
        return self.username

class Client(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True, blank=True)
    phone_number = models.CharField(max_length=10, blank=True)
    providers = models.ManyToManyField('Provider', blank=True)
    agencies = models.ManyToManyField(Agency, related_name='agency_clients', blank=True)
    
    def get_first_name(self, obj):
        return obj.user.first_name
    
    def get_last_name(self, obj):
        return obj.user.last_name

    def __str__(self):
        return self.user.username

class Provider(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, primary_key=True, blank=True)
    company_name = models.CharField(max_length=100, blank=True)
    clients = models.ManyToManyField('Client', blank=True)
    
    def get_username(self, obj):
        return obj.user.first_name
    
    def get_first_name(self, obj):
        return obj.user.last_name

    def __str__(self):
        return self.user.username
