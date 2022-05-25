/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    // 只需判断当前(i,j)与(i+1,j+1)是否相等
    let row=matrix.length,column=matrix[0].length
    // 最后一行和最后一列可以直接跳过
    for(let i=0;i<row-1;i++)
        for(let j=0;j<column-1;j++)
            if(matrix[i][j]!==matrix[i+1][j+1]) return false
    return true
};