/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    // 法一
    // return A.map(item=>item.map(ele=>+!ele).reverse())

    // 法二
    let row = A.length,column = A[0].length
    for(let i = 0;i < row;i++){
        for(let j = 0;j < column;j++){
            if(j < column/2) [A[i][j],A[i][column - j - 1]] = [A[i][column - j - 1],A[i][j]]
            A[i][j] = +!A[i][j]
        }
    }
    return A
};