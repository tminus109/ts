function countWords(s: string): number {
  const length = s.length;

  if (length === 0) {
    return 0;
  }

  let wordCount = 1;

  for (let i = 0; i < length; i++) {
    if (s.charAt(i) !== s.charAt(i).toLocaleLowerCase()) {
      wordCount++;
    }
  }

  return wordCount;
}

console.log(countWords("saveChangesInTheEditor"));

// const words: string[] = s.split(/[A-Z]/);
// return words.length;
