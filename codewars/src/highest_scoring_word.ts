function findHighestScoringWord(input: string): string {
  const words = input.split(" ");
  const scoreOfEachWord: Map<string, number> = new Map();
  let highestScoringWord = "";
  let score = 0;

  for (let i = 97; i < 97 + 26; i++) {
    scoreOfEachWord.set(String.fromCharCode(i), i - 96);
  }

  for (let i = 0, wordsLength = words.length; i < wordsLength; i++) {
    const tempWord = words[i];
    let tempScore = 0;

    for (let j = 0, l = tempWord.length; j < l; j++) {
      const scoreOfLetter = scoreOfEachWord.get(tempWord[j]);
      if (scoreOfLetter !== undefined) {
        tempScore += scoreOfLetter;
      }
    }

    if (tempScore > score) {
      highestScoringWord = tempWord;
      score = tempScore;
    }
  }

  return highestScoringWord;
}

console.log(findHighestScoringWord("a aa b bb"));
console.log(findHighestScoringWord("abc bca"));
console.log(findHighestScoringWord("rrr aaa bbb ccc rrr fff"));
console.log(findHighestScoringWord("polar black sun brown sloth andean panda"));
