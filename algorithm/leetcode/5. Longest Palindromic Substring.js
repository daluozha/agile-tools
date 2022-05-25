/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    // https://leetcode.cn/problems/longest-palindromic-substring/solution/by-alexyang-4bkr/
    let max = 0
    let maxStr = ''
    for(let i = 0; i < s.length; i++){
        let str = s[i]
        let left = i - 1
        while(s[i + 1] === s[i]){
            str += s[i]
            i++
        }
        let right = i + 1
        while(s[left] && s[left] === s[right]){
            str = s[left] + str + s[right]
            left--
            right++
        }
        if(str.length > max){
            max = str.length
            maxStr = str
        }
    }
    return maxStr
};