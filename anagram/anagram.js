// takes two arguments a word and an array of words
// returns and array pf words thate are anagrams of the given word
// does not return anagram subsets
//does not detect itself as an anagram
//is case insensitive

//try 1
function anaCheck(word, words) {
  var temp = [];
  var x = word.split("").sort()
  for (var i = 0; i < words.length; i++) {
    temp.push(words[i].split("").sort())
  }
  for (var j = 0; j < temp.length; j++) {
    if (temp[j].join("").toUpperCase() === x.join("").toUpperCase()) {
      return true + " " + temp[j]
    } else {
      return temp[j] + false;
    }
  }
}

//try 2
function anaCheck(word, words) {
  var sorted = word.split("").sort().join("")
  var srtWords = []
  words.forEach(function(word) {
    srtWords.push(word.split("").sort().join(""))
  })
  srtWords.forEach(function(word) {
        if (word === sorted) {
          console.log('match');
        }
      }

      //jquery
      var jq = document.createElement('script'); jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"; document.getElementsByTagName('head')[0].appendChild(jq);

      jQuery.noConflict();

      function anaCheck(word, words) {
        var srtWords = [];
        var sorted = word.split("").sort().join("")
        words.forEach(function(word) {
          srtWords.push(word.split("").sort().join(""))
        })
        return  $.inArray(sorted, srtWords) > -1;
      }
