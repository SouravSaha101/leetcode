// DP
// https://leetcode.com/problems/house-robber/

var rob = function (nums) {
  let rob1 = 0;
  let rob2 = 0;
  // [rob1, rob2, i , i+1, i+2]
  for (let i of nums) {
    let temp = Math.max(i + rob1, rob2);
    rob1 = rob2;
    rob2 = temp;
  }
  return rob2;
};
