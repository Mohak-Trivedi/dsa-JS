// Given a positive integer N, count all possible distinct binary strings of 
// length N such that there are no consecutive 1’s.

// Solution:
// For length n = 1 : 0, 1 : 2
// For length n = 2 : 00, 01, 10 : 3
// For length n = 3 : 000, 001, 010, 100, 101 : 5
// For length n = 4 : 0000, 0001, 0010, 0100, 1000, 0101, 1001, 1010 : 8
// If you notice, we find a pattern:
// Count of binary strings w/o consecutive 1s of length n
// = Count of binary strings w/o consecutive 1s of length n-1 +
// Count of binary strings w/o consecutive 1s of length n-2

// Just like Fibonacci, Recurrence Relation:
// f(n) = f(n-1) + f(n-2)

// Base case:
// if n==1 return 2, if n==2 return 3 i.e. if n==1||n==2 return n+1

function f(n) {
    if(n==1 || n==2) return n + 1;

    return f(n-1) + f(n-2);
}


console.log(f(4));
console.log(f(5));
console.log(f(1));
console.log(f(2));