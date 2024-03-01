function recursiveReverseString(string) {
  if (string.length === 1) {
    return string[0];
  }

  return recursiveReverseString(string[(1, string.length - 1)]) + string[0];
}

console.log(recursiveReverseString("abcde"));
