# Generated by Django 3.1.7 on 2021-03-08 03:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('channels', '0004_auto_20210307_2025'),
    ]

    operations = [
        migrations.AlterField(
            model_name='channel',
            name='subscriberCount',
            field=models.PositiveIntegerField(blank=True, default=0),
        ),
    ]
