/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if(coordinates.length==2) return true
    let x1=coordinates[0][0],
        y1=coordinates[0][1],
        a=coordinates[1][0]-x1,
        b=coordinates[1][1]-y1
    for(let i=2;i<coordinates.length;i++){
        if((coordinates[i][0]-x1)*b!==(coordinates[i][1]-y1)*a) return false
    }
    return true
};