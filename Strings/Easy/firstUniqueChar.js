// https://leetcode.com/problems/first-unique-character-in-a-string/

var firstUniqChar = function (s) {
  let obj = {};

  for (let i of s) {
    obj[i] = (obj[i] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};
