// https://leetcode.com/problems/valid-anagram/

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
