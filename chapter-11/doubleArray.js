function doubleArray(array, index = 0) {
  if (index >= array.length) {
    return;
  }

  array[index] = 2 * array[index];

  doubleArray(array, index + 1);
}

doubleArray([1, 2, 3, 4]);
