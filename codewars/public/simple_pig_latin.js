"use strict";
function pigIt(latin) {
    let pigLatin = "";
    const words = latin.split(" ");
    const regEx = /^[.,:!?]/;
    const length = words.length;
    for (let i = 0; i < length; i++) {
        let word = words[i];
        let p = "";
        for (let j = 1, l = word.length; j < l; j++) {
            if (word[j].match(regEx)) {
                p = word[j];
            }
            else {
                pigLatin += word[j];
            }
        }
        pigLatin += word[0] + "ay";
        pigLatin += p;
        pigLatin += " ";
    }
    return pigLatin.trim();
}
console.log(pigIt("Pig latin is cool."));
console.log(pigIt("Hello world!"));
