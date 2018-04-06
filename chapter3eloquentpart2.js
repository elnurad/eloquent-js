/*Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.*/
//My solution below://

function countBs(str) {
	var count = 0;
	for (var n = 0; n < str.length; n++) {
		if (str[n] === "B") {
			count = count + 1;
			
		}
	}
	return count;
}

/*Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.*/
//My solution below://

function countChars(str, char) {
	var count = 0;
	for (var n = 0; n < str.length; n++) {
		if (str[n] === char) {
			count = count + 1;
			
		}
	}
	return count;
}
