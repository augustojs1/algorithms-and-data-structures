const array = [1, 3, 5, 7, 8, 9];

function binarySearch(array, searchValue) {
  let lowerBound = 0;
  let upperBound = array.length - 1;

  while (lowerBound <= upperBound) {
    let midPoint = Math.floor((lowerBound + upperBound) / 2);

    if (array[midPoint] === searchValue) {
      return midPoint;
    } else if (array[midPoint] < searchValue) {
      lowerBound = midPoint + 1;
    } else {
      upperBound = midPoint - 1;
    }
  }

  return null;
}

console.log(binarySearch(array, 9));
