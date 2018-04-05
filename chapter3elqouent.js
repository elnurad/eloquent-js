/* Chapter 3, Functions.
 exercise 1. Write a function min that takes two arguments and returns their minimum.*/

 
 function min(num1, num2) {
 	if (num1 < num2) {
 		return num1;
 	} else {
 		return num2;
 	}
 }



/*Recursion
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.*/

function isEven(n) {
	if (n === 0) {
		return true;
	} else if (n === 1) {
		return false;
		
		} else if (n < 0) {
			return "only positive integers are allowed";
		}
	return isEven(n-2);

}

