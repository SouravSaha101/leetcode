// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/


// https://www.youtube.com/watch?v=J5IIH35EBVE

var sumOddLengthSubarrays = function(arr) {
    let res = 0
    let n = arr.length
    for(let i = 0; i<n; ++i){
        let total = i * (n-i) + (n-i);
        res += Math.ceil(total / 2) * arr[i];
    }
    
    return res
    
};