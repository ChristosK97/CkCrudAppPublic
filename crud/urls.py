from django.urls import path
from django.contrib.staticfiles.storage import staticfiles_storage
from django.views.generic.base import RedirectView
from . import views

urlpatterns = [
    path('', views.teamSelection, name='teamSelection'),
    path('addPlayer', views.addPlayer, name='addPlayer'),
    path('gamePage', views.gamePage, name='gamePage'),
    path('getPlayers', views.getPlayers, name='getPlayers'),
    path('dataRetrieval', views.dataRetrieval, name='dataRetrieval'),
    path('favicon.ico', RedirectView.as_view(url=staticfiles_storage.url('img/favicon.ico')))
]