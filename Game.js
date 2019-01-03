
function myRock() {
  var x = Math.floor(Math.random()*4)
  if (x == 1) {
    document.getElementById('Results').innerHTML = 'Rock and Rock, Tie!!!!';
  }
  if (x == 2) {
    document.getElementById('Results').innerHTML = 'Rock and Paper, You Lose!!!';
  }
  if (x == 3) {
    document.getElementById('Results').innerHTML = 'Rock and Scissors, You Win!!!';
  }
}
function myPaper() {
var y = Math.floor(Math.random()*4)
if (y == 1) {
  document.getElementById('Results').innerHTML = 'Paper and Rock, You Win!!!!';
}
if (y == 2) {
  document.getElementById('Results').innerHTML = 'Paper and Paper, You Tie!!!';
}
if (y == 3) {
  document.getElementById('Results').innerHTML = 'Paper and Scissors, You Lose!!!';
}
}
function myScissors() {
var z = Math.floor(Math.random()*4)
if (z == 1) {
  document.getElementById('Results').innerHTML = 'Scissors and Rock, You Lose!!!!';
}
if (z == 2) {
  document.getElementById('Results').innerHTML = 'Scissors and Paper, You Win!!!';
}
if (z == 3) {
  document.getElementById('Results').innerHTML = 'Scissors and Scissors, You Tie!!!';
}
}
function coinFlip() {
  var yoda = Math.floor(Math.random()*3);
  var luke = document.getElementById('Coin');
  if (yoda == 1) {
    luke.src = "Pictures/Quarter_Heads.jpg";
  }
  if (yoda == 2) {
    luke.src = "Pictures/Quarter_Tails.jpg";
  }
}
