# Generated by Django 3.1.3 on 2021-03-09 23:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('crud', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='team_roster',
            old_name='player_id',
            new_name='player',
        ),
        migrations.RenameField(
            model_name='team_roster',
            old_name='team_id',
            new_name='team',
        ),
    ]
