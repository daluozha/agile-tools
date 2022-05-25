/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var levelOrder = function(root) {
    if(!root) return [];
    // bfs
    let arr = [], queue = [root]
    while(queue.length){
        let cur = queue.shift()
        arr.push(cur.val)
        cur.left && queue.push(cur.left)
        cur.right && queue.push(cur.right)
    }
    return arr
};