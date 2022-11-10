function rotLeft(n: number, arr: number[]): number[] {
  const i = (0 + n) % arr.length;

  return arr.slice(i).concat(arr.slice(0, i));
}

console.log(rotLeft(1, [1, 2, 3, 4, 5]));
console.log(rotLeft(2, [1, 2, 3, 4, 5]));
console.log(rotLeft(3, [1, 2, 3, 4, 5]));
console.log(rotLeft(4, [1, 2, 3, 4, 5]));
console.log(rotLeft(5, [1, 2, 3, 4, 5]));
