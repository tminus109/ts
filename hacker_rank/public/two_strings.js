"use strict";
function compareStrings(s1, s2) {
    for (const char of s1) {
        if (s2.includes(char)) {
            return "YES";
        }
    }
    return "NO";
}
console.log(compareStrings("hello", "world"));
console.log(compareStrings("hi", "world"));
