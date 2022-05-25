/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = [],len = nums.length,n = 0
    while(n < len){
        // 在本岗位一直帮元素找到自己的家，直到本岗位找到自己的元素才退役，下一位上岗
        if(nums[n] === n + 1){
            n++
            continue
        } 
        let idx = nums[n] - 1
        if(nums[n] === nums[idx]){
            n++
            continue
        } 
        [nums[n],nums[idx]] = [nums[idx],nums[n]]
    }
    for(let i = 0;i < len;i++){
        if(nums[i] !== i + 1) result.push(i + 1)
    }
    return result
};