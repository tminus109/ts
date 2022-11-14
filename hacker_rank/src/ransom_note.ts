function matchWords(magazine: string[], note: string[]) {
  for (const word of note) {
    if (!magazine.includes(word)) {
      console.log("No");
      return;
    } else {
      magazine.splice(magazine.indexOf(word), 1);
    }
  }

  console.log("Yes");
}

matchWords(
  ["give", "me", "one", "grand", "today", "night"],
  ["give", "one", "grand", "today"]
);
matchWords(
  ["two", "times", "three", "is", "not", "four"],
  ["two", "times", "three", "is", "not", "four"]
);
matchWords(["attack", "at", "dawn"], ["Attack", "at", "dawn"]);
matchWords(
  ["two", "times", "three", "is", "not", "four"],
  ["two", "times", "two", "is", "four"]
);
