from django.db import models

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