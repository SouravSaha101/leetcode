// https://leetcode.com/problems/permutations/

// Backtracking

// Solve this problem with backtracking, and use a helper function to swap two elements in the array.
//

var permute = function (nums) {
  let res = [];
  let len = nums.length;
  function backtracking(idx) {
    if (idx === len - 1) {
      // use spread operator to copy the array
      return res.push([...nums]);
    } else {
      for (let i = idx; i < len; i++) {
        // do
        [nums[i], nums[idx]] = [nums[idx], nums[i]];
        // recursion
        backtracking(idx + 1);
        // undo
        [nums[i], nums[idx]] = [nums[idx], nums[i]];
      }
    }
  }

  backtracking(0);
  return res;
};
