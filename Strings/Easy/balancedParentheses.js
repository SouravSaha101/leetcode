// https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {
  let obj = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  let stack = [];

  for (let i of s) {
    if (!obj[i]) {
      stack.push(i);
    } else {
      if (stack.pop() !== obj[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
ß