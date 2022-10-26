function removeConsecutiveDuplicates(arr: string[]): string[] {
  const noDuplicates: string[] = [];

  for (const word of arr) {
    let sanitisedWord = word.charAt(0);

    for (let i = 0, l = word.length; i < l - 1; i++) {
      if (word.charAt(i + 1) !== word.charAt(i)) {
        sanitisedWord += word.charAt(i + 1);
      }
    }

    noDuplicates.push(sanitisedWord);
  }

  return noDuplicates;
}

console.log(
  removeConsecutiveDuplicates(["abracadabra", "allottee", "assessee"])
);
console.log(removeConsecutiveDuplicates(["kelless", "keenness"]));
