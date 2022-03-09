/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
    // 参考https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/solution/mian-shi-ti-26-shu-de-zi-jie-gou-xian-xu-bian-li-p/
    if(!A || !B) return false;
    return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)

    function dfs(a, b){
        if(!b) return true
        if(!a) return false
        if(a.val !== b.val) return false
        return dfs(a.left, b.left) && dfs(a.right, b.right)
    }
};