
var t1name = document.getElementById("t1name").value;
var t1p1name = document.getElementById("t1p1").textContent;
var t1p1increment = document.getElementById("t1p1increment");
var t1p1decrement = document.getElementById("t1p1decrement");
var t1p1pts = document.getElementById("t1p1Points"),
  t1p1count = 0;

var t1p2name = document.getElementById("t1p2").textContent;
var t1p2increment = document.getElementById("t1p2increment");
var t1p2decrement = document.getElementById("t1p2decrement");
var t1p2pts = document.getElementById("t1p2Points"),
  t1p2count = 0;

var t1p3name = document.getElementById("t1p3").textContent;
var t1p3increment = document.getElementById("t1p3increment");
var t1p3decrement = document.getElementById("t1p3decrement");
var t1p3pts = document.getElementById("t1p3Points"),
  t1p3count = 0;

var t1p4name = document.getElementById("t1p4").textContent;
var t1p4increment = document.getElementById("t1p4increment");
var t1p4decrement = document.getElementById("t1p4decrement");
var t1p4pts = document.getElementById("t1p4Points"),
  t1p4count = 0;

var t1p5name = document.getElementById("t1p5").textContent;
var t1p5increment = document.getElementById("t1p5increment");
var t1p5decrement = document.getElementById("t1p5decrement");
var t1p5pts = document.getElementById("t1p5Points"),
  t1p5count = 0;

var t2name = document.getElementById("t2name").value;
var t2p1name = document.getElementById("t2p1").textContent;
var t2p1increment = document.getElementById("t2p1increment");
var t2p1decrement = document.getElementById("t2p1decrement");
var t2p1pts = document.getElementById("t2p1Points"),
  t2p1count = 0;

var t2p2name = document.getElementById("t2p2").textContent;
var t2p2increment = document.getElementById("t2p2increment");
var t2p2decrement = document.getElementById("t2p2decrement");
var t2p2pts = document.getElementById("t2p2Points"),
  t2p2count = 0;

var t2p3name = document.getElementById("t2p3").textContent;
var t2p3increment = document.getElementById("t2p3increment");
var t2p3decrement = document.getElementById("t2p3decrement");
var t2p3pts = document.getElementById("t2p3Points"),
  t2p3count = 0;

var t2p4name = document.getElementById("t2p4").textContent;
var t2p4increment = document.getElementById("t2p4increment");
var t2p4decrement = document.getElementById("t2p4decrement");
var t2p4pts = document.getElementById("t2p4Points"),
  t2p4count = 0;

var t2p5name = document.getElementById("t2p5").textContent;
var t2p5increment = document.getElementById("t2p5increment");
var t2p5decrement = document.getElementById("t2p5decrement");
var t2p5pts = document.getElementById("t2p5Points"),
  t2p5count = 0;

var t1techincrement = document.getElementById("t1techincrement");
var t1techdecrement = document.getElementById("t1techdecrement");
var t1tech = document.getElementById("t1techtotal"),
  t1techcount = 0;

var t2techincrement = document.getElementById("t2techincrement");
var t2techdecrement = document.getElementById("t2techdecrement");
var t2tech = document.getElementById("t2techtotal"),
  t2techcount = 0;

var t1total = document.getElementById("t1total"),
  t1totalcount = 0;

var t2total = document.getElementById("t2total"),
  t2totalcount = 0;

var submitbutton = document.getElementById("submitpage");
var submitagain = document.getElementById("submitagain");

function ajaxCall(player, points, team) {
  $.ajax({
     type: 'POST',
     url: '/post/ajax/updatePoints',  // change and create url for backend
     data: JSON.stringify({ player: player, points: points, team: team }),
     dataType: 'json'

});}

t1techincrement.onclick = function(){
  t1techcount += 1;
  t1techtotal.innerHTML = "Tech pts: " + t1techcount;



  t1totalcount = t1totalcount + 1;
  t1total.innerHTML = " " + t1totalcount;
  ajaxCall("Tech", t1techcount, t1name);
};

t1techdecrement.onclick = function(){
  t1techcount -= 1;
  t1techtotal.innerHTML = "Tech pts: " + t1techcount;

  t1totalcount = t1totalcount -1;
  t1total.innerHTML = " " + t1totalcount;
  ajaxCall("Tech", t1techcount, t1name);
};
t2techincrement.onclick = function(){
  t2techcount += 1;
  t2techtotal.innerHTML = "Tech pts: " + t2techcount;

  t2totalcount = t2totalcount + 1;
  t2total.innerHTML = " " + t2totalcount;
  ajaxCall("Tech", t2techcount, t2name);
};

t2techdecrement.onclick = function(){
  t2techcount -= 1;
  t2techtotal.innerHTML = "Tech pts: " + t2techcount;

  t2totalcount = t2totalcount -1;
  t2total.innerHTML = " " + t2totalcount;
  ajaxCall("Tech", t2techcount, t2name);
};


t1p1increment.onclick = function(){


  t1p1count += 1;
  t1p1pts.innerHTML = "total pts: " + t1p1count;

  t1totalcount = t1totalcount + 1;
  t1total.innerHTML = " " + t1totalcount;
  ajaxCall(t1p1name, t1p1count, t1name);
  console.log(t1name);
//  console.log(t1name);

};
t1p1decrement.onclick = function(){
  t1p1count -= 1;
  t1p1pts.innerHTML = "total pts: " + t1p1count;

  t1totalcount = t1totalcount -1;
  t1total.innerHTML = " " + t1totalcount;
  ajaxCall(t1p1name, t1p1count, t1name);

};

t1p2increment.onclick = function(){
  t1p2count += 1;
  t1p2pts.innerHTML = "total pts: " + t1p2count;

  t1totalcount = t1totalcount + 1;
  t1total.innerHTML = " " + t1totalcount;
  ajaxCall(t1p2name, t1p2count, t1name);
};


t1p2decrement.onclick = function(){
  t1p2count -= 1;
  t1p2pts.innerHTML = "total pts: " + t1p2count;

  t1totalcount = t1totalcount - 1;
  t1total.innerHTML = " " + t1totalcount;
  ajaxCall(t1p2name, t1p2count, t1name);
};

t1p3increment.onclick = function(){


  t1p3count += 1;
  t1p3pts.innerHTML = "total pts: " + t1p3count;

  t1totalcount = t1totalcount + 1;
  t1total.innerHTML = " " + t1totalcount;
  ajaxCall(t1p3name, t1p3count, t1name);

};

t1p3decrement.onclick = function(){
  t1p3count -= 1;
  t1p3pts.innerHTML = "total pts: " + t1p3count;

  t1totalcount = t1totalcount - 1;
  t1total.innerHTML = " " + t1totalcount;
  ajaxCall(t1p3name, t1p3count, t1name);
};

t1p4increment.onclick = function(){


  t1p4count += 1;
  t1p4pts.innerHTML = "total pts: " + t1p4count;

  t1totalcount = t1totalcount + 1;
  t1total.innerHTML = " " + t1totalcount;
  ajaxCall(t1p4name, t1p4count, t1name);

};

t1p4decrement.onclick = function(){
  t1p4count -= 1;
  t1p4pts.innerHTML = "total pts: " + t1p4count;

  t1totalcount = t1totalcount - 1;
  t1total.innerHTML = " " + t1totalcount;
  ajaxCall(t1p4name, t1p4count, t1name);
};

t1p5increment.onclick = function(){


  t1p5count += 1;
  t1p5pts.innerHTML = "total pts: " + t1p5count;

  t1totalcount = t1totalcount + 1;
  t1total.innerHTML = " " + t1totalcount;
  ajaxCall(t1p5name, t1p5count, t1name);

};

t1p5decrement.onclick = function(){
  t1p5count -= 1;
  t1p5pts.innerHTML = "total pts: " + t1p5count;

  t1totalcount = t1totalcount - 1;
  t1total.innerHTML = " " + t1totalcount;
  ajaxCall(t1p5name, t1p5count, t1name);
};

t2p1increment.onclick = function(){


  t2p1count += 1;
  t2p1pts.innerHTML = "total pts: " + t2p1count;

  t2totalcount = t2totalcount + 1;
  t2total.innerHTML = " " + t2totalcount;
  ajaxCall(t2p1name, t2p1count, t2name);

};

t2p1decrement.onclick = function(){
  t2p1count -= 1;
  t2p1pts.innerHTML = "total pts: " + t2p1count;

  t2totalcount = t2totalcount - 1;
  t2total.innerHTML = " " + t2totalcount;
  ajaxCall(t2p1name, t2p1count, t2name);
};

t2p2increment.onclick = function(){


  t2p2count += 1;
  t2p2pts.innerHTML = "total pts: " + t2p2count;

  t2totalcount = t2totalcount + 1;
  t2total.innerHTML = " " + t2totalcount;
  ajaxCall(t2p2name, t2p2count, t2name);
};

t2p2decrement.onclick = function(){
  t2p2count -= 1;
  t2p2pts.innerHTML = "total pts: " + t2p2count;

  t2totalcount = t2totalcount - 1;
  t2total.innerHTML = " " + t2totalcount;
  ajaxCall(t2p2name, t2p2count, t2name);
};

t2p3increment.onclick = function(){


  t2p3count += 1;
  t2p3pts.innerHTML = "total pts: " + t2p3count;

  t2totalcount = t2totalcount + 1;
  t2total.innerHTML = " " + t2totalcount;
  ajaxCall(t2p3name, t2p3count, t2name);

};

t2p3decrement.onclick = function(){
  t2p3count -= 1;
  t2p3pts.innerHTML = "total pts: " + t2p3count;

  t2totalcount = t2totalcount - 1;
  t2total.innerHTML = " " + t2totalcount;
  ajaxCall(t2p3name, t2p3count, t2name);
};

t2p4increment.onclick = function(){


  t2p4count += 1;
  t2p4pts.innerHTML = "total pts: " + t2p4count;

  t2totalcount = t2totalcount + 1;
  t2total.innerHTML = " " + t2totalcount;
  ajaxCall(t2p4name, t2p4count, t2name);

};

t2p4decrement.onclick = function(){
  t2p4count -= 1;
  t2p4pts.innerHTML = "total pts: " + t2p4count;

  t2totalcount = t2totalcount - 1;
  t2total.innerHTML = " " + t2totalcount;
  ajaxCall(t2p4name, t2p4count, t2name);
};

t2p5increment.onclick = function(){


  t2p5count += 1;
  t2p5pts.innerHTML = "total pts: " + t2p5count;

  t2totalcount = t2totalcount + 1;
  t2total.innerHTML = " " + t2totalcount;
  ajaxCall(t2p5name, t2p5count, t2name);

};

t2p5decrement.onclick = function(){
  t2p5count -= 1;
  t2p5pts.innerHTML = "total pts: " + t2p5count;

  t2totalcount = t2totalcount - 1;
  t2total.innerHTML = " " + t2totalcount;
  ajaxCall(t2p5name, t2p5count, t2name);
};
var playerNames = [t1p1name,t1p2name,t1p3name,t1p4name,t1p5name,t2p1name,t2p2name,t2p3name,t2p4name,t2p5name]
var playerVariables = ["t1p1name","t1p2name","t1p3name","t1p4name","t1p5name","t2p1name","t2p2name","t2p3name","t2p4name","t2p5name"]
for (i=0; i < playerVariables.length; i++){
  if (playerNames[i] == 'None'){
    var increment = "increment"
    var decrement = "decrement"
    var Points = "Points"
    var teamPlayerSlice = playerVariables[i].slice(0,4);
    var elementName = teamPlayerSlice
    var elementIncrement = teamPlayerSlice.concat(increment)
    var elementDecrement = teamPlayerSlice.concat(decrement)
    var elementPoints = teamPlayerSlice.concat(Points)

    var hideName = document.getElementById(teamPlayerSlice);
    hideName.style.display = "None"
    var hideIncrement = document.getElementById(elementIncrement);
    hideIncrement.style.display = "None"
    var hideDecrement = document.getElementById(elementDecrement);
    hideDecrement.style.display = "None"
    var hidePoints = document.getElementById(elementPoints);
    hidePoints.style.display = "None"

    }else {
    continue
  }

}

submitbutton.onclick = function(){
  let gameNumber = 0;
  var confirmation = confirm("Are you sure the game is over?");
  if (confirmation == true) {
    fetch('/dataRetrieval', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Accept': 'application/json',
    },
    body: JSON.stringify({

      team1tech: t1techcount,
      team2tech: t2techcount,
      gameNumber: gameNumber,
      [t1p1name]: t1p1count,
      [t1p2name]: t1p2count,
      [t1p3name]: t1p3count,
      [t1p4name]: t1p4count,
      [t1p5name]: t1p5count,
      [t2p1name]: t2p1count,
      [t2p2name]: t2p2count,
      [t2p3name]: t2p3count,
      [t2p4name]: t2p4count,
      [t2p5name]: t2p5count,
    })
}).then(res => {
   return res.json()
})
.then(data => console.log(data))
.catch(error => console.log(error))
setTimeout(function(){ location.replace('/'); }, 3000);
}
};


submitagain.onclick = function(){
  let gameNumber = 1;
  var confirmation = confirm("Run that back?");
  if (confirmation == true) {
    fetch('/dataRetrieval', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Accept': 'application/json',
    },
    body: JSON.stringify({

      team1tech: t1techcount,
      team2tech: t2techcount,
      gameNumber: gameNumber,
      [t1p1name]: t1p1count,
      [t1p2name]: t1p2count,
      [t1p3name]: t1p3count,
      [t1p4name]: t1p4count,
      [t1p5name]: t1p5count,
      [t2p1name]: t2p1count,
      [t2p2name]: t2p2count,
      [t2p3name]: t2p3count,
      [t2p4name]: t2p4count,
      [t2p5name]: t2p5count,
    })
}).then(res => {
   return res.json()
})
.then(data => console.log(data))
.catch(error => console.log(error))
setTimeout(function(){ t1techcount = 0, t2techcount = 0, t1p1count = 0, t1p2count = 0, t1p3count = 0, t1p4count = 0, t1p5count = 0,t2p1count = 0, t2p2count = 0, t2p3count = 0, t2p4count = 0, t2p5count =0, t1totalcount = 0, t2totalcount = 0,
 t1total.innerHTML = " "
 t2total.innerHTML = " "
 t1techtotal.innerHTML = "Tech pts: ", t2techtotal.innerHTML = "Tech pts: ", t1p1pts.innerHTML = "total pts: ", t1p2pts.innerHTML = "total pts: ", t1p3pts.innerHTML = "total pts: ", t1p4pts.innerHTML = "total pts: ", t1p5pts.innerHTML = "total pts: ",
 t2p1pts.innerHTML = "total pts: ", t2p2pts.innerHTML = "total pts: ", t2p3pts.innerHTML = "total pts: ", t2p4pts.innerHTML = "total pts: ", t2p5pts.innerHTML = "total pts: "; }, 3000);
}
};

function getScores() {
  $.ajax({
     type: 'GET',
     url: 'get/ajax/updatePoints',
     dataType: 'json',
     success: function (response) {
//       var tempPlayer = JSON.parse(response["pointsArray"][1]);
//       console.log(tempPlayer)
       t1p1count = JSON.parse(response['t1pointsArray'][0]);
       t1p2count = JSON.parse(response['t1pointsArray'][1]);
       t1p3count = JSON.parse(response['t1pointsArray'][2]);
       t1p4count = JSON.parse(response['t1pointsArray'][3]);
       t1p5count = JSON.parse(response['t1pointsArray'][4]);


       t2p1count = JSON.parse(response['t2pointsArray'][0]);
       t2p2count = JSON.parse(response['t2pointsArray'][1]);
       t2p3count = JSON.parse(response['t2pointsArray'][2]);
       t2p4count = JSON.parse(response['t2pointsArray'][3]);
       t2p5count = JSON.parse(response['t2pointsArray'][4]);


       t1p1pts.innerHTML = "total pts: " + t1p1count;
       t1p2pts.innerHTML = "total pts: " + t1p2count;
       t1p3pts.innerHTML = "total pts: " + t1p3count;
       t1p4pts.innerHTML = "total pts: " + t1p4count;
       t1p5pts.innerHTML = "total pts: " + t1p5count;


       t2p1pts.innerHTML = "total pts: " + t2p1count;
       t2p2pts.innerHTML = "total pts: " + t2p2count;
       t2p3pts.innerHTML = "total pts: " + t2p3count;
       t2p4pts.innerHTML = "total pts: " + t2p4count;
       t2p5pts.innerHTML = "total pts: " + t2p5count;


        t1techcount = JSON.parse(response['techPoints'][0]);
        t1techtotal.innerHTML = "Tech pts: " + t1techcount

        t2techcount = JSON.parse(response['techPoints'][1]);
        t2techtotal.innerHTML = "Tech pts: " + t2techcount



       t1totalcount = t1p1count + t1p2count + t1p3count + t1p4count + t1p5count + t1techcount;  //repeat for each ... t1p1, t1p2 ,t2p1 ,t2p2 etc
       t1total.innerHTML = " " + t1totalcount;

       t2totalcount = t2p1count + t2p2count + t2p3count + t2p4count + t2p5count + t2techcount;
       t2total.innerHTML = " " + t2totalcount;
     }
     })
}
window.onload = getScores;

