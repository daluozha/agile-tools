/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // 法一
    // let row = matrix && matrix.length, column = matrix[0] && matrix[0].length
    // if(!row || !column) return false
    // for(let i = 0; i < row; i++){
    //     for(let j = 0; j < column; j++){
    //         if(matrix[i][j] === target) return true
    //     }
    // }
    // return false

    // 法二
    if(!matrix  || !matrix[0]) return false
    let row = matrix.length, 
        i = 0, j = matrix[0].length - 1
    while(i < row && j >= 0){
        if(matrix[i][j] === target) return true
        else matrix[i][j] > target ? j-- : i++
    }
    return false
};