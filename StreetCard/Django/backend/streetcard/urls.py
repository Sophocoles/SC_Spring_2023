from django.urls import path

from .views.users import SignUpView

urlpatterns = [
    path("signup/", SignUpView.as_view(), name="signup"),
]