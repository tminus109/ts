function checkMoves(startPos: string, endPos: string, moves: number): boolean {
  if (startPos === endPos) {
    return true;
  }

  if (moves === 0) {
    return false;
  }

  const startChar = startPos.charCodeAt(0);
  const startNum = parseInt(startPos.charAt(1));
  const endChar = endPos.charCodeAt(0);
  const endNum = parseInt(endPos.charAt(1));

  if (moves === 1) {
    if (Math.abs(startChar - endChar) === Math.abs(startNum - endNum)) {
      return true;
    }
  }

  if (moves > 1) {
    if (
      (Math.abs(startChar - endChar) + Math.abs(startNum - endNum)) % 2 ===
      0
    ) {
      return true;
    }
  }

  return false;
}

console.log(checkMoves("a1", "c1", 2));
console.log(checkMoves("a1", "c1", 1));
console.log(checkMoves("a1", "a1", 0));
console.log(checkMoves("a1", "c1", 0));
console.log(checkMoves("d4", "d5", 2));
console.log(checkMoves("d4", "d8", 22));
console.log(checkMoves("d4", "a7", 1));
console.log(checkMoves("d4", "c4", 1));
console.log(checkMoves("d4", "a5", 2));
console.log(checkMoves("a1", "g2", 2));
console.log(checkMoves("a1", "g1", 2));
console.log(checkMoves("d4", "a3", 3));
