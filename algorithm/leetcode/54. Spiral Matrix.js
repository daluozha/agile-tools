/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    // top,right,bottom,left 即为准备遍历的边界
    let top = 0,right = matrix[0].length - 1,bottom = matrix.length - 1,left = 0
        result = []

    // 以 → ↓ ← ↑ 为一轮遍历
    // 当上边界不超过下边界，左边界不超过右边界的时候进入下一轮遍历
    while(top <= bottom && left <= right){

        // 1.top向右遍历，起点是left，终点是right
        for(let i = left;i <= right;i++){
            // left，right改变的是列数；行数为top，for循环内不变
            result.push(matrix[top][i])
        }
        top++
        if(top > bottom) break

        // 2.right向下遍历，起点是top，终点是bottom
        for(let i = top;i <= bottom;i++){
            // top，bottom改变的是行数；列数为right，for内不变
            result.push(matrix[i][right])
        }
        right--
        if(left > right) break

        // 3.bottom向左遍历，起点是right，终点是left
        for(let i = right;left <= i;i--){
            result.push(matrix[bottom][i])
        }
        bottom--
        if(top > bottom) break

        // 4.left向上遍历，起点是bottom，终点是top
        for(let i = bottom;top <= i;i--){
            result.push(matrix[i][left])
        }
        left++
        if(left > right) break
    }
    return result
};