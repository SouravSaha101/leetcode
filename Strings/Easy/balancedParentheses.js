// https://leetcode.com/problems/valid-parentheses/

// Use stack to store the opening brackets.
// Pop the stack when we see a closing bracket.
// If the stack is empty, we know that the string is valid.

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