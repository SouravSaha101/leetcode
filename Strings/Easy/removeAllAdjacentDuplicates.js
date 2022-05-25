// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

var removeDuplicates = function (s) {
  let stack = [];

  for (let i of s) {
    let len = stack.length;
    stack[len - 1] === i ? stack.pop() : stack.push(i);
  }

  return stack.join("");
};
