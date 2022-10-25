"use strict";
function findMultiples(input) {
    if (input < 3) {
        return 0;
    }
    let sum = 0;
    for (let i = 3; i < input; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(findMultiples(10));
console.log(findMultiples(-10));
