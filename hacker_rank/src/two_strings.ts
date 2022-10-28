function compareStrings(s1: string, s2: string): string {
  for (const char of s1) {
    if (s2.includes(char)) {
      return "YES";
    }
  }

  return "NO";
}

console.log(compareStrings("hello", "world"));
console.log(compareStrings("hi", "world"));
