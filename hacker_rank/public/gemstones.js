"use strict";
function findGems(rocks) {
    let gemCount = 0;
    const firstRock = rocks[0];
    const l = firstRock.length;
    const length = rocks.length;
    const seen = new Set();
    for (let i = 0; i < l; i++) {
        const mineral = firstRock.charAt(i);
        if (!seen.has(mineral)) {
            seen.add(mineral);
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
    }
    return gemCount;
}
console.log(findGems(["abc", "abc", "bc"]));
console.log(findGems(["abcdde", "baccd", "eeabg"]));
console.log(findGems(["abcb", "abcb", "bcb"]));
