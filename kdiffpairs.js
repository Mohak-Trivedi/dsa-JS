// Problem: https://leetcode.com/problems/k-diff-pairs-in-an-array/description/

// Naive Approach: TC: O(N^2), SC: O(1)
// Generate all possible pairs and increase count whenever k-diff pair found.
// Problems with this approach:
// 1. Can't prevent duplicate pairs
// 2. Works now because constraint for nums.length is 10^4 max, but if it were 
// 10^5, we would get TLE.

// Optimized Approach: TC: O(NlogN), SC: O(1)
// Not using extreme 2-pointers because it is not monotonic for difference.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    const n = nums.length;

    // Edge Case as per constraint
    if(n == 1) return 0;

    // To store the answer
    let count = 0;

    // Sort to use 2 pointer
    nums.sort((x, y) => x - y);

    // Set the 2-pointers
    let left = 0, right = 1;

    while(right < n) {
        // Edge case: nums = [1,3,1,5,4] k = 0
        if(left === right) {
            right++;
            continue;
        }

        let diff = Math.abs(nums[left] - nums[right]);
        if(diff == k) {
            count++;

            // move to next pair
            left++;
            right++;

            // ensure this next pair isn't duplicate
            while(nums[left]===nums[left-1] && left<n) {
                left++;
            }
            while(nums[right]===nums[right-1] && right<n) {
                right++;
            }
        } else if(diff < k) {
            right++;
        } else {
            left++;
        }
    }

    return count;
};