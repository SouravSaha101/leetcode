// https://leetcode.com/problems/longest-common-prefix/

// The longest common prefix for a set of strings is the longest string that is the prefix for all of the strings in the set.
// For example, the longest common prefix for ["flower","flow","flight"] is "fl".

var longestCommonPrefix = function(strs) {
    for(let i = 0; i< strs[0].length; i++){
          for(let s of strs){
              if(s[i] !== strs[0][i]) return s.slice(0,i)
          }
      }
        return strs[0];
};