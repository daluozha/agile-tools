/**
 * tag:滑动窗口
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let left=0,right=0,cost=0,result=0
    while(right<s.length){
        cost+=Math.abs(s[right].charCodeAt()-t[right].charCodeAt())
        right++
        while(cost > maxCost){
            cost-=Math.abs(s[left].charCodeAt()-t[left].charCodeAt())
            left++
        }
        result=Math.max(result,right-left)
    }
    return result
};