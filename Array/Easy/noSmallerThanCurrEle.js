// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/

var smallerNumbersThanCurrent = function (nums) {
  let res = [];
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let count = 0;
    for (let j = 0; j < len; j++) {
      if (nums[i] > nums[j] && i != j) {
        count += 1;
      }
    }
    res.push(count);
  }
  return res;
};
