function foldArray(array: number[], foldCount: number): number[] {
  if (array.length === 0 || array.length === 1) {
    return array;
  }

  let foldedArray = array;

  for (let i = 0; i < foldCount; i++) {
    const length = foldedArray.length;
    for (let j = 0, l = Math.floor(length / 2); j < l; j++) {
      foldedArray[j] += foldedArray[length - 1 - j];
    }
    foldedArray = foldedArray.slice(0, Math.ceil(length / 2));
  }

  return foldedArray;
}

console.log(foldArray([], 1));
console.log(foldArray([100], 1));
console.log(foldArray([1, 2, 3, 4, 5], 1));
console.log(foldArray([1, 2, 3, 4, 5], 2));
console.log(foldArray([1, 2, 3, 4], 2));
console.log(foldArray([1, 2, 3, 4, 5, 6], 3));
console.log(foldArray([1, 2, 3], 1));
