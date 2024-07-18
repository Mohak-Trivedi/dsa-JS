// Problem: Given a string of alphabets, print its all possible subsequences.

// e.g. string: "abc", subsequences:
// "a", "ab", "ac", "abc", "b", "bc", "c", ""
// We notice, in each subsequence, we decide to include some and exclude some 
// characters. 
// Also, for a string of length n, total subsequences = 2^n
// Hence, for each ith character, we have to decide to include it i.e. prepend to all
// subsequences of str[i+1, n-1] and exclude it i.e. not prepend to all suq


function f(str, i, output) {
    // base case
    if(i === str.length) {
        console.log(output);
        return;
    }

    // include
    f(str, i+1, output+str[i]);

    // exclude
    f(str, i+1, output);
}

f("abc", 0, "");