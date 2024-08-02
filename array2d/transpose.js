// Problem: https://leetcode.com/problems/transpose-matrix/description/

// TC: O(m * n), SC: O(m * n)
// Since we don't just get square matrices as input, but can get rectangular also,
// we will go with the naive (extra space) approach:
// Create an empty col X row result matrix, where given matrix is of row X col dimension.
// Populate this by iterating over each element of given matrix using:
// result[col][row] = matrix[row][col]
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let result = Array(matrix[0].length);
    for(let i = 0;i < matrix[0].length;i++) {
        result[i] = Array(matrix.length);
    }

    for(let row = 0;row < matrix.length;row++) {
        for(let col = 0;col < matrix[0].length;col++) {
            result[col][row] = matrix[row][col];
        }
    }

    return result;
};

// If we could've got only square matrices as inputs:
// TC: O((m * n) / 2), SC: O(1)
// As the input matrix and the transpose would be of the same dimensions, the 
// indices would be deterministic, so we know for sure that we can do
// in-place swapping.
// NOTE: No need to iterate over elements before the main diagonal as it will
// lead to re-swapping and we will get back the original matrix instead of the 
// transpose.
// var transpose = function(matrix) {
//     for(let row = 0;row < matrix.length;row++) {
//         for(let col = row + 1;col < matrix[0].length;col++) {
//             let temp = matrix[row][col];
//             matrix[row][col] = matrix[col][row];
//             matrix[col][row] = temp;
//         }
//     }

//     return matrix;
// }