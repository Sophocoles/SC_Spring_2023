Basic setup copied from this tutorial
    https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react

User setup according to this tutorial
    https://learndjango.com/tutorials/django-custom-user-model

Auth setup from this tutorial
    https://inmagik.com/en/blog/django-rest-and-react

This Django project uses pipenv.
    Related commands

        pip install pipenv
        pipenv shell

python manage.py makemigrations streetcard
python manage.py migrate streetcard

python manage.py runserver

make .env file in root directory and put
    PYTHONPATH=/path/to/templates/streetcard
