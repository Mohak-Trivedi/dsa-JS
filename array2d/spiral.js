// Problem: https://leetcode.com/problems/spiral-matrix/description/

// For almost each round of the spiral, you traverse in the order:
// Upper-most row, right-most column, lower-most row, left-most column.

// Once you traverse a row or column, you never traverse it 
// again. So, each time you traverse the:
// - upper-most row, you move to the adjacent lower row to be upper-most: start_row++
// - right-most col, you move to the adjacent left col to be right-most: end_col--
// - bottom-most row, you move to the adjacent upper row to be bottom-most: end_row--
// - left-most col, you move to the adjacent right to be left-most: start_col++ 

// We say we have traversed entire matrix in spiral order when we have visited
// each of the mXn elements. So, maintain a `count` to track the same.
/*
while(count < m*n) {
    // traverse start row
    // start row ++

    // traverse end col
    // end col --

    // traverse last row
    // end row --

    // traverse start col
    // start col ++
}
*/

// The above approach will pass for [[1,2,3], [4,5,6], [7,8,9]], but fail in some
// other cases. For e.g.: 
// Input matrix =
// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output
// [1,2,3,4,8,12,11,10,9,5,6,7,6]
// Expected
// [1,2,3,4,8,12,11,10,9,5,6,7]
// After printing the start row of the second iteration, all the elements of the
// matrix have been traversed in a spiral order. Ideally, we should've stopped here
// but since there's no check for `count` in between an iteration of the spiral,
// we end up further ignoring travelling the end col, but do travel the end row,
// leading to that extra 6 here, and then we don't travel the start col, and then
// in the `count` check before the third iteration of spiral, we detect traverse 
// completion and stop.
// Hence, we should, have `count` checks not just between iterations of spirals
// but also between traversal of each row and col.

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let result = [];

    let start_row = 0;
    let end_row = m - 1;
    let start_col = 0;
    let end_col = n - 1;

    let count = 0;
    while(count < m * n) {
        // traverse start row 
        for(let i = start_col;i <= end_col;i++) {
            result.push(matrix[start_row][i]);
            count++;
        }
        start_row++;
        if(count >= m * n) break;

        // traverse last col
        for(let i = start_row;i <= end_row;i++) {
            result.push(matrix[i][end_col]);
            count++;
        }
        end_col--;
        if(count >= m * n) break;

        // traverse last row
        for(let i = end_col;i >= start_col;i--) {
            result.push(matrix[end_row][i]);
            count++;
        }
        end_row--;
        if(count >= m * n) break;

        // traverse start col
        for(let i = end_row;i >= start_row;i--) {
            result.push(matrix[i][start_col]);
            count++;
        }
        start_col++;
        if(count >= m * n) break;
    }

    return result;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));