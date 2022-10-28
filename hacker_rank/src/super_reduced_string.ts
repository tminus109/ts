function reduceString(s: string): string {
  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i - 1)) {
      s = s.substring(0, i - 1) + s.substring(i + 1);
      i = 0;
    }
  }

  if (s === "") {
    return "Empty string";
  }

  return s;
}

console.log(reduceString("ffcaaabccddd"));
console.log(reduceString("aa"));
console.log(reduceString("baab"));
console.log(reduceString("aab"));
console.log(reduceString("abba"));
