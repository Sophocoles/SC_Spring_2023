from django.contrib import admin
from .models import StreetCard_FHIR

class StreetCard_FHIRAdmin(admin.ModelAdmin):
    list_display = ('name', 'client_id', 'scope','url','redirect_uri','patientId','patientName')

# Register your models here.

admin.site.register(StreetCard_FHIR, StreetCard_FHIRAdmin)