// 1. A letter repeated once or twice repeats its value that many times (XXX = 30, CC = 200, etc.).
// 2. One or more letters placed after another letter of greater value increases the greater value by
// the amount of the smaller (VI = 6, LXX = 70, MCC = 1200, etc.).
// 3. A letter placed before another letter of greater value decreases the greater value by the amount of the smaller
// (IV = 4, XC = 90, CM = 900, etc.). Several rules apply for subtraction: (a) only subtract powers of ten (I, X, or C,
// but not V or L); (b) only subtract one number from another; (c) do not subtract a number from one that is more than 10
//  times greater (that is, you can subtract 1 from 10 [IX] but not from 20—there is no such number as IXX).
// 4. A bar placed on top of a letter or string of letters increases the numeral's value by 1,000 times (XV = 15, (X-bar)(V-bar) = 15,000).

//write a function that will accept a Roman numeral and return a decimal value.

var numerals = {
  I:1,
  V:5,
  X:10,
  L:50,
  C:100,
  D:500,
  M:1000,
}

function romeConvert(input) {
  input.toUpperCase().split("")
  
}
