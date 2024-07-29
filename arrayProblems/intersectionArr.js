// Problem: https://leetcode.com/problems/intersection-of-two-arrays/description/

// Brute Force Approach: TC: O(N^2), SC: O(1)
// Using nested for loop

// Optimized Approach: TC: O(N), SC: O(N)
// Using HashMap for fast access.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let freqMap1 = {};
    for(let num of nums1) {
        if(freqMap1[num]) {
            freqMap1[num]++;
        } else {
            freqMap1[num] = 1;
        }
    }

    let freqMap2 = {};
    for(let num of nums2) {
        if(freqMap1[num]) {
            freqMap2[num] = 1;
        }
    }

    return Object.keys(freqMap2);
};

console.log(intersection([1,2,2,1], [2,2]));
console.log(intersection([4,9,5], [9,4,9,8,4]));