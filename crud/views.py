from django.shortcuts import render
from crud.models import players
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt


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
    t1playerList = []
    t1tagList = []
    t2playerList = []
    if request.method == 'POST':
        gameDict = request.POST.items()
        for label, player in gameDict:
            if player == 'empty':
                continue
            elif label.startswith('t1'):
                t1playerList.append(player)
                t1tagList.append(label)
                print(label, player)
            elif label.startswith('t2'):
                t2playerList.append(player)
        while len(t2playerList) < 5:
            t2playerList.append('None')
        while len(t1playerList) < 5:
            t1playerList.append('None')
    print(t1playerList)
    print(t2playerList)






    return render(request,'gamePage.html', {'t1players': t1playerList, 'tags': t1tagList, 't2players': t2playerList})

@csrf_exempt
def dataRetrieval(request):
    if request.method == 'POST':
        items = list(request.POST.dict())
        print(items)

        return JsonResponse({'test':"yee"}, safe=False)


    else:
        return HttpResponse('no sir')
