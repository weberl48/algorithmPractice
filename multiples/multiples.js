// Create a function with two arguments that will return a list of length (n) with multiples of (x).
//
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
//
// Return the results as an array
function countBy(x,n) {
  var z = []
  for (var i = 0; i <= n; i++) {
    z.push(x * i)
  }
  return z
}
