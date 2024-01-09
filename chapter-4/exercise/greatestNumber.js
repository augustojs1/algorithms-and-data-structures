const array = [1, 3, 5, 2];

function greatestNumber(array) {
  let greatestValue = 0;

  for (let i = 0; i <= array.length; i++) {
    if (array[i] > greatestValue) {
      greatestValue = array[i];
    }
  }

  return greatestValue;
}

console.log(greatestNumber(array));
