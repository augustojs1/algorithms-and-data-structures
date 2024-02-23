function findFirstDuplicateValue(array) {
  const hashedValues = {};

  for (let i = 0; i < array.length; i++) {
    if (!hashedValues[array[i]]) {
      hashedValues[array[i]] = true;
    } else {
      return array[i];
    }
  }
}

console.log(findFirstDuplicateValue(["a", "b", "c", "a"]));
