from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # add additional fields in here
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

class Client(CustomUser):
    phone_number = models.CharField(max_length=10, blank=False)

class Provider(CustomUser):
    company_name = models.CharField(max_length=100, blank=False)
