/*Exercise 1. 
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

My solution is below: */


var hash = "";
for (var i=0; i<7; i++) {
	hash = hash+"#";
console.log(hash);
};




/* exercise 2:
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).*/



for (var i=1; i <= 100; i++) {
	if (i%3 !== 0 && i%5 !== 0) {
		console.log(i);

	} else if (i%3 == 0) {
		console.log("fizz");
	} else if (i%5 == 0) {
		console.log("buzz");
	}
};


//modification://

for (var i = 1; i <= 100; i++) {
	if (i%3 == 0 && i%5 == 0) {
		console.log("buzzfizz");
	} else {
		console.log(i);
	}
};


/*exercise 3: 
Chess board
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
*/


var board = "";
for (var y=0; y<8; y++) {
for (var x = 0; x < 8; x++) {
	if ((x+y)%2 == 0) {
		board += " ";
	} else {
		board += "#";
	}
} 
board += "\n"
}
console.log(board);

/* When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.*/

var board = "";
var size = 8;
for (var y=0; y<size; y++) {
for (var x = 0; x < size; x++) {
	if ((x+y)%2 == 0) {
		board += " ";
	} else {
		board += "#";
	}
} 
board += "\n"
}
console.log(board);
