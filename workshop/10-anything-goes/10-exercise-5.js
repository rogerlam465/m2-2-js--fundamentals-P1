// Q5
// Write a JavaScript program to find ALL the Armstrong
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer
// such that the sum of the cubes of its digits is equal
// to the number itself. For example,
// 371 is an Armstrong number:
// 3 ** 3 + 7 ** 3 + 1 ** 3
// = 27   + 343    + 1
// = 371

let armstrongNumbers = [];

// write your loop here...



for (let i = 0; i < 1000; i++) {

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
        totalVal += num ** 3;
    });

    if (i === totalVal) {
        armstrongNumbers.push(i);
    }

}

console.log(armstrongNumbers);
