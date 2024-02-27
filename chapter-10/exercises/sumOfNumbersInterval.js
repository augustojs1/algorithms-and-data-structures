function sumOfNumbersInterval(low, high) {
  if (low === high) {
    return low;
  }

  return high + sumOfNumbersInterval(low, high - 1);
}

console.log(sumOfNumbersInterval(0, 2));

// sumOfNumbersInterval(0, 0) = 0;
// sumOfNumbersInterval(0, 1) = 1;
// sumOfNumbersInterval(0, 2) = 3;
// sumOfNumbersInterval(0, 3) = 6;
// sumOfNumbersInterval(0, 4) = 10;
// sumOfNumbersInterval(0, 5) = 15;
