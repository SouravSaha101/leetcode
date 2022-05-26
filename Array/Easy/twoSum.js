// https://leetcode.com/problems/two-sum/
let nums = [2, 7, 11, 15];
let target = 9;

// output = [1,0]
// Use hashmap to check if the current element is present in array

function twoSum(ar, k) {
  let obj = {};
  let len = ar.length

  for (let i =0 ;i <len; i++) {
    const el = ar[i]
    if (obj[k - el] != undefined) {
        return [i, obj[k - el]]
    }
    obj[el] = i
  }
}

console.log(twoSum(nums, target));
