from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms.user.createUser import CustomUserCreationForm, CustomUserChangeForm

from .models import CustomUser

class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ["email", "username", "first_name", "last_name", "user_type", "is_active"]


admin.site.register(CustomUser, CustomUserAdmin)