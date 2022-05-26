// https://leetcode.com/problems/missing-number/

// Formula of sum of natural numbers upto n is n*(n+1)/2
// sum of array is sum of all elements in array
// sum of array - sum of natural numbers upto n is missing number

var missingNumber = function (nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let sum = nums.reduce((acc, el) => (acc += el));

  return totalSum - sum;
};
