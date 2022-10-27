function calcRatios(arr: number[]) {
  const length = arr.length;
  let posCount = 0;
  let negCount = 0;
  let zeroCount = 0;

  for (const n of arr) {
    if (n > 0) {
      posCount++;
    } else if (n < 0) {
      negCount++;
    } else {
      zeroCount++;
    }
  }

  console.log("pos: " + (posCount / length).toFixed(6));
  console.log("neg: " + (negCount / length).toFixed(6));
  console.log("zero: " + (zeroCount / length).toFixed(6));
}

calcRatios([1, 1, 0, -1, -1]);
calcRatios([-4, 3, -9, 0, 4, 1]);
