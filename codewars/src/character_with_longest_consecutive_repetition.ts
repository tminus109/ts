type charRepetition = [string, number];

function findChar(s: string): charRepetition {
  if (s === "") {
    return ["", 0];
  }

  let c = "";
  let l = 0;

  for (let i = 0, length = s.length; i < length - 1; i++) {
    const char = s.charAt(i);
    let count = 1;

    for (let j = i + 1; j < length; j++) {
      if (s.charAt(j) === char) {
        count++;
      } else {
        break;
      }
    }

    if (count > l) {
      c = char;
      l = count;
    }
  }

  return [c, l];
}

console.log(findChar("alallaamdgg"));
console.log(findChar("abcaba"));
console.log(findChar("abcabab"));
console.log(findChar("babcaba"));
console.log(findChar(""));
console.log(findChar("aaaabb"));
console.log(findChar("bbbaaabaaaa"));
