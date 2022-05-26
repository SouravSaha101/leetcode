// https://leetcode.com/problems/fibonacci-number/

// Normal Fibonacci series, current element is sum of previous two elements

var fib = function (n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

var fib = function (n) {
  if (n === 0 || n === 1) {
    return n;
  }
  let a = 0;
  let b = 1;
  let res = 0;
  for (let i = 2; i <= n; i++) {
    res = a + b;
    [a, b] = [b, res];
  }
  return res;
};

var fib = function (n) {
  if (n === 0 || n === 1) {
    return n;
  }
  let ar = [0, 1];

  for (let i = 2; i <= n; i++) {
    ar[i] = ar[i - 1] + ar[i - 2];
  }

  return ar[n];
};
