// https://leetcode.com/problems/running-sum-of-1d-array/

let nums = [1, 2, 3, 4];
// Output: [1,3,6,10]

function runningSum(ar) {
  for (let i = 1; i < ar.length; i++) {
    ar[i] = ar[i] + ar[i - 1];
  }
  return ar
}

console.log(runningSum(nums));
