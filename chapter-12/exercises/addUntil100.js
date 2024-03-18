function addUntil100(array) {
  if (array.length === 0) {
    return 0;
  }

  const sum = addUntil100(array[(1, array.length - 1)]);

  if (array[0] + sum > 100) {
    return addUntil100(array[(1, array.length - 1)]);
  } else {
    return sum;
  }
}
