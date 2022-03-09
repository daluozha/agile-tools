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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return null;
    // 法一：
    // [root.left, root.right] = [root.right, root.left];
    // invertTree(root.left);
    // invertTree(root.right);
    // return root;

    // 法二：
    let queue = [root]
    let cur, tmp
    while(queue.length){
        cur = queue.shift()
        // [cur.left, cur.right] = [cur.right, cur.left]
        tmp = cur.left
        cur.left = cur.right
        cur.right = tmp
        cur.left && queue.push(cur.left)
        cur.right && queue.push(cur.right)
    }
    return root
};