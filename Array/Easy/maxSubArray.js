// https://leetcode.com/problems/maximum-subarray/

// Kadane’s algorithm is a simple algorithm for finding the maximum sum of a contiguous subsequence in an array.


let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// Output: 6

var maxSubArray = function (nums) {
  let max = 0;
  let temp = nums[0];

  for (let i of nums) {
    max = Math.max(i, i + max);
    temp = Math.max(temp, max);
  }
  return temp;
};

console.log(maxSubArray(nums));
