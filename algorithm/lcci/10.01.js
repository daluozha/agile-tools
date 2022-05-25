/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
 var merge = function(A, m, B, n) {
    let i = m - 1, j = n - 1
    while(i > -1 && j > -1){
        A[i + j + 1] = A[i] > B[j] ? A[i--] : B[j--]
    }
    while(j > -1){
        A[j] = B[j--]
    }
    return A
};