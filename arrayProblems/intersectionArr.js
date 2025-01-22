// Problem: https://leetcode.com/problems/intersection-of-two-arrays/description/

// Brute Force Approach: TC: O(N^2), SC: O(1)
// Using nested for loop

// Optimized Approach: TC: O(N), SC: O(N)
// 1. Each element of nums2 that is also in nums1, but not already in result, should be added to result.
// 2. To ensure fast membership test of a number in nums1, create a frequency map out of nums1.
// 3. To ensure storing only unique values of nums2, create a frequency map for nums2 elements that are also present in nums1.
// 4. Since we have to return an array, not a map, iterate over result map and move its keys
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let freqMap1 = {};

    for(let num of nums1) {
        freqMap1[num] = 1; // no need to store actual frequency, as are using map just for fast membership test
    }

    let resultMap = {};
    for(let num of nums2) {
        if(freqMap1[num]) {
            resultMap[num] = 1; // no need to store actual frequency, as we are using map just for its unique keys
        }
    }

    return Object.keys(resultMap).map(Number); // JS automatically converts object keys to String, so, convert them to Number as we want to return array of numbers.
};

console.log(intersection([1,2,2,1], [2,2]));
console.log(intersection([4,9,5], [9,4,9,8,4]));
