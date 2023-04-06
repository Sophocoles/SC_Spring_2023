from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # add additional fields in here
    email = models.EmailField(blank=False, unique=True)
    first_name = models.CharField(max_length=30, blank=False)
    last_name = models.CharField(max_length=30, blank=False)

    def __str__(self):
        return self.username

class Client(CustomUser):
    phone_number = models.CharField(max_length=10, blank=False)

class Provider(CustomUser):
    company_name = models.CharField(max_length=100, blank=False)