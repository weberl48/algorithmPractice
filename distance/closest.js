//given a distance formula write a program that takes in five player
//nodes and a flag node and finds out which of the players is closets to the flag.

function Player (x,y,type) {
  this.x = x;
  this.y = y;
  this.type = type;
}

var flag = {
  x:1,
  y:9
};

var players = [player1, player2, player3, player4, player5];

var player1 = new Player(3,1 ,"player1");
var player2 = new Player(4,2 ,"player2");
var player3 = new Player(6,7 ,"player3");
var player4 = new Player(3,8 ,"player4");
var player5 = new Player(1,1 ,"player5");




function Closest(players, flag) {
  this.players = players;
  this.flag = flag;
  distance = [];
  players.forEach(function (player) {
     distance.push(Math.hypot(player.x - flag.x, player.y - flag.y), player.type);
  });
  console.log(distance.sort());
  return distance.sort();
}


Closest(players, flag);
// var x = distance.sort();
// var ans = x[0];
// console.log(ans);
