function findFirstIndexOfX(string, index = 0) {
  while (index <= string.length - 1) {
    if (string[index] === "x") {
      return index;
    } else {
      index += 1;
      findFirstIndexOfX(string, index);
    }
  }
}
