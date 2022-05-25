/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    // 法一 执行用时：45.48%，内存消耗：96.67%
    return s.slice(n) + s.slice(0,n)

    // 法二 执行用时：96.22%，内存消耗：8.79%
    // let left = "",right = ""
    // for(let item of s){
    //     n-- > 0 ? right += item : left += item
    // }
    // return left + right
};