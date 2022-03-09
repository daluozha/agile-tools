/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let i=0,arr=[],j
    while(i<s.length){
        j=i+1
        while(j<s.length&&s[j]==s[j-1]) s[i]==s[j]&&j++
        j-i>2&&arr.push([i,j-1])
        i=j
    }
    return arr
};