// Problem: https://www.geeksforgeeks.org/reduce-n-to-1-by-given-operations/

// Assumption:
// f(n/2) will give me min steps to reduce from n/2 to 1
// f(n/3) will give me min steps to reduce from n/3 to 1
// f(n-1) will give me min steps to reduce from n-1 to 1
// 1 step will be required to take either of the above 3 steps
// So, just return minimum of 1 + f(n/2), 1 + f(n/3), 1 + f(n-1)

// Base Case:
// n===1, 0 steps to reach from 1 to 1, so return 0

// Edge Case:
// n<1, return Infinity (Min identifier) as we want to ignore this step

function f(n) {
    // Base Case
    if(n === 1) return 0;

    // Edge Case
    if(n < 1) return Infinity;

    // Initialize with Min identifier value i.e. Infinity
    let ans1 = Infinity, ans2 = Infinity, ans3 = Infinity;

    if(n%2 === 0) {
        ans1 = 1 + f(n/2);
    }
    if(n%3 === 0) {
        ans2 = 1 + f(n/3);
    }
    ans3 = 1 + f(n - 1);
    
    return Math.min(ans1, Math.min(ans2, ans3));
}

console.log(f(10));
console.log(f(4));
console.log(f(1));