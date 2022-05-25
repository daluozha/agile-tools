/**
 * tag:动态规划
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // 法一
    let sLen = s.length,tLen = t.length
    if(sLen > tLen) return false
    let p = 0,q = 0
    while(p < sLen && q < tLen){
        if(s[p] === t[q]) p++
        q++
    }
    return p === sLen

    // todo 法二：动态规划

};