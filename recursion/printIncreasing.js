// Given a number n, print the first n natural numbers in increasing order
// by using recursion such that the recursive function must have only one parameter.

function f(n) {
    // Base case: For no.s below first natural number, just return
    if(n < 1) {
        return;
    }
    
    f(n - 1); // go and print the lower natural numbers 
    console.log(n); // then print this upper natural number
}

f(8);