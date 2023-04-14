for (let i = 1; i < 101; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		console.log("FizzBuzz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else {
		console.log(i);
	}
}
// For this excercise we run again a loop and inside what we are gonna specify is when to stop, it have to be looping through the numbers between 1 and 100 so we initialize the variable i on 1, and the condition is that it's going to be looping on the numbers under 101, finally we have the flow conditions whether if it's divisible by 3 and five and the remainder of both is 0, log  fizzbuzz, if it's just divisible by 5 and also the remainder is 0 then print buzz, if the value of i is divisible by 3 with a 0 remainder, then print fizz and finally whether no of the cases is valid, then just print the value of i for showing the current value of the variable.
