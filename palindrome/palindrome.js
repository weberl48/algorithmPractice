// Question: How will you verify a word as palindrome?
//
// Answer: if you reverse a word and it becomes same as the previous word, it is called palindrome.
function isPalindrome(str){
  var i, len = str.length;
  for(i =0; i<len/2; i++){
    if (str[i]!== str[len -1 -i])
       return false;
  }
  return true;
}

 isPalindrome('madam')

 isPalindrome('toyota')


//######$$$$$$######$$$$$$#######$$$$$$######$$$
function checkPalindrom(str) {
    return str == str.split('').reverse().join('');
}

// Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string.
function Palindrome(str) {
	if (str.split("").reverse().join("") === str) {

    	return true
    } else {
  // code goes here
  return false;
    }
}
