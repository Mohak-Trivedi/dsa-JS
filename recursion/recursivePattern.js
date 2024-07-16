// Problem: Given n, print n rows, such that ith row has i number of stars
// function f(n, row) {
//     if(row > n) return;

//     let rowPattern = "";
//     for(let i = 1;i <= row;i++) {
//         rowPattern += "*";
//     }
//     console.log(rowPattern);

//     f(n, row + 1);
// }

// f(5, 1);

// Follow up: Solve without using not even a single for-loop.
function f(n, row, rowPattern) {
    // Base Case
    if(row > n) return;

    console.log(rowPattern);
    f(n, row+1, rowPattern + "*");
}

f(5, 1, "*");