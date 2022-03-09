/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let res=[],i=start=0
    while(i++<nums.length){
        if(nums[i]-nums[i-1]!==1){
            res.push(nums[start]+(i-start===1?'':'->'+nums[i-1]))
            start=i
        }
    }
    return res
};