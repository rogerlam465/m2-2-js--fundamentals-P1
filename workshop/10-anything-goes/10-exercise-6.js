// Q6
// Take the code you wrote in Q5 and now let's create a
// reusable function that takes two arguments,
// numbers that dictate the range within which to look for
// Armstrong numbers.

// This means that our code from the previous question will need to be tweaked a little
// to determine Armstrong numbers of different lengths.
// e.g.
// a number of 1 digit; each digit is to the power of 1
// a number of 2 digit; each digit is to the power of 2
// a number of 3 digit; each digit is to the power of 3
// a number of 4 digit; each digit is to the power of 4
// a number of 5 digit; each digit is to the power of 5

// See this site for a list of "narcissistic" numbers
// http://mathworld.wolfram.com/NarcissisticNumber.html

function identifyArmstrongNumbers(num1, num2) {

    let armstrongNumbers = [];

    for (let i = num1; i < num2; i++) {

        // first, let's break it down into ones, tens, hundreds, etc.

        // store separate digits here
        let digitsArray = [];

        // loop for as many times as there are orders of magnitude
        // i.e. once for ones, twice for tens, thrice for hundreds, etc.

        for (let j = 0; j < i.toString().split('').length; j++) {

            // every time we go through, push the appropriate digit into the array

            digitsArray.push(Number(i.toString().split('')[j]));
        }

        let totalVal = 0;

        digitsArray.forEach(function (num) {
            totalVal += num ** digitsArray.length;
        });

        if (i === totalVal) {
            armstrongNumbers.push(i);
        }

    }

    return armstrongNumbers;
}

console.log(identifyArmstrongNumbers(100, 99999));
