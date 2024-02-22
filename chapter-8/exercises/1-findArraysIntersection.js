function findArraysIntersection(array1, array2) {
  let smallerArray;
  let largerArray;
  let intersection = [];
  let hashedKeys = {};

  if (array1.length > array2.length) {
    smallerArray = array2;
    largerArray = array1;
  } else {
    smallerArray = array1;
    largerArray = array2;
  }

  for (const value of largerArray) {
    hashedKeys[value] = true;
  }

  for (const value of smallerArray) {
    if (hashedKeys[value]) {
      intersection.push(value);
    }
  }

  return intersection;
}

const array1 = [1, 2, 3, 6, 5];
const array2 = [0, 2, 4, 6, 8, 1];
