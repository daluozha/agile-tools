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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return []
    let queue = [root], result = []
    while(queue.length){
        let cursize = queue.length, arr = []
        while(cursize){
            let cur = queue.shift()
            arr.push(cur.val)
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
            cursize--
        }
        result.push(arr)
    }
    return result.map(ret => ret[ret.length - 1])
};