// https://leetcode.com/problems/missing-number/

var missingNumber = function (nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let sum = nums.reduce((acc, el) => (acc += el));

  return totalSum - sum;
};
