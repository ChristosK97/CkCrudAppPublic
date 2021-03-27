from django.shortcuts import render
from crud.models import players, game, player_game_scoreboard
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth.decorators import login_required

@login_required()
def teamSelection(request):

    return render(request, 'teamSelection.html')

def getPlayers(request):
    playerList = players.objects.values_list('name')
    data = list(playerList)


    return JsonResponse(data, safe=False)

@login_required()
def addPlayer(request):

    if request.method == 'POST':
        if players.objects.filter(name=request.POST['fname']).exists():
            return render(request, 'addPlayer.html')
        else:
            newPlayer = players(name=request.POST['fname'])
            newPlayer.save()

    return render(request,'addPlayer.html')

@login_required()
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
            if label.startswith('tname'):
                teamNames.append(player)
                continue

            if player == 'empty':
                continue
            elif label.startswith('t1p'):
                t1playerList.append(player)
                t1tagList.append(label)
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










    return render(request,'gamePage.html', {'t1players': t1playerList, 'tags': t1tagList, 't2players': t2playerList, 'tnames': teamNames})

@login_required()
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

def stats(request):
    completeList = []


    playerList = players.objects.all().values_list('name', flat=True)
    gameList = player_game_scoreboard.objects.filter(is_active=False)
    # perPlayer = gameList.filter(player='Christos')

    for player in playerList:
        subList = []
        sum = 0
        pointsPerPlayer = gameList.filter(player=player).values_list('points', flat=True)
        print(pointsPerPlayer)
        for i in pointsPerPlayer:

            sum = sum + i
        print('this the sum', sum)
        print('herewego', len(pointsPerPlayer))
        if sum <= 0:
            continue
        else:


            subList.append(player)
            subList.append(sum)
            subList.append(round(sum/len(pointsPerPlayer),2))
            subList.append(len(pointsPerPlayer))



            completeList.append(subList)
    print(completeList)





    return render(request, 'stats.html', {'completeList': completeList})