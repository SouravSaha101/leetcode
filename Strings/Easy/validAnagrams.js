// https://leetcode.com/problems/valid-anagram/

// Check length, if not equal, return false
// Use hashmap to store the char and its frequency
// if the frequency of the char in s is not equal to the frequency of the char in t, return false

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let obj = {};
  for (let i of s) {
    obj[i] = (obj[i] || 0) + 1;
  }

  for (let i of t) {
    if (!obj[i]) return false;

    obj[i]--;
  }

  return true;
};
