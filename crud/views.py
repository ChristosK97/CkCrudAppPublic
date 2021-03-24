from django.shortcuts import render
from crud.models import players, game, player_game_scoreboard
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json

def teamSelection(request):

    return render(request, 'teamSelection.html')

def getPlayers(request):
    playerList = players.objects.values_list('name')
    data = list(playerList)
    print(data)

    return JsonResponse(data, safe=False)

def addPlayer(request):

    if request.method == 'POST':
        if players.objects.filter(name=request.POST['fname']).exists():
            return render(request, 'addPlayer.html')
        else:
            newPlayer = players(name=request.POST['fname'])
            newPlayer.save()

    return render(request,'addPlayer.html')

def gamePage(request):
    activeGame = game.objects.filter(is_active=True)
    activePlayers = player_game_scoreboard.objects.filter(is_active=True)
    gameId = activeGame.values('id')
    t1playerList = []
    t1tagList = []
    t2playerList = []
    teamNames = []
    if request.method == 'POST':
        gameDict = request.POST.items()
        for label, player in gameDict:
            print(label, player)
            if label.startswith('tname'):
                teamNames.append(player)
                continue

            if player == 'empty':
                continue
            elif label.startswith('t1p'):
                t1playerList.append(player)
                t1tagList.append(label)
                print(label, player)
            elif label.startswith('t2p'):
                t2playerList.append(player)
        while len(t2playerList) < 5:
            t2playerList.append('None')
        while len(t1playerList) < 5:
            t1playerList.append('None')

        if activeGame:
            activeGame.delete()
            activePlayers.delete()
            #delete rows in player scoreboard here
            enterGame = game(
                team1=teamNames[0],
                team2=teamNames[1],
            )
            enterGame.save()
            for player in t1playerList:
                if player == 'None':
                    continue
                else:
                    enterPlayer = player_game_scoreboard(
                        player=player,
                        team=teamNames[0],
                        game=gameId[0]['id'],

                    )
                    enterPlayer.save()

            for player in t2playerList:
                if player == 'None':
                    continue
                else:
                    enterPlayer = player_game_scoreboard(
                        player=player,
                        team=teamNames[1],
                        game=gameId[0]['id'],

                    )
                    enterPlayer.save()



            #create rows for next set of players AND tech
        else:
            enterGame = game(
            team1=teamNames[0],
            team2=teamNames[1],
            )
            enterGame.save()
            for player in t1playerList:
                if player == 'None':
                    continue
                else:
                    enterPlayer = player_game_scoreboard(
                        player=player,
                        team=teamNames[0],
                        game=gameId[0]['id'],

                    )
                    enterPlayer.save()

            for player in t2playerList:
                if player == 'None':
                    continue
                else:
                    enterPlayer = player_game_scoreboard(
                        player=player,
                        team=teamNames[1],
                        game=gameId[0]['id'],

                    )
                    enterPlayer.save()



    print(t1playerList)
    print(t2playerList)
    print(teamNames)






    return render(request,'gamePage.html', {'t1players': t1playerList, 'tags': t1tagList, 't2players': t2playerList, 'tnames': teamNames})

@csrf_exempt
def dataRetrieval(request):
    activeGame = game.objects.filter(is_active=True)
    gameId = activeGame.values('id')
    #create query for game table to recieve game id
    #use gameid to update rows of player games that are active and change from is active to false
    if request.method == 'POST':
        body = json.loads(request.body)
        print(body)
        for keys,values in body.items():
            if keys == 'team1tech':
                enterTech = player_game_scoreboard(

                    player='Tech',
                    points=values,
                    is_active=False,
                    game=gameId[0]['id'],
                )
                enterTech.save()
            elif keys == 'team2tech':
                enterTech = player_game_scoreboard(
                    player='Tech',
                    points=values,
                    is_active=False,
                    game=gameId[0]['id'],
                )
                enterTech.save()
            else:
                if keys == 'None':
                    continue
                player_game_scoreboard.objects.filter(player=keys, is_active=True).update(
                    points=values,
                    is_active=False,
                )

        activeGame = game.objects.filter(is_active=True).update(is_active=False)

        return JsonResponse({'test':"yee"}, safe=False)


    else:
        return HttpResponse('no sir')
