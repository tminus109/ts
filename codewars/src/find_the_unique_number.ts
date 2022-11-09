function findUniq(numbers: number[]): number {
  const l = numbers.length;

  for (let i = 0; i < l; i++) {
    let count = 0;
    for (let j = 0; j < l; j++) {
      if (numbers[i] === numbers[j]) {
        count++;
      }
    }
    if (count === 1) {
      return numbers[i];
    }
  }

  return 0;
}

console.log(findUniq([1, 1, 1, 1, 1, 2]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
console.log(findUniq([1, 1, 1, 1, 1, 3]));
console.log(findUniq([1, 8, 4, 4, 6, 1, 8]));
console.log(findUniq([1, 4, 4, 5, 5, 3, 3, 2, 2]));
console.log(findUniq([2, 2, 5, 5, 4, 3, 3, 1, 1]));
console.log(findUniq([3, 5, 5, 4, 4, 3, 2, 2, 9]));
