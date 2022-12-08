"use strict";
function countDiagonalDiff(arr) {
    let sumLeft = 0;
    let sumRight = 0;
    const length = arr.length;
    let j = length - 1;
    for (let i = 0; i < length; i++) {
        sumLeft += arr[i][i];
        sumRight += arr[i][j];
        j--;
    }
    return Math.abs(sumLeft - sumRight);
}
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const arr2 = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
];
console.log(countDiagonalDiff(arr));
console.log(countDiagonalDiff(arr2));
