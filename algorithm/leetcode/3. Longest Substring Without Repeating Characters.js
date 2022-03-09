/**
 * tag:滑动窗口
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 维护双指针
    // let left = 0,right = 0,len = s.length,max = 0,arr = null
    // while(right < len){
    //     arr = s.slice(left,right + 1)
    //     while(arr.indexOf(s[right]) !== arr.lastIndexOf(s[right])){
    //         left++
    //         arr = s.slice(left,right + 1)
    //     } 
    //     right++
    //     max = Math.max(max,right - left)
    // }
    // return max
    
    // 维护数组
    let arr = [],max = 0
    for(let item of s){
        while(arr.indexOf(item) >= 0) arr.shift() 
        arr.push(item)
        max = Math.max(max,arr.length)
    }
    return max
};