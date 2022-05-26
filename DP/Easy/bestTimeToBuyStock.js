// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  let min = Math.min();
  let max = 0;
  for (let i of prices) {
    min = Math.min(min, i);
    max = Math.max(max, i - min);
  }

  return max;
};
