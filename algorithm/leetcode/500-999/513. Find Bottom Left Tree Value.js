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
 * https://leetcode.cn/problems/find-bottom-left-tree-value/
 */
// var findBottomLeftValue = function(root) {
//     const queue = [root]
//     let head = 0, tail = 1
//     let curSize = 0
//     let p
//     while(head < tail){
//         curSize = tail - head
//         for(let i = 0;i < curSize; i++){
//             p = queue[head++]
//             if(p.right) queue[tail++] = p.right
//             if(p.left) queue[tail++] = p.left
//         }
//     }
//     return p.val
// };

var findBottomLeftValue = function (root) {
    const queue = [root]
    let p
    while (queue.length) {
        p = queue.shift()
        if (p.right) queue.push(p.right)
        if (p.left) queue.push(p.left)
    }
    return p.val
};