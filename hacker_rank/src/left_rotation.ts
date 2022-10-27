function rotLeft(n: number, arr: number[]): number[] {
  for (let i = 0; i < n; i++) {
    arr = [...arr.slice(1), ...arr.slice(0, 1)];
  }

  return arr;
}

console.log(rotLeft(1, [1, 2, 3, 4, 5]));
console.log(rotLeft(2, [1, 2, 3, 4, 5]));
console.log(rotLeft(3, [1, 2, 3, 4, 5]));
console.log(rotLeft(4, [1, 2, 3, 4, 5]));
console.log(rotLeft(5, [1, 2, 3, 4, 5]));
