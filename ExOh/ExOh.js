// Have the function ExOh(str) take the str parameter being passed and return the string true if
// there is an equal number of x's and o's, otherwise return the string false. Only these two letters
// will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then
// the output should return false because there are 6 x's and 5 o's.


// First Solution
function ExOh(str) {
	var y = str.split("").sort()
var o = 0;
var x = 0;
for(i=0; i < y.length; i++) {
if (y[i] === "o") {
o++
} else if (y[i] === "x"){
x++
}
}
  if (x === o) {
    return true;
  } else {
    return false;
  }


}
// Second Solution
function ExOh(str) {

  return str.split(/x/i).length === str.split(/o/i).length;

}
