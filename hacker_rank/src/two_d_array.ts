function countHighestHourglassSum(arr: number[][]): number {
  let sum = 0;
  const l = arr.length - 2;

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
      let tempSum = 0;
      tempSum +=
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      if (tempSum > sum) {
        sum = tempSum;
      }
    }
  }

  return sum;
}

const input = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const input2 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(countHighestHourglassSum(input));
console.log(countHighestHourglassSum(input2));
