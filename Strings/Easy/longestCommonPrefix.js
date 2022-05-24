// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function(strs) {
    for(let i = 0; i< strs[0].length; i++){
          for(let s of strs){
              if(s[i] !== strs[0][i]) return s.slice(0,i)
          }
      }
        return strs[0];
};