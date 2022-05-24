// https://leetcode.com/problems/reverse-only-letters/

var reverseOnlyLetters = function (s) {
  let low = 0;
  let high = s.length - 1;
  s = s.split("");
  while (low < high) {
    if (
      !(
        s[low].toLowerCase().charCodeAt() >= 97 &&
        s[low].toLowerCase().charCodeAt() <= 122
      )
    ) {
      low++;
    } else if (
      !(
        s[high].toLowerCase().charCodeAt() >= 97 &&
        s[high].toLowerCase().charCodeAt() <= 122
      )
    ) {
      high--;
    } else {
      [s[low], s[high]] = [s[high], s[low]];
      high--;
      low++;
    }
  }
  return s.join("");
};
