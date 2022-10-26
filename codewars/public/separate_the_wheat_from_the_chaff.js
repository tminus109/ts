"use strict";
function separateWheatFromChaff(wheatAndChaff) {
    const wheatFromChaff = [];
    let head = 0;
    let tail = wheatAndChaff.length - 1;
    while (head <= tail) {
        if (wheatAndChaff[head] < 0) {
            wheatFromChaff[head] = wheatAndChaff[head];
            head++;
        }
        else if (wheatAndChaff[tail] > 0) {
            wheatFromChaff[tail] = wheatAndChaff[tail];
            tail--;
        }
        else {
            wheatFromChaff[tail] = wheatAndChaff[head];
            wheatFromChaff[head] = wheatAndChaff[tail];
            head++;
            tail--;
        }
    }
    return wheatFromChaff;
}
console.log(separateWheatFromChaff([7, -8, 1, -2]));
console.log(separateWheatFromChaff([-31, -5, 11, -42, -22, -46, -4, -28]));
console.log(separateWheatFromChaff([-25, -48, -29, -25, 1, 49, -32, -19, -46, 1]));
