// Problem: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // Phase 1: Marking
    for(let i = 0;i < nums.length;i++) {
        let num = Math.abs(nums[i]); // getting original value in case used as marker
        let idx = num - 1; // marker index
        if(nums[idx] > 0) { // mark only if not marked already, else it will get unmarked as -(-)=+
            nums[idx] *= -1;
        }
    }

    // Phase 2: Finding the disappeared numbers using marks
    let result = [];
    for(let i = 0;i < nums.length;i++) {
        if(nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
};