function triangularNumbers(n) {
  if (n === 1) {
    return 1;
  }

  return n + triangularNumbers(n - 1);
}
