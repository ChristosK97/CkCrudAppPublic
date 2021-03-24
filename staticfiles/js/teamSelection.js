async function setupPlayers(){
    var retrieveJson = (await fetch('getPlayers'))
    var players = await retrieveJson.json()
    createPlayersAsOptions(players)

}
setupPlayers()

function createPlayersAsOptions(listOfPlayers){
    var listofIds = ["t1player1", "t1player2", "t1player3", "t1player4", "t1player5", "t2player1", "t2player2", "t2player3", "t2player4", "t2player5"];
    var incrementer = 0;
    for (const id in listofIds){
        var x = document.getElementById(listofIds[id])
        for (let i=0; i < listOfPlayers.length; i++){
            var option = document.createElement("option")
            option.text = listOfPlayers[i]
            x.add(option)
        }


}







    }















//var players = await fetch('getPlayers')
//function addPlayerOptions(){
//var playeroptions = document.createElement("t1player1");
//playeroption
