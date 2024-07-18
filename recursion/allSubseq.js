// Problem: Given a string of alphabets, print its all possible subsequences.
// Order doesn't matter.

// e.g. string: "abc", subsequences:
// "a", "ab", "ac", "abc", "b", "bc", "c", ""
// So subsequence = subset but retaining relative order of characters

// Logic:
// We notice, in each subsequence, we decide to include some and exclude some 
// characters. 
// Also, for a string of length n, total subsequences = 2^n
// Hence, for each ith character, we have to decide to include it i.e. prepend to all
// subsequences of str[i+1, n-1] and exclude it i.e. not prepend to all subsequences
// of str[i+1, n-1]
// e.g. for "abc":
// consider "a", now get all subsequence of "bc":
// "b", "bc", "c", ""
// include i.e. prepend "a" to all subsequences:
// "ab", "abc", "ac", "a"
// exclude "a" from all subsequences:
// "b", "bc", "c", ""

// f("abc", 0, "") must print all subsequences of "abc" starting 
// from index 0 to length of "abc".
// assume f("abc", 1, "") will print all subsequences of "abc" starting from 
// index 1 to length of "abc" i.e. all subsequences of "bc" appended to ""
// i.e. "b", "bc", "c", ""
// assume f("abc", 1, "a") will print all subsequences of "abc" starting from 
// index 1 to length of "abc" i.e. all subsequences of "bc" appended to "a"
// i.e. "ab", "abc", "ac", "a"
// Base case: When the 2nd argument reaches 3 we can print the subsequence and return.

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