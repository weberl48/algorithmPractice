function LongestWord(sen) {

  // code goes here
  var words = sen.split(" ").sort(function(a,b) {
      return b.replace(/[^a-zA-Z]/g,"").length - a.replace(/[^a-zA-Z]/g,"").length;
      // /[^a-zA-Z]/g is regex that replaces, globally, any character
      // not in the set a-z or A-Z with "", thus removing nonalpha chars
      // if < 0, a comes first
  });
  return words[0];

}
