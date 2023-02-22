from django.contrib import admin
from .models import Sc

class ScAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(Sc, ScAdmin)