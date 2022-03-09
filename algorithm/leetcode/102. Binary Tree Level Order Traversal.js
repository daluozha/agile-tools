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



// 法一：dfs
var levelOrder = function(root) {
    if(!root) return []
    let result = []
    dfs(root, 0, result)
    return result
}

function dfs(node, step, result){
    if(node){
        if(!result[step]) result[step] = []
        result[step].push(node.val)
        dfs(node.left, step + 1, result)
        dfs(node.right, step + 1, result)
    }
}


// 法二：bfs
// var levelOrder = function(root) {
//     if(!root) return []
//     let queue = [root], result = []
//     while(queue.length){
//         let cursize = queue.length, arr = []
//         while(cursize){
//             let cur = queue.shift()
//             arr.push(cur.val)
//             cur.left && queue.push(cur.left)
//             cur.right && queue.push(cur.right)
//             cursize--
//         }
//         result.push(arr)
//     }
//     return result
// };
