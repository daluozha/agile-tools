/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
    let m=A.length,n=A[0].length
    let res=m*Math.pow(2,n-1)
    for(let i=1;i<n;i++){
        let sum=0;
        //不论行变化多少次，与首列元素的异或结果不变
        for(let j=0;j<m;j++) if(A[j][i]^A[j][0]) sum++
        res+=Math.max(sum,m-sum)*Math.pow(2,n-i-1)
    }
    return res
};