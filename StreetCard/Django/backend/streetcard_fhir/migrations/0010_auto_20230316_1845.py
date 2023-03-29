# Generated by Django 3.2.18 on 2023-03-17 01:45

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('streetcard_fhir', '0009_alter_fhirendpoint_scope'),
    ]

    operations = [
        migrations.RenameField(
            model_name='patient',
            old_name='name',
            new_name='fname',
        ),
        migrations.AddField(
            model_name='patient',
            name='lname',
            field=models.CharField(default=django.utils.timezone.now, max_length=100),
            preserve_default=False,
        ),
    ]