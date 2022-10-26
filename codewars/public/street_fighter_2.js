"use strict";
function getHoveredCharacters(fighters, moves) {
    const hoveredCharacters = [];
    let horPos = 0;
    let vertPos = 0;
    const rightEnd = 5;
    for (const move of moves) {
        if (move === "left") {
            if (horPos === 0) {
                horPos = rightEnd;
            }
            else {
                horPos--;
            }
        }
        else if (move === "right") {
            if (horPos === rightEnd) {
                horPos = 0;
            }
            else {
                horPos++;
            }
        }
        else if (move === "up" && vertPos === 1) {
            vertPos = 0;
        }
        else if (move === "down" && vertPos === 0) {
            vertPos = 1;
        }
        hoveredCharacters.push(fighters[vertPos][horPos]);
    }
    return hoveredCharacters;
}
const fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
];
const moves = ["up", "left", "right", "left", "left"];
const moves2 = ["right", "down", "left", "left", "left", "left", "right"];
// initial_position = (0,0)
console.log(getHoveredCharacters(fighters, moves));
console.log(getHoveredCharacters(fighters, moves2));
