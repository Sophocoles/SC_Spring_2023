from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from streetcard_fhir import views

router = routers.DefaultRouter()
router.register(r'streetcard_fhirs', views.StreetCard_FHIRView, 'StreetCard_FHIR')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]