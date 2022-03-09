/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let resArr=[]
    if(numRows<0) return resArr
    for(let i=0;i<numRows;i++){
        let subArr=[]
        for(let j=0;j<=i;j++){
            if(j>0&&j<i) subArr.push(resArr[i-1][j-1]+resArr[i-1][j])
            else subArr.push(1)
        }
        resArr.push(subArr)
    }
    return resArr
};