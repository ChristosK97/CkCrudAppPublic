# Generated by Django 3.1.3 on 2021-03-23 03:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crud', '0003_auto_20210322_2306'),
    ]

    operations = [
        migrations.AlterField(
            model_name='game',
            name='team1',
            field=models.CharField(max_length=40),
        ),
        migrations.AlterField(
            model_name='game',
            name='team2',
            field=models.CharField(max_length=40),
        ),
    ]
