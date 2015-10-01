// Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are. 

function SwapCase(str) {
var swap = "";
for(var i = 0; i<str.length; i++){
if (str[i] == str[i].toUpperCase()){
swap = swap + str[i].toLowerCase();
}else if (str[i] == str[i].toLowerCase()){
swap = swap + str[i].toUpperCase();
}
}

  return swap;

}
