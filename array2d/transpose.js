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