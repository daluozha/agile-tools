/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map={},half=nums.length
    for(let num of nums){
        map[num]=(map[num]||0)+1
        if(map[num]>Math.floor(half/2)) return num
    }
};