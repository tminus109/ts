"use strict";
class bot {
    constructor(name) {
        this.name = name;
    }
    takeSomeMatchesAway(matchCount, maxTake) {
        if (matchCount > 0) {
            let take;
            const randomTake = Math.floor(Math.random() * maxTake + 1);
            if (randomTake > matchCount) {
                take = matchCount;
            }
            else {
                take = randomTake;
            }
            matchCount -= take;
            console.log(this.name +
                " has taken " +
                take +
                " match(es). There are " +
                matchCount +
                " match(es) left.");
        }
        return matchCount;
    }
}
function play(matchCount, maxTake, bot1, bot2) {
    console.log("There are " +
        matchCount +
        " match(es) on the table. The maximum take is: " +
        maxTake +
        ".");
    while (matchCount > 0) {
        matchCount = bot1.takeSomeMatchesAway(matchCount, maxTake);
        if (matchCount === 0) {
            console.log(bot1.name + " has lost.");
        }
        if (matchCount > 0) {
            matchCount = bot2.takeSomeMatchesAway(matchCount, maxTake);
            if (matchCount === 0) {
                console.log(bot2.name + " has lost.");
            }
        }
    }
}
const matchCount = 20;
const maxTake = 7;
const bot1 = new bot("R2D2");
const bot2 = new bot("C3PO");
play(matchCount, maxTake, bot1, bot2);
