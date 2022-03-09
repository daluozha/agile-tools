/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum=0,leftSum=0
    nums.forEach(item=>{sum+=item})
    for(let i=0;i<nums.length;i++){
        if((sum-nums[i]-leftSum)===leftSum) return i
        else leftSum+=nums[i]        
    }
    return -1
};