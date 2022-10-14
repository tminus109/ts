function findUniq(numbers: number[]): number | string {
  const mappedNumbers: Map<number, number> = new Map();

  for (const n of numbers) {
    if (!mappedNumbers.has(n)) {
      mappedNumbers.set(n, 1);
    } else {
      const currentValue = mappedNumbers.get(n);
      if (currentValue !== undefined) {
        mappedNumbers.set(n, currentValue + 1);
      }
    }
  }

  for (const [key, value] of mappedNumbers) {
    if (value === 1) {
      return key;
    }
  }

  return "No number is unique.";
}

console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
console.log(findUniq([1, 1, 1, 1, 1, 1]));
