/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let arr=Array(n).fill(true),count=0
    for(let i=2;i*i<n;i++) if(arr[i]) for(let j=i*i;j<n;j+=i) arr[j]=false
    for(let k=2;k<n;k++) if(arr[k]) count++
    return count
};