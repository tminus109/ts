"use strict";
function countMostProfit(quotes) {
    let profit = 0;
    let stockCount = 0;
    for (let i = 0; i < quotes.length; i++) {
        let bestPrice = quotes[i];
        for (let j = i + 1; j < quotes.length; j++) {
            if (quotes[j] > bestPrice) {
                bestPrice = quotes[j];
            }
        }
        if (bestPrice > quotes[i]) {
            stockCount++;
            profit -= quotes[i];
        }
        else if (bestPrice == quotes[i]) {
            profit += stockCount * bestPrice;
            stockCount = 0;
        }
    }
    return profit;
}
console.log(countMostProfit([1, 2, 3, 4, 5, 6]));
console.log(countMostProfit([6, 5, 4, 3, 2, 1]));
console.log(countMostProfit([1, 6, 5, 10, 8, 7]));
console.log(countMostProfit([1, 2, 10, 3, 2, 7, 3, 2]));
