"use strict";
function findGems(rocks) {
    let gemCount = 0;
    const length = rocks.length;
    const firstRock = rocks[0];
    for (const mineral of firstRock) {
        let occCount = 0;
        for (const rock of rocks) {
            if (rock.includes(mineral)) {
                occCount++;
            }
        }
        if (occCount === length) {
            gemCount++;
        }
    }
    return gemCount;
}
console.log(findGems(["abc", "abc", "bc"]));
console.log(findGems(["abcdde", "baccd", "eeabg"]));
