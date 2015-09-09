// Have the function ThirdGreatest(strArr) take the array of strings stored in strArr and return the third largest word within in. So for example: if strArr is ["hello", "world", "before", "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" are both 5, but the output should be world because it appeared as the last 5 letter word in the array. If strArr was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 letters long, so return the last one. The array will have at least three strings and each string will only contain letters.
var ThirdGreatest = function (arr) {
    var arr2 = arr.sort(function(a,b){ return b.length - a.length});
    return arr2[2];
};

// The sort() method sorts the elements of an array in place and returns the array.

// compareFunction
// Optional. Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.

// if compareFunction is supplied, the array elements are sorted according to the return value of the compare function.
