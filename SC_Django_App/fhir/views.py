from django.shortcuts import render

def fhir_view(request):
    return render(request, 'fhir/fhir.html')
