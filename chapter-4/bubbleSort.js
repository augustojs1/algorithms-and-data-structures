const array = [34, 90, 23, 50, 78];

function bubbleSort(array) {
  let unsortedUntilIndex = array.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i <= unsortedUntilIndex; i++) {
      if (array[i] > array[i + 1]) {
        let currentLeftSideValue = array[i];
        array[i] = array[i + 1];
        array[i + 1] = currentLeftSideValue;
        sorted = false;
      }
    }

    unsortedUntilIndex -= 1;
  }

  return array;
}

console.log(bubbleSort(array));
