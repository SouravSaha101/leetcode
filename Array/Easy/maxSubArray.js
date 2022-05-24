// https://leetcode.com/problems/maximum-subarray/

let nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

var maxSubArray = function (nums) {
  let max = 0;
  let temp = nums[0];
  for (let i of nums) {
    let sum = max + i;
    max = Math.max(i, sum);
    if (max > temp) {
      temp = max;
    }
  }

  return temp;
};


console.log(maxSubArray(nums))