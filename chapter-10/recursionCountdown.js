function countdown(number) {
  console.log(number);

  if (number === 0) {
    return;
  }

  countdown(number - 1);
}

countdown(10);
