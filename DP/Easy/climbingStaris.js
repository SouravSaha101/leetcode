// https://leetcode.com/problems/climbing-stairs/

var climbingStairs = function (n) {
  if (n === 0 || n === 1) {
    return n;
  }

  const ar = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    ar[n] = ar[n - 1] + ar[n - 2];
  }
  return ar[n];
};
