from django.db import models

# Create your models here.
class players(models.Model):
    name = models.CharField(max_length=25, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(null=True)

class team(models.Model):
    team_name = models.CharField(max_length=70)
    created_at = models.DateTimeField(auto_now_add=True)

class team_roster(models.Model):
    team = models.ForeignKey(to=team, to_field='id', on_delete=models.CASCADE)
    player = models.ForeignKey(to=players, to_field='id', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

class game(models.Model):
    team1 = models.IntegerField()
    team2 = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

class game_team_score(models.Model):
    game = models.ForeignKey(to=game, to_field='id', on_delete=models.CASCADE)
    team = models.ForeignKey(to=team, to_field='id', on_delete=models.CASCADE)
    score = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

class player_game_scoreboard(models.Model):
    player = models.ForeignKey(to=players, to_field='name', on_delete=models.CASCADE)
    game = models.ForeignKey(to=game, to_field='id', on_delete=models.CASCADE)
    team = models.ForeignKey(to=team, to_field='id', on_delete=models.CASCADE)
    points = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)

