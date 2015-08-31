
player = {
  x: 5,
  y:4
};
flag = {
  x:6,
  y:3
};

function Distance (player, flag) {
  var x = Math.pow((player.x - flag.x), 2) + Math.pow((player.y - flag.y), 2);
  var ans = Math.sqrt(x);
  return ans;
}

function Coordinates (x,y,type) {
  this.x = x;
  this.y = y;
  this.type = type;

}

function findDistance (node1, node2) {
  return Math.sqrt(Math.pow((node2.x - node1.x), 2) + Math.pow((node2.y - node1.y), 2));
  return Math.hypot(node2.x-node1.x, node2.y - node1.y);
}
