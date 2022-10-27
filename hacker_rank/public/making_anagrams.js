"use strict";
function makeAnagrams(a, b) {
    let deletionCount = 0;
    const chars = new Map();
    for (let i = 0, l = a.length; i < l; i++) {
        const key = a.charAt(i);
        const value = chars.has(key) ? chars.get(key) : 0;
        if (value !== undefined) {
            chars.set(key, value + 1);
        }
    }
    for (let j = 0, l2 = b.length; j < l2; j++) {
        const key = b.charAt(j);
        const value = chars.has(key) ? chars.get(key) : 0;
        if (value !== undefined) {
            chars.set(key, value - 1);
        }
    }
    chars.forEach((value) => (deletionCount += Math.abs(value)));
    return deletionCount;
}
console.log(makeAnagrams("cde", "abc"));
console.log(makeAnagrams("bacdc", "dcbac"));
console.log(makeAnagrams("bacdc", "dcbad"));
