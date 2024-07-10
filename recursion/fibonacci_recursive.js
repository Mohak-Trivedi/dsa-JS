function f(n) {
    // Base Case: 0th and 1st Fibonacci terms are 0 and 1 respectively.
    if(n===0 || n===1) return n;

    return f(n - 1) + f(n - 2);
}

console.log(f(4));
// console.log(f(0));
// console.log(f(1));