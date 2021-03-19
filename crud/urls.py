from django.urls import path

from . import views

urlpatterns = [
    path('', views.teamSelection, name='teamSelection'),
    path('addPlayer', views.addPlayer, name='addPlayer'),
    path('gamePage', views.gamePage, name='gamePage'),
    path('getPlayers', views.getPlayers, name='getPlayers'),
    path('dataRetrieval', views.dataRetrieval, name='dataRetrieval'),
]