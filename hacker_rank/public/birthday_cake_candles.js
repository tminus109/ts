"use strict";
function countTallestCandles(candles) {
    let tallestCandleCount = 1;
    let tallestCandle = candles[0];
    for (let i = 1, l = candles.length; i < l; i++) {
        const candle = candles[i];
        if (candle > tallestCandle) {
            tallestCandle = candle;
            tallestCandleCount = 1;
        }
        else if (candle === tallestCandle) {
            tallestCandleCount++;
        }
    }
    return tallestCandleCount;
}
console.log(countTallestCandles([4, 4, 1, 3]));
console.log(countTallestCandles([3, 2, 1, 3]));
console.log(countTallestCandles([3, 3, 3, 4, 5, 7, 6, 4, 2, 8, 4, 4, 8, 8, 8]));
console.log(countTallestCandles([3, 3, 4, 5, 7, 6, 4, 2, 8, 4, 4, 8, 8, 9, 8]));
