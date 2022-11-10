function getUniqueInOrder(input: string | number[]): string[] | number[] {
  return [...input].filter(
    (currentValue, index) => currentValue !== input[index - 1]
  ) as string[] | number[];
}

console.log(getUniqueInOrder("AAAABBBCCDAABBB"));
console.log(getUniqueInOrder("ABBCcAD"));
console.log(getUniqueInOrder([1, 2, 2, 3, 3]));
console.log(getUniqueInOrder([]));
