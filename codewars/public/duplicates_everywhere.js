"use strict";
function removeDuplicates(table) {
    const tableWithoutDuplicates = new Map([...table].sort((a, b) => Number(a[0]) - Number(b[0])));
    const keys = Array.from(tableWithoutDuplicates.keys());
    for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        const value = tableWithoutDuplicates.get(key);
        if (value !== undefined) {
            const newValue = [];
            for (let j = 0, l = value.length; j < l; j++) {
                if (!newValue.includes(value[j])) {
                    newValue.push(value[j]);
                }
            }
            tableWithoutDuplicates.set(key, newValue);
        }
    }
    for (let i = keys.length - 1; i >= 0; i--) {
        const key = keys[i];
        const value = tableWithoutDuplicates.get(key);
        if (value !== undefined) {
            for (let j = i - 1; j >= 0; j--) {
                const nextKey = keys[j];
                const nextValue = tableWithoutDuplicates.get(nextKey);
                if (nextValue !== undefined) {
                    for (const v of value) {
                        if (nextValue.includes(v)) {
                            nextValue.splice(nextValue.indexOf(v), 1);
                        }
                    }
                }
            }
        }
    }
    return tableWithoutDuplicates;
}
const table = new Map([
    ["1", ["A", "B", "C"]],
    ["2", ["A", "B", "D", "A"]],
]);
const table2 = new Map([
    ["1", ["C", "F", "G"]],
    ["2", ["A", "B", "C"]],
    ["3", ["A", "B", "D"]],
]);
const table3 = new Map([
    ["1", ["A"]],
    ["2", ["A"]],
    ["3", ["A"]],
]);
const table4 = new Map([
    ["432", ["A", "A", "B", "D"]],
    ["53", ["L", "G", "B", "C"]],
    ["236", ["L", "A", "X", "G", "H", "X"]],
    ["11", ["P", "R", "S", "D"]],
]);
console.log(removeDuplicates(table));
console.log(removeDuplicates(table2));
console.log(removeDuplicates(table3));
console.log(removeDuplicates(table4));
