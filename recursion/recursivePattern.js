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
// function f(n, row, rowPattern) {
//     // Base Case
//     if(row > n) return;

//     console.log(rowPattern);
//     f(n, row+1, rowPattern + "*");
// }

// f(5, 1, "*");

// Follow up: The above solution is costly space-wise because strings are immutable
// in JS leading to formation of new string each time the function is called.
function f(n, row, col) {
    // Base Case
    if(row > n) return;

    // Current row over
    if(col > row) {
        console.log(""); // Print a newline character at the end of the row
        f(n, row + 1, 1); // start with next row
        return;
    }

    // self work
    process.stdout.write("*"); // print current row current column's *
    f(n, row, col + 1); // next column in this row
    return;
}

f(5, 1, 1);
