function findWhichAreIn(a1: string[], a2: string[]): string[] {
  const r: string[] = [];

  for (const word of a1) {
    for (let i = 0, l = a2.length; i < l; i++) {
      if (a2[i].includes(word)) {
        r.push(word);
        break;
      }
    }
  }

  return r;
}

console.log(
  findWhichAreIn(
    ["arp", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);
console.log(
  findWhichAreIn(
    ["tarp", "mice", "bull"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);
