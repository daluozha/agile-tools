/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows={},columns={},boxes={}
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            let num=board[i][j]
            if(num!=="."){
                let boxIndex=Math.floor(i/3)*3+Math.floor(j/3)
                if(rows[`${i}-${num}`]||columns[`${j}-${num}`]||boxes[`${boxIndex}-${num}`]) 
                    return false
                rows[`${i}-${num}`]=true
                columns[`${j}-${num}`]=true
                boxes[`${boxIndex}-${num}`]=true
            }
        }
    }
    return true
};