"use strict";
function removeDuplicateIds(obj) {
    const output = {};
    const keys = Object.keys(obj).sort((a, b) => Number(b) - Number(a));
    const uniqueChars = new Set();
    for (const key of keys) {
        output[key] = [];
        for (const char of obj[key]) {
            if (!uniqueChars.has(char)) {
                output[key].push(char);
            }
            uniqueChars.add(char);
        }
    }
    return output;
}
const table = {
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],
};
const table2 = {
    "1": ["C", "F", "G"],
    "2": ["A", "B", "C"],
    "3": ["A", "B", "D"],
};
const table3 = {
    "1": ["A"],
    "2": ["A"],
    "3": ["A"],
};
const table4 = {
    "432": ["A", "A", "B", "D"],
    "53": ["L", "G", "B", "C"],
    "236": ["L", "A", "X", "G", "H", "X"],
    "11": ["P", "R", "S", "D"],
};
console.log(removeDuplicateIds(table));
console.log(removeDuplicateIds(table2));
console.log(removeDuplicateIds(table3));
console.log(removeDuplicateIds(table4));
