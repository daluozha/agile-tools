/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumbers = function(nums) {
    let map = {}
    for(let num of nums)
        map[num] = (map[num] || 0) + 1
    let arr = []
    for(let key in map)
        if(map[key] === 1) arr.push(key)
    return arr
};