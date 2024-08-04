// Problem: https://leetcode.com/problems/reshape-the-matrix/description/

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let rows = mat.length; // num of rows in given matrix
    let cols = mat[0].length; // num of cols in given matrix

    // invalid r and c
    if(r*c != rows*cols) return mat;

    // initialize empty result array
    let res = Array(r);
    for(let i = 0;i < r;i++) {
        let currRow = Array(c).fill(0);
        res[i] = currRow;
    }

    let row = 0, col = 0; // to track the current row and column
    for(let i = 0;i < rows;i++) {
        for(let j = 0;j < cols;j++) {
            res[row][col] = mat[i][j];

            col++;
            if(col == c) { // current row of res exhausted
                row++;
                col = 0;
            }
        }
    }

    return res;
};