// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

function calculateAverage(grades) {
    let countScores = 0;
    let totalScores = 0;

    grades.forEach(function (number) {
        countScores++;
        totalScores += number;
    })
    let classAvg = Math.floor(totalScores / countScores);

    if (classAvg < 60) {
        return "F";
    } else if (classAvg >= 60 && classAvg < 70) {
        return "D";
    } else if (classAvg >= 70 && classAvg < 80) {
        return "C";
    } else if (classAvg >= 80 && classAvg < 90) {
        return "B";
    } else if (classAvg >= 90 && classAvg < 100) {
        return "A";
    }
}

console.log(calculateAverage([48, 95, 65, 48, 59, 78, 72, 65]));

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well

console.log(calculateAverage([43, 56, 83, 58, 90, 70]));

console.log(calculateAverage([67, 98, 56, 23, 36, 16]));

console.log(calculateAverage([78, 75, 79, 90, 90, 90, 97, 87]));



