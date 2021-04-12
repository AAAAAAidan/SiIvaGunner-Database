# Generated by Django 3.1.7 on 2021-03-08 03:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('channels', '0003_auto_20210307_2020'),
    ]

    operations = [
        migrations.AlterField(
            model_name='channel',
            name='slug',
            field=models.SlugField(max_length=100),
        ),
        migrations.AlterField(
            model_name='channel',
            name='subscriberCount',
            field=models.PositiveIntegerField(blank=True),
        ),
    ]