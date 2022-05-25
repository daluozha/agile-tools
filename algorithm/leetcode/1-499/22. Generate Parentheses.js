/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = []
    function dfs(left,right,str){
        if(left == n && right == n) return result.push(str)
        if(left < right) return
        if(left < n) dfs(left + 1,right,str + '(')
        if(right < left) dfs(left,right + 1,str + ')')
    }
    dfs(0,0,'')
    return result

    // todo dp
};