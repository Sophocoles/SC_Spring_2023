from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.contrib.auth.forms import AuthenticationForm
from streetcard.forms.user.createUser import CustomUserCreationForm
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse

from rest_framework import viewsets
from django.db import models
from rest_framework.permissions import IsAuthenticated
from streetcard.models import CustomUser
from streetcard.serializers import CustomUserSerializer

from rest_framework.views import APIView
from rest_framework.response import Response

@login_required
def client_dashboard(request):
    # Your view logic here
    pass#delete

@login_required
def provider_dashboard(request):
    # Your view logic here
    pass#delete

def signup(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            if form.cleaned_data['user_type'] == 'client':
                return redirect('/clientDash')
            elif form.cleaned_data['user_type'] == 'provider':
                return redirect('http://localhost:3000/providerDash')
    else:
        form = CustomUserCreationForm()
    return render(request, 'registration/signup.html', {'form': form})

@csrf_protect
def login_view(request):
    # Redirect authenticated users to their respective dashboards
    if request.user.is_authenticated:
        if request.user.user_type == 'client':
            return redirect('http://localhost:3000/about')
        elif request.user.user_type == 'provider':
            return redirect('http://localhost:3000/providerDash')
        else:
            return redirect('http://localhost:3000/about')

    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            if user.user_type == 'client':
                return redirect('http://localhost:3000/about')
            elif user.user_type == 'provider':
                return redirect('http://localhost:3000/providerDash')
            else:
                return redirect('http://localhost:3000/about')
    else:
        form = AuthenticationForm()
    return render(request, 'registration/login.html', {'form': form})

#Get logged-in user's information

@login_required 
def get_user_info(request):
   
        user = request.user
        response_data = {
            'first_name': user.first_name,
            'last_name': user.last_name,
            'email': user.email,
        }
        print("hello",user.first_name)
        return JsonResponse(response_data)

class CustomUserViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = CustomUser.objects.order_by("first_name")
    serializer_class = CustomUserSerializer

    def get_queryset(self):
        qs = super().get_queryset()

        # Get only contact about current authenticated user
        qs = qs.filter(user=self.request.user)

        # Add search capabilities
        search = self.request.query_params.get("search", None)
        if search:
            qs = qs.filter(
                models.Q(first_name__icontains=search)
                | models.Q(last_name__icontains=search)
                | models.Q(email__icontains=search)
            )

        return qs
    

class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = CustomUserSerializer(request.user)
        return Response(serializer.data)
