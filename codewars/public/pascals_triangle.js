"use strict";
function getPascalsTriangle(depth) {
    if (depth < 1) {
        return [];
    }
    let triangle = [];
    let rowLength = 1;
    for (let i = 0; i < depth; i++) {
        for (let j = 0; j < rowLength; j++) {
            if (j === 0 || j === rowLength - 1) {
                triangle.push(1);
            }
            else {
                triangle.push(triangle[triangle.length - rowLength] +
                    triangle[triangle.length - (rowLength - 1)]);
            }
        }
        rowLength++;
    }
    return triangle;
}
console.log(getPascalsTriangle(1));
console.log(getPascalsTriangle(2));
console.log(getPascalsTriangle(4));
console.log(getPascalsTriangle(6));
console.log(getPascalsTriangle(0));
