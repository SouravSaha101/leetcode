// https://leetcode.com/problems/sort-colors/

// HOW TO SOLVE

// Take three variable to track the position of 0, 1, 2 in the array and use a while loop to swap the elements.
// One pointer to track the position of 0, one pointer to track the position of 1, and one pointer to track the position of 2.
// The while loop will stop when the two pointers meet.
// Elements to left of the two pointers are 0, and elements to right of the two pointers are 2.
// The elements in middle are 1.

// TIME COMPLEXITY - O(n)
// SPACE COMPLEXITY - O(1)



var sortColors = function (nums) {
  let count1 = 0;
  let count2 = 0;
  let count0 = 0;

  for (let i of nums) {
    if (i === 1) {
      count1 += 1;
    } else if (i == 0) {
      count0 += 1;
    } else {
      count2 += 1;
    }
  }
  let k = 0;
  while (count0) {
    nums[k++] = 0;
    count0--;
  }
  while (count1) {
    nums[k++] = 1;
    count1--;
  }
  while (count2) {
    nums[k++] = 2;
    count2--;
  }
};

var sortColors = function (nums) {
  let zero = 0;
  let one = 0;
  let two = nums.length - 1;

  while (one <= two) {
    if (nums[one] === 2) {
      swap(one, two);
      two -= 1;
    } else if (nums[one] === 0) {
      swap(zero, one);
      zero += 1;
      one += 1;
    } else {
      one += 1;
    }
  }
  function swap(a, b) {
    [nums[a], nums[b]] = [nums[b], nums[a]];
  }
};
