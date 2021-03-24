from django.db import models

# Create your models here.
class players(models.Model):
    name = models.CharField(max_length=30, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)

class game(models.Model):
    team1 = models.CharField(max_length=40)
    team2 = models.CharField(max_length=40)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

class player_game_scoreboard(models.Model):
    player = models.CharField(max_length=30)
    game = models.IntegerField(default=None)
    team = models.CharField(max_length=100)
    points = models.IntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

