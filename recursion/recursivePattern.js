// Problem: Given n, print n rows, such that ith row has i number of stars
function f(n, row) {
    if(row > n) return;

    let str = "";
    for(let i = 1;i <= row;i++) {
        str += "*";
    }
    console.log(str);

    f(n, row + 1);
}

f(5, 1);