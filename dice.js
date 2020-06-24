
  var rno = Math.random();
  var dice = Math.floor((rno * 6) + 1);


var dicev = "images/dice" + dice + ".png";
document.querySelectorAll("img")[0].setAttribute("src",dicev);

var rno1 = Math.random();
var dice1 = Math.floor((rno1 * 6) + 1);


var dicev1 = "images/dice" + dice1 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",dicev1);


if(dice > dice1){
  document.querySelector("h1").innerHTML = "🏁Player 1 Won"
}
else if (dice < dice1) {
  document.querySelector("h1").innerHTML = "Player 2 Won🏁"
}
else {
  document.querySelector("h1").innerHTML = "Its a Tie"
}
