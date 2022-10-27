function findMinAndMaxSum(arr: number[]): void {
  let sum = 0;
  let smallestNum = arr[0];
  let biggestNum = arr[0];

  for (const num of arr) {
    if (num < smallestNum) {
      smallestNum = num;
    } else if (num > biggestNum) {
      biggestNum = num;
    }
    sum += num;
  }

  console.log(
    "min. sum = " + (sum - biggestNum) + " | max. sum = " + (sum - smallestNum)
  );
}

findMinAndMaxSum([1, 2, 3, 4, 5]);
findMinAndMaxSum([1, 3, 5, 7, 9]);
