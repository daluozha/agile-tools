/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let arr = []
    inOrder(root, arr)
    if(arr.length < 2) return 0
    let result = arr[1] - arr[0]
    for(let i = 2 ;i < arr.length; i++) {
        result = Math.min(arr[i] - arr[i - 1], result)
    }
    return result
};

function inOrder(node, arr) {
    if(!node) return
    inOrder(node.left, arr)
    arr.push(node.val)
    inOrder(node.right, arr)
}

// todo 不同解法