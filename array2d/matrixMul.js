// Problem: Given 2 matrices of dimensions mXn and nXk, return the product matrix.

function multiplyMatrices(mat1, m, n, mat2, k) {
    // Product matrix will be of mXk dimension
    let matProd = Array(m);
    for(let i = 0;i < m;i++) {
        matProd[i] = Array(k).fill(0);
    }

    for(let i = 0;i < m;i++) { // ith row out of m rows of matProd
        for(let j = 0;j < k;j++) { // jth col out of k cols of matProd

            for(let x = 0;x < n;x++) { // xth col out of n cols of mat1 and xth row out of n rows of mat2
                matProd[i][j] += mat1[i][x] * mat2[x][j];
            }

        }
    }

    return matProd;
}

let m1 = [[1,1], [2,2], [3,3]];
let m2 = [[5,5,5,5], [3,3,3,3]];
console.log(multiplyMatrices(m1, 3, 2, m2, 4));
