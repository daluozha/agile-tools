/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // 法一
    // return s.reverse()
    // 法二
    let left=0,right=s.length-1
    while(left<right){
        // [s[left],s[right]]=[s[right],s[left]]
        // left++
        // right--

        let tmp=s[left]
        s[left++]=s[right]
        s[right--]=tmp
    }
    return s
};