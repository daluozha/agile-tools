/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    // 法一
    // let n=matrix.length,m=matrix[0].length
    // const matrix_new = new Array(m).fill(0).map(() => new Array(n).fill(0))
    // for(let i=0;i<n;i++){
    //     for(let j=0;j<m;j++){
    //         matrix_new[j][i]=matrix[i][j]
    //     }
    // }
    // return matrix_new

    // 法二
    return matrix[0].map((_,idx)=>{return matrix.map(ele=>ele[idx])})
};