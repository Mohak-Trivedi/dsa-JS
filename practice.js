function matrixMul(matrix1, matrix2) {
  if (matrix1[0].length !== matrix2.length) {
    console.log(
      "Invalid matrices for computing product. The number of columns in matrix 1 must be equal to the number of rows in matrix 2"
    );
  }

  const matrix1rows = matrix1.length;
  const matrix1cols = matrix1[0].length;
  const matrix2cols = matrix2[0].length;
  const resultRows = matrix1rows;
  const resultCols = matrix2cols;
  const result = Array(resultRows);
  for (let row = 0; row < result.length; row++) {
    result[row] = Array(resultCols);
  }

  for (let row = 0; row < result.length; row++) {
    for (let col = 0; col < result[0].length; col++) {
      let product = 0;
      for (let i = 0; i < matrix1cols; i++) {
        product += matrix1[row][i] * matrix2[i][col];
      }
      result[row][col] = product;
    }
  }

  return result;
}

const matrix1 = [
  [1, 1],
  [2, 2],
  [3, 3],
];

const matrix2 = [
  [1, 1, 1],
  [2, 2, 2],
];

console.log(matrixMul(matrix1, matrix2));
