/**
 * @url https://leetcode-cn.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 法一
    // let map=new Map()
    // for(let i=0;i<nums.length;i++){
    //     let tmp=target-nums[i]
    //     if(map.get(tmp)) return [i,nums.indexOf(tmp)].sort((a,b)=>a-b)
    //     else map.set(nums[i],true)
    // }
    
    // 法二:暴力枚举
    let len=nums.length
    for(let i=0;i<len;i++) for(let j=i+1;j<len;j++) if(nums[i]+nums[j]==target) return [i,j]
};