"use strict";
function matchWords(magazine, note) {
    const wordsOfNote = note.split(" ");
    const wordsOfMagazine = magazine.split(" ");
    let yesOrNo = true;
    for (const word of wordsOfNote) {
        if (!wordsOfMagazine.includes(word)) {
            yesOrNo = false;
            break;
        }
    }
    if (yesOrNo) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}
matchWords("give me one grand today night", "give one grand today");
matchWords("two times three is not four", "two times three is not four");
matchWords("i've got a lovely bunch of coconuts", "i've got some coconuts");
matchWords("attack at dawn", "Attack at dawn");
