function golomb(n) {
  if (n === 1) {
    return 1;
  }

  return 1 + golomb(n - golomb(golomb(n - 1)));
}
