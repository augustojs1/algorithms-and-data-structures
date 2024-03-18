function fib(n, memo = {}) {
  if (n === 0 || n === 1) {
    return n;
  }

  if (!memo[n]) {
    memo[n] = fib(n - 2, memo) + fib(n - 1, memo);
  }

  return memo[n];
}
