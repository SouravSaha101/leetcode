// https://leetcode.com/problems/merge-sorted-array/

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

// Total length of nums1 and nums2 is m + n, so we can use the same array to store the result.

var merge = function (nums1, m, nums2, n) {
  let len = m + n - 1;
  n--;
  m--;
  while (n >= 0) {
    nums1[len--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
};
