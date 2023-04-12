from django.shortcuts import get_object_or_404
from streetcard.models import Provider, Client, Agency
from streetcard.serializers import ProviderSerializer, ClientSerializer, AgencySerializer, ProviderClientsSerializer
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from rest_framework import status
from django.views.decorators.http import require_http_methods
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def provider_patients(request):
    # Check if the user is a provider
    if request.user.user_type != 'provider':
        return JsonResponse({"error": "User is not a provider"}, status=status.HTTP_400_BAD_REQUEST)

    # Get the provider object related to the user
    provider = get_object_or_404(Provider, user=request.user)

    # Get all the clients (patients) assigned to this provider
    clients = provider.clients.all()

    # Serialize the clients data
    client_serializer = ProviderClientsSerializer(clients, many=True)

    # Get the FHIR endpoints associated with each client's agencies
    clients_endpoints = []
    for client in clients:
        client_serialized = ClientSerializer(client)
        for agency in client.agencies.all():
            agency_serialized = AgencySerializer(agency)
            clients_endpoints.append({
                "client": client_serialized.data,
                "endpoint": agency_serialized.data["endpoints"],
            })

    # Create a dictionary with the list of patients and the JSON response
    response_data = {
        "patients": client_serializer.data,
        "endpoints": clients_endpoints,
    }
    print(response_data, " response_data")
    return JsonResponse(response_data,safe=False)
