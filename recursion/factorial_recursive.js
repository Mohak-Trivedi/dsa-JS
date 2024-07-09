function f(n) {
    // base case: 1! = 1
    if(n === 1) {
        return 1;
    }

    return n * f(n - 1);
}

console.log(f(5));
console.log(f(1));