// Problem: https://leetcode.com/problems/max-consecutive-ones/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cnt = 0, maxCnt = 0;

    for(let i = 0;i < nums.length;i++) {
        if(nums[i] === 1) {
            cnt++;
        } else {
            maxCnt = Math.max(cnt, maxCnt);
            cnt = 0; 
        }
    }

    // Edge case: [1,1,0,1,1,1]
    if(nums[nums.length - 1] === 1) {
        maxCnt = Math.max(cnt, maxCnt);
    }
    
    return maxCnt;
};