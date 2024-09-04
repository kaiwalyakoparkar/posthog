# Generated by Django 4.2.14 on 2024-09-04 09:57

from django.db import migrations, models


class Migration(migrations.Migration):
    replaces = [
        ("posthog", "0464_datawarehousesavedquery_last_ran_at_and_more"),
        ("posthog", "0465_alter_datawarehousesavedquery_last_run_status"),
    ]

    dependencies = [
        ("posthog", "0463_datawarehousemodelpath_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="datawarehousesavedquery",
            name="last_ran_at",
            field=models.DateTimeField(help_text="The timestamp at which this SavedQuery was last ran.", null=True),
        ),
        migrations.AddField(
            model_name="datawarehousesavedquery",
            name="last_run_status",
            field=models.CharField(
                choices=[
                    ("Cancelled", "Cancelled"),
                    ("Completed", "Completed"),
                    ("Failed", "Failed"),
                    ("Running", "Running"),
                    ("Starting", "Starting"),
                ],
                help_text="The status of when this SavedQuery last ran.",
                max_length=64,
                null=True,
            ),
        ),
    ]
