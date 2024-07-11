function f(i, j, n, m) {
    // Base Case
    if(i === n-1 || j === m-1) {
        return 1;
    }

    // Edge case
    if(i >= n || j >= m) {
        return 0;
    }

    return f(i, j+1, n, m) + f(i+1, j, n, m);
}

console.log(f(0, 0, 3, 3));