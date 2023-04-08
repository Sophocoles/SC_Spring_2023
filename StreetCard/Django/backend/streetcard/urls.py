from django.urls import path

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from .views.users import signup, login_view, get_user_info, CustomUserViewSet, MeView
from rest_framework.routers import DefaultRouter


urlpatterns = [
    #These urls take the form of yourDjangoUrl/accounts/pathName
    path("signup/", signup, name="signup"),
    path("login/", login_view, name="login"),
    
    #Get user info
    path('api/user_info/', get_user_info, name='user_info'),
    
    #Auth views
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('me/', MeView.as_view(), name='me'),
]