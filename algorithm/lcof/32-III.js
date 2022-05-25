/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root) return []
    let arr = [], queue = [root], count = 0
    while(queue.length) {
        let curArr = [], 
            curSize = queue.length
        count++
        for(let i = 0; i < curSize; i++){
            let cur = queue.shift()
            count % 2 ? curArr.push(cur.val) : curArr.unshift(cur.val)
            cur.left && queue.push(cur.left)
            cur.right && queue.push(cur.right)
        }
        arr.push(curArr)
    }
    return arr
};