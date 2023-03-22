p
run after updating models

python manage.py makemigrations streetcard_fhir
python manage.py migrate streetcard_fhir

python manage.py runserver
