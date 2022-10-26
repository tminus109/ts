"use strict";
function getAlternatingChars(s) {
    let deletionCount = 0;
    let index = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (s.charAt(index + 1) === s.charAt(index)) {
            s = s.substring(0, index) + s.substring(index + 1);
            deletionCount++;
            i--;
        }
        else {
            index++;
        }
    }
    return deletionCount;
}
console.log(getAlternatingChars("AAAA"));
console.log(getAlternatingChars("BBBBB"));
console.log(getAlternatingChars("ABABABAB"));
console.log(getAlternatingChars("BABABA"));
console.log(getAlternatingChars("AAABBB"));
