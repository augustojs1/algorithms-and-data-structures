const array = [40, 10, 50, 20];

function insertionSort(array) {
  for (let index = 1; index < array.length; index++) {
    let tempValue = array[index];
    let position = index - 1;

    while (position >= 0) {
      if (array[position] > tempValue) {
        array[position + 1] = array[position];
        position = position - 1;
      } else {
        break;
      }
    }

    array[position + 1] = tempValue;
  }

  return array;
}

console.log(insertionSort(array));
