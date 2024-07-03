// Problem: https://leetcode.com/problems/3sum/

// Optimized Approach: TC: O(NlogN), SC: O(N)
// 1. Convert from finding triplets to pairs:
// We have find triplets of form (a, b, c) such that:
// a + b + c = 0
// Hence:
// a + b = -c
// So, for each c, we need to find a pair (a, b) such that:
// a + b == -c
// So, this is like 2sum.
// 2. Prevent Duplicates:
// We can't have duplicate triplets.
// 2 ways of getting duplicates:
// 2.1: Next c is same
// If the next c has same value, then the (a, b) pairs for it will be same, leading
// to same triplets.
// 2.2: Next (a, b) for current c are same
// Once you find (a, b) for current c, keep moving to next a and next b until
// you get a new (a, b)
Once, (a, b) found for c, while moving on to finding next (a, b) 
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let n = nums.length;
    nums.sort((x, y) => x - y);
    let result = [];

    for(let c = 0;c < n-2;c++) {
        if(c==0 || nums[c]!=nums[c-1]) { // to prevent causing duplicate triplets
            let target = -1 * nums[c];
            let i = c + 1;
            let j = n - 1;
            while(i < j) {
                if(nums[i] + nums[j] === target) {
                    result.push([nums[i], nums[j], nums[c]]);
                    i++;
                    j--;
                    // Skip duplicates for the second number
                    while(i < j && nums[i] == nums[i-1]) {
                        i++;
                    }
                    // Skip duplicates for the third number
                    while(i < j && nums[j] == nums[j+1]) {
                        j--;
                    }
                } else if(nums[i] + nums[j] < target) {
                    i++;
                } else {
                    j--;
                }
            }
        }
    }

    return result;
};