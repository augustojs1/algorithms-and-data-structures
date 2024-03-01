function totalNumberOfCharacters(array) {
  if (array.length === 1) {
    return array[0].length;
  }

  return (
    array[0].length + totalNumberOfCharacters(array.slice(1, array.length))
  );
}
