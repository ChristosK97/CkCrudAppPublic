from django.shortcuts import render, redirect
from crud.models import players, game, player_game_scoreboard
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth.decorators import login_required

@login_required()
def teamSelection(request):
    playerCheck = game.objects.filter(is_active=True).exists()
    gameStatus = ''
    if playerCheck:
        gameStatus = "True"
        print("yes theres a game")
    else:
        gameStatus = "False"
        print("no sir")
    return render(request, 'teamSelection.html', {'gameStatus': gameStatus})
@login_required()
def alternateSelection(request):
    playerList = players.objects.values_list('name', flat=True)
    data = list(playerList)
    return render(request, 'alternateSelection.html', {'completeList': data})


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
    t1Points = []
    t2Points = []
    t1playerPoints = []
    t2playerPoints = []
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
                # t1tagList.append(label)
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

            newGameId = activeGame.values('id')

            enterTech = player_game_scoreboard(
                player='Tech',
                game=newGameId[0]['id'],
                team=teamNames[0],
            )
            enterTech.save()
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

            enterSecondTech = player_game_scoreboard(
                player='Tech',
                game=newGameId[0]['id'],
                team=teamNames[1],

            )
            enterSecondTech.save()

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
            newGameId = activeGame.values('id')
            enterTech = player_game_scoreboard(
                player='Tech',
                game=newGameId[0]['id'],
                team=teamNames[0],
            )
            enterTech.save()
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
            enterSecondTech =player_game_scoreboard(
                player='Tech',
                game=newGameId[0]['id'],
                team=teamNames[1],

            )
            enterSecondTech.save()

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

        # print(t1playerList)
        #
        # print(t2playerList)
        # print(teamNames)
        return render(request,'gamePage.html', {'t1players': t1playerList, 't2players': t2playerList, 'tnames': teamNames})

    else:  # if Get request
        if activeGame:
            activePlayersNoTech = activePlayers.exclude(player='Tech').order_by('id')

            playerLength = len(activePlayersNoTech)  #-2 maybe for the two techs if name is tech, pass exclude TECH
            t1Name = ''
            t2Name = ''
            for playerData in activePlayersNoTech:
                if (playerLength / 2) == len(t1playerList):
                    t2playerList.append(playerData.player)
                    t2Name = playerData.team
                    t2playerPoints.append(playerData.points)
                else:
                    t1playerList.append(playerData.player)
                    t1Name = playerData.team
                    t1playerPoints.append(playerData.points)
                # print(playerData)
                # print(playerData.player)
                # print(playerData.team)
            while len(t1playerList) < 5:
                t1playerList.append('None')
                t1playerPoints.append(0)
            while len(t2playerList) < 5:
                t2playerList.append('None')
                t2playerPoints.append(0)
            teamNames.append(t1Name)
            teamNames.append(t2Name)
            print(teamNames)
            print(t1playerList)
            print(t2playerList)
            print(t1playerPoints)
            print(t2playerPoints)
            return render(request, 'gamePage.html',
                          {'t1players': t1playerList, 't2players': t2playerList, 'tnames': teamNames,
                           't1playerPoints': t1playerPoints, 't2playerPoints': t2playerPoints})
        else:
            return redirect('/')




@login_required()
@csrf_exempt
def dataRetrieval(request):
    activeGame = game.objects.filter(is_active=True)
    gameId = activeGame.values('id')

    clonePlayers = player_game_scoreboard.objects.filter(is_active=True)
    #create query for game table to recieve game id
    #use gameid to update rows of player games that are active and change from is active to false
    if request.method == 'POST':
        body = json.loads(request.body)
        enterTech = player_game_scoreboard.objects.filter(player='Tech', is_active=True)
        enterTechFirst = enterTech.first()
        enterTechSecond = enterTech.last()






        for keys,values in body.items():
            if keys == 'team1tech':

                t1Name = enterTechFirst.team
                enterTechFirst.points = values
                enterTechFirst.is_active = False
                enterTechFirst.save()
                # enterTech = player_game_scoreboard(
                #
                #     player='Tech',
                #     points=values,
                #     is_active=False,
                #     game=gameId[0]['id'],
                # )
                # enterTech.save()
            elif keys == 'team2tech':
                t2Name = enterTechSecond.team
                enterTechSecond.points = values
                enterTechSecond.is_active = False
                enterTechSecond.save()

                # enterTech = player_game_scoreboard(
                #     player='Tech',
                #     points=values,
                #     is_active=False,
                #     game=gameId[0]['id'],
                # )
                # enterTech.save()
            elif keys == 'gameNumber':
                continue
            else:
                if keys == 'None':
                    continue
                elif body['gameNumber'] == 1:


                    newPlayer = player_game_scoreboard.objects.get(is_active=True, player=keys)
                    player_game_scoreboard.objects.filter(player=keys, is_active=True).update(
                        points=values,
                        is_active=False,
                    )
                    newPlayer.pk = None
                    newPlayer.is_active = True
                    newPlayer.points = 0
                    newPlayer.game = int((gameId[0]['id']) + 1)
                    newPlayer.save()



                else:
                    player_game_scoreboard.objects.filter(player=keys, is_active=True).update(
                        points=values,
                        is_active=False,
                    )


        # Updated current active game
        newGame = game.objects.get(is_active=True)




        # game.objects.filter(is_active=True).update(is_active=False)


        if body['gameNumber'] == 1:
            newGame.is_active = False
            newGame.save()  # saving game to be done
            # Cloning game
            newGame.pk = None
            newGame.is_active = True
            newGame.save()

            newTech = player_game_scoreboard(
                points=0,
                game=int((gameId[0]['id'])),
                team=t1Name,
                player='Tech',
                is_active=True
            )
            newTech.save()

            newTech1 = player_game_scoreboard(
                points=0,
                game=int((gameId[0]['id'])),
                team=t2Name,
                player='Tech',
                is_active=True
            )
            newTech1.save()

        else:
            newGame.is_active = False
            newGame.save()  # saving game to be done

        return JsonResponse({'test': "yee"}, safe=False)

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

        for i in pointsPerPlayer:

            sum = sum + i

        if sum <= 0:
            continue
        else:


            subList.append(player)
            subList.append(sum)
            subList.append(round(sum/len(pointsPerPlayer),2))
            subList.append(len(pointsPerPlayer))



            completeList.append(subList)






    return render(request, 'stats.html', {'completeList': completeList})

@csrf_exempt
def postUpdatePoints(request):
    if request.is_ajax:
        requestedData = request.body.decode("utf-8")
        new = json.loads(requestedData)
        # print(type(new))
        print(new['player'])
        print(new['points'])
        print(new['team'])
        playerName = new['player']
        playerPoints = new['points']
        playerTeam = new['team']
        player_game_scoreboard.objects.filter(player=playerName, team= playerTeam, is_active=True).update(
            points=playerPoints,
        )

    return HttpResponse('no sir')

@csrf_exempt
def ajaxUpdatePoints(request):
    if request.is_ajax:
        t1Points = []
        t2Points = []
        techScores = []
        activePlayers = player_game_scoreboard.objects.filter(is_active=True).order_by('id')
        activePlayersNoTech = activePlayers.exclude(player='Tech')
        activePlayersTech = activePlayers.filter(player='Tech')
        playerLength = len(activePlayersNoTech)
        for player in activePlayersNoTech:
            print(player.player)
            print(player.points)
            if (playerLength / 2) == len(t1Points):
                t2Points.append(player.points)

            else:
                t1Points.append(player.points)

        while len(t1Points) < 5:


            t1Points.append(0)
        while len(t2Points) < 5:


            t2Points.append(0)

        for techPlayer in activePlayersTech:
            techScores.append(techPlayer.points)

        return JsonResponse({"t1pointsArray": t1Points, "t2pointsArray": t2Points, "techPoints": techScores})  # Pass scores of tech while passing players scores

#view here for ajax call--- this page will render game page. very similar logic to gaempage. send same data, etc. Team name is experimental Team...