function getUniqueInOrder(input: string | number[]): string[] | number[] {
  const uniqueInOrder: any[] = [];
  const l = input.length - 1;

  if (typeof input === "string") {
    uniqueInOrder.push(input.charAt(0));
    for (let i = 0; i < l; i++) {
      if (input.charAt(i + 1) !== input.charAt(i)) {
        uniqueInOrder.push(input.charAt(i + 1));
      }
    }
  } else {
    uniqueInOrder.push(input[0]);
    for (let j = 0; j < l; j++) {
      if (input[j + 1] !== input[j]) {
        uniqueInOrder.push(input[j + 1]);
      }
    }
  }

  return uniqueInOrder;
}

console.log(getUniqueInOrder("AAAABBBCCDAABBB"));
console.log(getUniqueInOrder("ABBCcAD"));
console.log(getUniqueInOrder([1, 2, 2, 3, 3]));
