
var t1p1increment = document.getElementById("t1p1increment");
var t1p1decrement = document.getElementById("t1p1decrement");
var t1p1pts = document.getElementById("t1p1Points"),
  t1p1count = 0;

var t1p2increment = document.getElementById("t1p2increment");
var t1p2decrement = document.getElementById("t1p2decrement");
var t1p2pts = document.getElementById("t1p2Points"),
  t1p2count = 0;

var t1p3increment = document.getElementById("t1p3increment");
var t1p3decrement = document.getElementById("t1p3decrement");
var t1p3pts = document.getElementById("t1p3Points"),
  t1p3count = 0;

var t1p4increment = document.getElementById("t1p4increment");
var t1p4decrement = document.getElementById("t1p4decrement");
var t1p4pts = document.getElementById("t1p4Points"),
  t1p4count = 0;

var t1p5increment = document.getElementById("t1p5increment");
var t1p5decrement = document.getElementById("t1p5decrement");
var t1p5pts = document.getElementById("t1p5Points"),
  t1p5count = 0;

var t2p1increment = document.getElementById("t2p1increment");
var t2p1decrement = document.getElementById("t2p1decrement");
var t2p1pts = document.getElementById("t2p1Points"),
  t2p1count = 0;

var t2p2increment = document.getElementById("t2p2increment");
var t2p2decrement = document.getElementById("t2p2decrement");
var t2p2pts = document.getElementById("t2p2Points"),
  t2p2count = 0;

var t2p3increment = document.getElementById("t2p3increment");
var t2p3decrement = document.getElementById("t2p3decrement");
var t2p3pts = document.getElementById("t2p3Points"),
  t2p3count = 0;

var t2p4increment = document.getElementById("t2p4increment");
var t2p4decrement = document.getElementById("t2p4decrement");
var t2p4pts = document.getElementById("t2p4Points"),
  t2p4count = 0;

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

t1techincrement.onclick = function(){
  t1techcount += 1;
  t1techtotal.innerHTML = "Tech pts: " + t1techcount

  t1totalcount = t1totalcount + 1;
  t1total.innerHTML = " " + t1totalcount
};

t1techdecrement.onclick = function(){
  t1techcount -= 1;
  t1techtotal.innerHTML = "Tech pts: " + t1techcount

  t1totalcount = t1totalcount -1;
  t1total.innerHTML = " " + t1totalcount
};
t2techincrement.onclick = function(){
  t2techcount += 1;
  t2techtotal.innerHTML = "Tech pts: " + t2techcount

  t2totalcount = t2totalcount + 1;
  t2total.innerHTML = " " + t2totalcount
};

t2techdecrement.onclick = function(){
  t2techcount -= 1;
  t2techtotal.innerHTML = "Tech pts: " + t2techcount

  t2totalcount = t2totalcount -1;
  t2total.innerHTML = " " + t2totalcount
};


t1p1increment.onclick = function(){


  t1p1count += 1;
  t1p1pts.innerHTML = "total pts: " + t1p1count;

  t1totalcount = t1totalcount + 1;
  t1total.innerHTML = " " + t1totalcount;

};
t1p1decrement.onclick = function(){
  t1p1count -= 1;
  t1p1pts.innerHTML = "total pts: " + t1p1count;

  t1totalcount = t1totalcount -1;
  t1total.innerHTML = " " + t1totalcount;

};

t1p2increment.onclick = function(){
  t1p2count += 1;
  t1p2pts.innerHTML = "total pts: " + t1p2count;

  t1totalcount = t1totalcount + 1;
  t1total.innerHTML = " " + t1totalcount;
};


t1p2decrement.onclick = function(){
  t1p2count -= 1;
  t1p2pts.innerHTML = "total pts: " + t1p2count;

  t1totalcount = t1totalcount - 1;
  t1total.innerHTML = " " + t1totalcount;
};

t1p3increment.onclick = function(){


  t1p3count += 1;
  t1p3pts.innerHTML = "total pts: " + t1p3count;

  t1totalcount = t1totalcount + 1;
  t1total.innerHTML = " " + t1totalcount;

};

t1p3decrement.onclick = function(){
  t1p3count -= 1;
  t1p3pts.innerHTML = "total pts: " + t1p3count;

  t1totalcount = t1totalcount - 1;
  t1total.innerHTML = " " + t1totalcount;
};

t1p4increment.onclick = function(){


  t1p4count += 1;
  t1p4pts.innerHTML = "total pts: " + t1p4count;

  t1totalcount = t1totalcount + 1;
  t1total.innerHTML = " " + t1totalcount;

};

t1p4decrement.onclick = function(){
  t1p4count -= 1;
  t1p4pts.innerHTML = "total pts: " + t1p4count;

  t1totalcount = t1totalcount - 1;
  t1total.innerHTML = " " + t1totalcount;
};

t1p5increment.onclick = function(){


  t1p5count += 1;
  t1p5pts.innerHTML = "total pts: " + t1p5count;

  t1totalcount = t1totalcount + 1;
  t1total.innerHTML = " " + t1totalcount;

};

t1p5decrement.onclick = function(){
  t1p5count -= 1;
  t1p5pts.innerHTML = "total pts: " + t1p5count;

  t1totalcount = t1totalcount - 1;
  t1total.innerHTML = " " + t1totalcount;
};

t2p1increment.onclick = function(){


  t2p1count += 1;
  t2p1pts.innerHTML = "total pts: " + t2p1count;

  t2totalcount = t2totalcount + 1;
  t2total.innerHTML = " " + t2totalcount;

};

t2p1decrement.onclick = function(){
  t2p1count -= 1;
  t2p1pts.innerHTML = "total pts: " + t2p1count;

  t2totalcount = t2totalcount - 1;
  t2total.innerHTML = " " + t2totalcount;
};

t2p2increment.onclick = function(){


  t2p2count += 1;
  t2p2pts.innerHTML = "total pts: " + t2p2count;

  t2totalcount = t2totalcount + 1;
  t2total.innerHTML = " " + t2totalcount;

};

t2p2decrement.onclick = function(){
  t2p2count -= 1;
  t2p2pts.innerHTML = "total pts: " + t2p2count;

  t2totalcount = t2totalcount - 1;
  t2total.innerHTML = " " + t2totalcount;
};

t2p3increment.onclick = function(){


  t2p3count += 1;
  t2p3pts.innerHTML = "total pts: " + t2p3count;

  t2totalcount = t2totalcount + 1;
  t2total.innerHTML = " " + t2totalcount;

};

t2p3decrement.onclick = function(){
  t2p3count -= 1;
  t2p3pts.innerHTML = "total pts: " + t2p3count;

  t2totalcount = t2totalcount - 1;
  t2total.innerHTML = " " + t2totalcount;
};

t2p4increment.onclick = function(){


  t2p4count += 1;
  t2p4pts.innerHTML = "total pts: " + t2p4count;

  t2totalcount = t2totalcount + 1;
  t2total.innerHTML = " " + t2totalcount;

};

t2p4decrement.onclick = function(){
  t2p4count -= 1;
  t2p4pts.innerHTML = "total pts: " + t2p4count;

  t2totalcount = t2totalcount - 1;
  t2total.innerHTML = " " + t2totalcount;
};

t2p5increment.onclick = function(){


  t2p5count += 1;
  t2p5pts.innerHTML = "total pts: " + t2p5count;

  t2totalcount = t2totalcount + 1;
  t2total.innerHTML = " " + t2totalcount;

};

t2p5decrement.onclick = function(){
  t2p5count -= 1;
  t2p5pts.innerHTML = "total pts: " + t2p5count;

  t2totalcount = t2totalcount - 1;
  t2total.innerHTML = " " + t2totalcount;
};

submitbutton.onclick = function(){
  fetch('../../dataRetrieval', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    data: JSON.stringify({
      name: 'USER 1',
      phone: 'yessir',
    })
}).then(res => {
   return res.json()
})
.then(data => console.log(data))
.catch(error => console.log(error))

};

