// Given n and m, for an n X m grid, return number of possible way to travel from
// top-leftmost cell 0,0 to bottom-rightmost cell n-1,m-1 of the grid, such that
// from each cell, you can only either move to the right adjacent cell or the
// bottom adjacent cell.

// Assumption:
// Assume f(i, j+1, n, m) will give you the count of number of ways to travel from 
// the right adjacent cell to n-1,m-1 cell and assume that f(i+1, j, n, m) will give
// you the count of number of ways to travel from the bottom adjacent cell to 
// n-1,m-1 cell. Hence, number of ways to travel from current i.e. i,j cell to
// n-1,m-1 cell:
// f(i, j, n, m) = f(i, j+1, n, m) + f(i+1, j, n, m)

// Base Case:
// Once you reach the last cell i.e. when i===n-1 && j===m-1:
// return 1
// because you've reached the destination means, you have found 1 way to travel
// to it.

// Edge Case:
// While doing f(i, j+1, n, m) it's possible that j>=m
// While doing f(i+1, j, n, m) it's possible that i>=n
// Number of ways to reach from such an invalid cell to n-1, m-1 cell is 0
// So, return 0 for these cases.

function f(i, j, n, m) {
    // Base Case
    if(i === n-1 && j === m-1) {
        return 1;
    }

    // Edge case
    if(i >= n || j >= m) {
        return 0;
    }

    return f(i, j+1, n, m) + f(i+1, j, n, m);
}

console.log(f(0, 0, 3, 3));