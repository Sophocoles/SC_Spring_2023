from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class StreetCard_FHIR(models.Model):
    #Properies of the StreetCard_FHIR model
    name = models.CharField(max_length=100)
    client_id = models.CharField(max_length=120)
    scope = models.CharField(max_length=120)
    url = models.URLField(max_length=200)
    redirect_uri = models.CharField(max_length=200)
    patientId = models.CharField(max_length=100)
    patientName = models.CharField(max_length=100)

    def _str_(self):
        return self.name
    
class FhirEndpoint(models.Model):
    name = models.CharField(max_length=255)
    url = models.URLField()
    client_id = models.CharField(max_length=120)
    redirect_uri = models.CharField(max_length=200)
    scope = models.CharField(max_length=1000)

    def __str__(self):
        return self.name
    
class Provider(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=100)
    # You can add other fields like email, username, etc. as needed

    def __str__(self):
        return self.name

class Patient(models.Model):
    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    provider = models.ForeignKey(Provider, on_delete=models.CASCADE, related_name='patients')
    fhir_endpoints = models.ManyToManyField(FhirEndpoint)
    # You can add other fields like age, address, etc. as needed

    def __str__(self):
        name = self.fname + " " + self.lname
        return name