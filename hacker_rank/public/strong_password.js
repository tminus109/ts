"use strict";
function checkPasswordStrength(password) {
    let count = 0;
    const missCharCount = 6 - password.length;
    if (!password.match(/[a-z]/)) {
        count++;
    }
    if (!password.match(/[A-Z]/)) {
        count++;
    }
    if (!password.match(/[!@#$%^&*()-+]/)) {
        count++;
    }
    if (!password.match(/[0-9]/)) {
        count++;
    }
    return Math.max(count, missCharCount);
}
console.log(checkPasswordStrength("Ab1"));
console.log(checkPasswordStrength("#HackerRank"));
console.log(checkPasswordStrength("2bbbb"));
console.log(checkPasswordStrength("2bb#A"));
