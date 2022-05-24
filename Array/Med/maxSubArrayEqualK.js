// https://leetcode.com/problems/subarray-sum-equals-k/

var subarraySum = function (nums, k) {
  let sum = 0;
  let count = 0;
  let obj = {
    0: 1,
  };
  for (let i of nums) {
    sum += i; 
    if (obj[sum - k] !== undefined) { 
      count += obj[sum - k]; 
    }
    obj[sum] = (obj[sum] || 0) + 1
  }

  return count;
};
