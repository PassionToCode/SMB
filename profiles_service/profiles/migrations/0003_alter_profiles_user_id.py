# Generated by Django 3.2.7 on 2023-06-12 23:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0002_auto_20230612_2318'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profiles',
            name='user_id',
            field=models.IntegerField(unique=True),
        ),
    ]
