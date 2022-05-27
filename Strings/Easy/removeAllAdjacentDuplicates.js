// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

// Use a stack to store the unique char, if the last element in stack is the same as current element, pop it else push it.

var removeDuplicates = function (s) {
  let stack = [];

  for (let i of s) {
    let len = stack.length;
    stack[len - 1] === i ? stack.pop() : stack.push(i);
  }

  return stack.join("");
};
