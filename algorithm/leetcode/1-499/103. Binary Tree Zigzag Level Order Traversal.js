/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root) return []
    let result = []
    dfs(root, 0, result)
    return result.map((arr, index) => index % 2 ? arr.reverse() : arr)
};

function dfs(node, step, result){
    if(node){
        if(!result[step]) result[step] = []
        result[step].push(node.val)
        dfs(node.left, step + 1, result)
        dfs(node.right, step + 1, result)
    }
}