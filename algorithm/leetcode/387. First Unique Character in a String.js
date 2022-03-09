/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // 法一
    // for(let i=0;i<s.length;i++){
    //     if(s.indexOf(s[i])===s.lastIndexOf(s[i])) return i
    // }
    // return -1
    // 法二
    let map={}
    for(let i=s.length-1;i>=0;i--) map[s[i]]=(map[s[i]]||0)+1
    for(let j=0;j<s.length;j++) if(map[s[j]]===1) return j
    return -1
};