# Generated by Django 3.2.19 on 2023-09-11 18:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("posthog", "0347_add_bigquery_export_type"),
    ]

    operations = [
        migrations.AddField(
            model_name="organization",
            name="never_drop_data",
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]
