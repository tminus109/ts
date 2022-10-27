function findSegments(chocolate: number[], d: number, m: number): number {
  let count = 0;
  const l = chocolate.length - m + 1;

  for (let i = 0; i < l; i++) {
    let segment = 0;
    for (let j = i; j < i + m; j++) {
      segment += chocolate[j];
    }
    if (segment === d) {
      count++;
    }
  }

  return count;
}

console.log(findSegments([2, 2, 1, 3, 2], 4, 2));
console.log(findSegments([1, 2, 1, 3, 2], 3, 2));
console.log(findSegments([1, 1, 1, 1, 1, 1], 3, 2));
console.log(findSegments([4], 4, 1));
console.log(findSegments([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 24, 12));
console.log(findSegments([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 2, 1));
