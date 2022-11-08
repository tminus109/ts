function comp(a: Array<number> | null, b: Array<number> | null): boolean {
  if (a === null || b === null || a.length !== b.length) {
    return false;
  }

  const sortedA = a
    .map((a) => a * a)
    .sort((a, b) => {
      return a - b;
    });

  const sortedB = b.sort((a, b) => {
    return a - b;
  });

  for (let i = 0, l = sortedA.length; i < l; i++) {
    if (sortedA[i] !== sortedB[i]) {
      return false;
    }
  }

  return true;
}

const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const b1 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
const a2 = [121, 144, 19, 161, 19, 144, 19, 11];
const b2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
const a3 = [121, 144, 19, 161, 19, 144, 19, 11];
const b3 = [132, 14641, 20736, 361, 25921, 361, 20736, 361];
const a4 = [121, 144, 19, 161, 19, 144, 19, 11];
const b4 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
const a5 = [41, 73, 23, 80, 29, 54, 52, 41, 8, 17, 75, 24, 80, 0, 47, 96, 16];
const b5 = [
  1681, 5329, 529, 6400, 841, 2916, 2704, 1681, 64, 289, 5625, 576, 6400, 0,
  2209, 9216, 256,
];
const a6 = [121, -144, 19, 161, 19, 144, 19, 11];
const b6 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(comp(a1, b1));
console.log(comp(a2, b2));
console.log(comp(a3, b3));
console.log(comp(a4, b4));
console.log(comp(a5, b5));
console.log(comp(a6, b6));
