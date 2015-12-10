// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.
function sumAll(arr) {
   var list = [];

    var lower = Math.min(arr[0], arr[1]);
    var upper = Math.max(arr[0], arr[1]);

    for (var i = lower; i <= upper; i++) {
        list.push(i);
    }
return list.reduce((a,b) => a+b);
}

sumAll([1, 4]);

// sumAll([1, 4]) should return a number.
// sumAll([1, 4]) should return 10.
// sumAll([4, 1]) should return 10.
// sumAll([5, 10]) should return 45.
// sumAll([10, 5]) should return 45.
