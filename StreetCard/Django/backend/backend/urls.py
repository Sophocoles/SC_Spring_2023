from django.contrib import admin
from django.urls import path, include

from rest_framework import routers
from streetcard_fhir import views
from streetcard_fhir.views import ProviderPatientsView, PatientDetailView, ConfigFromDatabaseAPIView, PatientAndEndpointsAPIView

router = routers.DefaultRouter()
router.register(r'streetcard_fhirs', views.StreetCard_FHIRView, 'streetcard_fhir')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/config/', ConfigFromDatabaseAPIView.as_view(), name='config'),
    path('api/', include(router.urls)),
    path("api/patient_and_endpoints/<int:patient_id>/", PatientAndEndpointsAPIView.as_view(), name="patient_and_endpoints"),
    path('rest-auth/', include('dj_rest_auth.urls')),  # Update this line
    path('api/provider/patients/', views.ProviderPatientsView.as_view(), name='provider-patients'),  # Add this line
    path('api/patient/<int:pk>/', PatientDetailView.as_view(), name='patient-detail'),
    path('patient/', views.PatientListCreateView.as_view(), name='patient-list-create'),
    path('fhir_endpoint/', views.FhirEndpointListCreateView.as_view(), name='fhir-endpoint-list-create'),
    path('api/patient/<int:pk>/add-endpoint/', views.AddEndpointToPatientView.as_view(), name='add-endpoint-to-patient'),
    path('api/patient/<int:pk>/remove-endpoint/', views.RemoveEndpointFromPatientView.as_view(), name='remove-endpoint-from-patient'),
]
