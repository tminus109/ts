function sortPile(
  cleanTowels: string[],
  numOfTowelsUsedEachWeek: number[]
): string[] {
  for (const numOfTowels of numOfTowelsUsedEachWeek) {
    const usedTowels: string[] = [];

    for (let j = 0; j < numOfTowels; j++) {
      const usedTowel = cleanTowels.pop();
      if (usedTowel !== undefined) {
        usedTowels.push(usedTowel);
      }
    }

    usedTowels.sort().reverse();
    cleanTowels = [...cleanTowels, ...usedTowels];
  }

  return cleanTowels;
}

console.log(sortPile(["blue", "red", "blue", "red", "blue"], [4, 2, 5, 3]));
console.log(sortPile(["blue", "red", "blue", "red", "blue"], [3, 2]));
