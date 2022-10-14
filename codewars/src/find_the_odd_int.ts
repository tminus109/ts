function findOddInt(ints: number[]): number | string {
  const mappedInts: Map<number, number> = new Map();

  for (const i of ints) {
    if (!mappedInts.has(i)) {
      mappedInts.set(i, 1);
    } else {
      const currentValue = mappedInts.get(i);
      if (currentValue !== undefined) {
        mappedInts.set(i, currentValue + 1);
      }
    }
  }

  for (const [key, value] of mappedInts) {
    if (value % 2 !== 0) {
      return key;
    }
  }

  return "It's all even.";
}

console.log(findOddInt([7]));
console.log(findOddInt([0]));
console.log(findOddInt([1, 1, 2]));
console.log(findOddInt([0, 1, 0, 1, 0]));
console.log(findOddInt([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
console.log(findOddInt([-1, 2, 2]));
console.log(findOddInt([7, 7]));
