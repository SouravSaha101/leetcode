// https://leetcode.com/problems/search-insert-position/

// Normal Binary Search
// if nums[mid] < target, then we know that the target is in the right half of the array so we need to search the right half of the array instead of the left half.
// if nums[mid] > target, then we know that the target is in the left half of the array so we need to search the left half of the array
// If the target is not found, the function returns low

var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
};
