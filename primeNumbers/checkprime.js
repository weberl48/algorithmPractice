// Question: How would you verify a prime number?
//
// Answer: a prime number is only divisible by itself and 1. So, i will run a while loop and increase by 1.

function isPrime(n){
  var divisor = 2;

  while (n > divisor){
    if(n % divisor === 0){
     return false;
    }
    else
      divisor++;
  }
  return true;
}

 isPrime(137);

 isPrime(237);


//   step-1: Any number will not be divisible by a number bigger than half of it. for example, 13 will never be divisible by 7, 8, 9 .. it could be as big as half of it for even number. for example, 16 will be divisible by 8 but will never be by 9, 10, 11, 12...
// Decision: a number will never be divisible by a number bigger than half of its values. So, we dont have to loop 50%
// step-2: Now, if a number is not divisible by 3. (if it is divisible by 3, then it wouldn't be a prime number). then it would be divisible any number bigger than the 1/3 of its value. for example, 35 is not divisible by 3. hence it will be never divisible by any number bigger than 35/3 will never be divisible by 12, 13, 14 ... if you take an even number like 36 it will never be divisible by 13, 14, 15
// Decision: a number could be divisible by numbers 1/3 of its value.
// step-3: For example u have the number 127. 127 is not divisible by 2 hence you should check upto 63.5. Secondly, 127 is not divisible by 3. So, you will check up to 127/3 approximately 42. It is not divisible by 5, divisor should be less than 127/5 approximately 25 not by 7. So, where should we stop?
// Decision: divisor would be less than Math.sqrt (n)
