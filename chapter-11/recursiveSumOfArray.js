function sum(array) {
  if (array.length === 1) {
    return array[0];
  }

  return array[0] + sum(array[(1, array.length - 1)]);
}

console.log(sum([1, 2, 3]));
