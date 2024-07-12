// Problem: https://leetcode.com/problems/lexicographical-numbers/

// Assumption:
// f(i, n) will update arr[] with numbers from i to n having i as starting digit, 
// sorted in lexicographical order
// .e.g.: If n = 38, i = 2, then f(2, 38) will add the following numbers in arr[]:
// 2, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29
// Basically, f(2, 38) first pushes 2 to arr[] then calls: 
// f(20, 38), f(21, 38), f(22, 38), ..., f(29, 38)
// and assumes each of them will also work properly, that's how we get all numbers
// from 2 to n having 2 as the starting digit sorted in lexicographical order.
// Similarly, we must call not just for 2, but, from 1 to 9 as:
// 1 <= n <= 5 * 10^4

// We pass 0 as initial number instead of 1, as it is convenient from f(0, n) to
// call: f(1, n), f(2, n), f(3, n), ..., f(9, n) 
// as compared to passing 1 as initial number.

// Recurrence relation:
// For i = 1, we want to push 1 in arr[] and then call:
//  f(10, n), f(11, n), f(12, n), ..., f(19, n)
// Similarly for i = 2 to n, we want to push i in arr[] and then call:
// f(i * 10 + j, n) for all j in range [0, 9].
// But, for i = 0, we don't want to push it to arr[] and call:
// f(1, n), f(2, n), f(3, n), ..., f(9, n)
// i.e. f(i * 10 + j, n) for all j in range [1, 9] instead of [0, 9].

// Base Case:
// Consider n = 13, i = 1
// f(1, 13) [1] -> f(10, 13) [1, 10] -> f(100, 13) no need to push, just return 
// as i>n, whereas we want only 1 to n

/**
 * @param {number} n
 * @return {number[]}
 */

// declaring in global scope so that it is accessible in both functions
let arr;

function f(i, n) {
    // base case
    if(i > n) return;

    if(i != 0) {
        arr.push(i);
    }
    for(let j = (i==0 ? 1 : 0);j <= 9;j++) {
        f(i * 10 + j, n);
    }
}

var lexicalOrder = function(n) {
    arr = [];

    // instead of filling lexicalOrder(), create and use our own function as we 
    // want different signature ((i, n) instead of (n)) than lexicalOrder() 
    // provided by Leetcode.
    f(0, n);
    
    return arr;
};