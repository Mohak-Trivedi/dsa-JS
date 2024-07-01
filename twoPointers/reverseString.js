// Problems: https://leetcode.com/problems/reverse-string/description/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // Place the 2 pointers
    let n = s.length;
    let i = 0;
    let j = n - 1;

    while (i <= j) {
        // swapping
        let temp = s[j];
        s[j] = s[i];
        s[i] = temp;

        // Move the 2 pointers and discard [0, i-1] and [j+1, n-1]
        i++;
        j--;
    }
};