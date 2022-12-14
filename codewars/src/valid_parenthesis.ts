function isParenthesisValid(input: string): boolean {
  if (input === "") {
    return false;
  }

  const bracketsOnly = input.replaceAll(/[^()]/g, "");
  const length = bracketsOnly.length;

  if (
    bracketsOnly === "" ||
    bracketsOnly.charAt(0) !== "(" ||
    bracketsOnly.charAt(length - 1) !== ")"
  ) {
    return false;
  }

  let count = 0;

  for (let i = 0; i < length; i++) {
    if (bracketsOnly.charAt(i) === "(") {
      count++;
    } else {
      count--;
      if (count < 0) {
        return false;
      }
    }
  }

  return count === 0;
}

console.log(isParenthesisValid("baba()"));
console.log(isParenthesisValid(")(()))"));
console.log(isParenthesisValid("((()))("));
console.log(isParenthesisValid("(())((()())())"));
console.log(isParenthesisValid("("));
console.log(isParenthesisValid(")"));
console.log(isParenthesisValid(""));
console.log(isParenthesisValid("baba"));
