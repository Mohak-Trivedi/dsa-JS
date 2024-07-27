// Problem: https://leetcode.com/problems/single-number/description/

// Appraoch 1: Using Frequency Map: TC: O(N), SC: O(N)

// Approach 2: Using XOR: TC: O(N), SC: O(1) 
// Each number gets cancelled by getting XORred with its duplicate.
// Hence, the single number is the only one that remains.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0; // XOR identity
    for(let i = 0;i < nums.length;i++) {
        result ^= nums[i];
    }
    return result;
};
