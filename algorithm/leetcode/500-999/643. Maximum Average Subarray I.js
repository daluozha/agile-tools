/**
 * tag:滑动窗口
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let right=k-1,
        arr=nums.slice(0,k),
        result=-Infinity
    while(right<nums.length){
        let sum=0
        arr.forEach(item=>sum+=item)
        result=Math.max(result,sum/k)
        right++
        if(right<nums.length){
            arr.shift()
            arr.push(nums[right])            
        }
    }
    return result
};