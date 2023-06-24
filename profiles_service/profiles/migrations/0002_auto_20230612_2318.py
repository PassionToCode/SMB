# Generated by Django 3.2.7 on 2023-06-12 23:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profiles',
            name='username',
        ),
        migrations.AlterField(
            model_name='profiles',
            name='profile_photo',
            field=models.ImageField(blank=True, default='/default.jpg', null=True, upload_to='', verbose_name='Photo'),
        ),
    ]
