"use strict";
function getUniqueInOrder(input) {
    return [...input].filter((currentValue, index) => currentValue !== input[index - 1]);
}
console.log(getUniqueInOrder("AAAABBBCCDAABBB"));
console.log(getUniqueInOrder("ABBCcAD"));
console.log(getUniqueInOrder([1, 2, 2, 3, 3]));
console.log(getUniqueInOrder([]));
