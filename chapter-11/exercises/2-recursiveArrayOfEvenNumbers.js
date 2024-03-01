function countEvenNumbers(array) {
  if (array.length === 0) {
    return [];
  }

  if (array[0] % 2 === 0) {
    return array[0] + countEvenNumbers(array.slice(1, array.length));
  } else {
    return countEvenNumbers(array.slice(1, array.length));
  }
}
