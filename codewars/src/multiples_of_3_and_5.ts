function findMultiples(input: number): number {
  if (input < 0 || input === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < input; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log(findMultiples(10));
console.log(findMultiples(-10));
