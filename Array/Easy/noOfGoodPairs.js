// https://leetcode.com/problems/number-of-good-pairs/

// Use HashMap to store the count of each element in the array.

var numIdenticalPairs = function (nums) {
  let len = nums.length;
  let count = 0;
  let obj = {};
  for (let i = 0; i < len; i++) {
    let el = nums[i];
    if (obj[el]) {
      count += obj[el];
      obj[el] += 1;
    } else {
      obj[el] = 1;
    }
  }
  return count;
};
