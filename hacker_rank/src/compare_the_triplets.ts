function compareTriplets(a: number[], b: number[]): number[] {
  const scores: number[] = [];
  const length = a.length;
  let scoreA = 0;
  let scoreB = 0;

  for (let i = 0; i < length; i++) {
    if (a[i] > b[i]) {
      scoreA++;
    } else if (b[i] > a[i]) {
      scoreB++;
    }
  }

  scores.push(scoreA, scoreB);

  return scores;
}

console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
