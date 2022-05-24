// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

var maxProduct = function(nums) {
    let max = 0
    let max2 = 0
    for(let i of nums){
        max2 = Math.max(max2,Math.min(i, max))
        max = Math.max(max, i)
    }
    
    return (max-1) *(max2-1)
};