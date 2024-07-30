// Problem: https://leetcode.com/problems/majority-element/description/

// Brute Force Approach: TC: O(N), SC: O(N)
// Create Frequency map and return the key having value > n/2

// Optimized Approach: TC: O(N), SC: O(1)
// Start with assuming 0th element as the majority element, and maintain frequency
// in single variable `count`.
// Iterate over the array starting from the 1st index and at each element, 
// if it is as per the assumed majority element, do count++, else do count--.
// If the count becomes 0, then the current element becomes the assumed majority
// element.
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majorEle = nums[0];
    let count = 1;

    for(let i = 1;i < nums.length;i++) {
        if(count === 0) {
            majorEle = nums[i];
        }

        if(nums[i] === majorEle) {
            count++;
        } else {
            count--;
        }
    }

    return majorEle;
};

// How are we sure that this always works?
// Because, for an element to be a majority element its count must be >n/2.
// So, it will ofcourse be able to take in all count-- and still have a +ve count
// at the end.