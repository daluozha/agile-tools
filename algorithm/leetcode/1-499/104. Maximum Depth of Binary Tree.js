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
 * @return {number}
 */
var maxDepth = function(root) {
    // 法一：递归
    // if(!root) return 0
    // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1

    // 法二：bfs
    if(!root) return 0
    const queue = [root]
    let depth = 1
    while(queue.length){
        let curSize = queue.length
        // curSize 是本轮遍历内部二次遍历要运行的次数
        while(curSize){
            let cur = queue.shift()
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
            curSize--
        }
        queue.length && depth++
    }
    return depth
};