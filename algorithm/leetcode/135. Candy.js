/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    if(!ratings || ratings.length===0) return 0
    let candyArr=new Array(ratings.length).fill(1)
    for(let i=1;i<ratings.length;i++) if(ratings[i-1]<ratings[i]) candyArr[i]=candyArr[i-1]+1
    for(let j=ratings.length-2;j>=0;j--) if(ratings[j]>ratings[j+1] && candyArr[j]<=candyArr[j+1]) candyArr[j]=candyArr[j+1]+1
    return candyArr.reduce((a,b)=>a+b,0)
};