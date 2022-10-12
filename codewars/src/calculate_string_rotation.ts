function calculateStringRotation(string1: string, string2: string): number {
  if (string1.length !== string2.length) {
    return -1;
  }

  if (string1 === string2) {
    return 0;
  }

  for (let i = 0, l = string1.length; i < l; i++) {
    if (string1.charAt(i) === string2.charAt(0)) {
      const substring1 = string1.substring(i);
      const substring2 = string1.substring(0, i);
      if (substring1.concat(substring2) === string2) {
        return substring1.length;
      }
    }
  }

  return -1;
}

console.log(calculateStringRotation("fatigue", "tiguefa")); // 5
console.log(calculateStringRotation("coffee", "eecoff")); // 2
console.log(calculateStringRotation("eecoff", "coffee")); // 4
console.log(calculateStringRotation("moose", "Moose")); // -1
console.log(calculateStringRotation("isn't", "'tisn")); // 2
console.log(calculateStringRotation("Esham", "Esham")); // 0
console.log(calculateStringRotation("Esham", "esham")); // -1
console.log(calculateStringRotation("dog", "god")); // -1
console.log(calculateStringRotation("mami", "mima")); // 2
console.log(calculateStringRotation("m", "mmm")); // -1
