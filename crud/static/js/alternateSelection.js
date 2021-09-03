
var team2playerList = [];
var team1playerList = [];
// clickable <p> to submit
        $("input:radio").on("click", function(){


            let teamState = $(this).attr('id');
            console.log(typeof teamState);

            console.log(teamState);
            $("button").mousedown(function(event) {


                switch (event.which) {

                    case 1:

                        if (teamState == 'team1checkbox') {
                                $(this).appendTo("#team1");

//                                console.log(team1playerList);
//                                console.log(team2playerList);

                                break;

                            } else {
                                $(this).appendTo("#team2");
//                                team2playerList.push($(this).attr('id'));
//                                console.log("team2");
////                                console.log(team2playerList);


                                break;
                           }
                    case 2:

                        console.log(("who said u can middle click??"));
                        break;

                    case 3:
                        if (teamState == 'team1checkbox') {



                            $(this).appendTo("#poolp");
                            let pos = team1playerList.indexOf($(this).attr('id'));
                            team1playerList.splice(pos,1);
                            console.log(team1playerList);


                            break;

                            } else {

                                $(this).appendTo("#poolp");
                                let pos = team2playerList.indexOf($(this).attr('id'));
                                team2playerList.splice(pos,1);
                                console.log(team2playerList);
                                break;

                            }



                      };


            })
          });










$("p").click(function() {
    var players = document.getElementById('team1').children;
    var players2 = document.getElementById('team2').children;

    console.log(players.length - 1);
    if ((players.length - 1) > team1playerList.length) {

        for (i = 1; i <= players.length - 1; i++) {


            team1playerList.push(players[i].textContent);

        }
    }
    if ((players2.length - 1) > team2playerList.length) {

        for (i = 1; i <= players2.length - 1; i++) {


            team2playerList.push(players2[i].textContent);

        }
    }
    console.log(team1playerList);
    console.log(team2playerList);
})




//$(document).ready(function(){
//        $("input:radio").on("click", function(){
//            if ($(this).attr('id') == 'team1checkbox') {
//                console.log('test');
//                $("button").click(function() {
//                    $(this).appendTo("#team1");
//
//
////                $("button").appendTo("#team2");
//                    console.log($(this).attr('id'));
//                })
//
//        } else {
//          if ($(this).attr('id') == 'team2checkbox') {
//            console.log("test2");
//            $("button").click(function() {
//
//              $("#team2").append("<br>");
//              $(this).appendTo("#team2");
//              console.log($(this).attr('id'));
//            })
//          }
//        };
//    });
//})







