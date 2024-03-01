function numberOfPaths(steps) {
  if (steps <= 0) return 0;
  if (steps <= 1) return 1;
  if (steps <= 2) return 2;
  if (steps <= 4) return 3;

  return (
    numberOfPaths(steps - 1) +
    numberOfPaths(steps - 2) +
    numberOfPaths(steps - 3)
  );
}
