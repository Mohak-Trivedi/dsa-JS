// Problem: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

// Brute Force Approach:
// TLE upon submission, because in constraints for this problem, we have:
// 3 * 10^4 as max length of array, leading to 10^9 operations/sec
// Didn't get TLE in twoSum.js because in its constraints, we had:
// 10^4 as max length of array, leading to 10^8 operations/sec
// var twoSum = function(nums, target) {
//     let n = nums.length;
//     for(let i = 0;i < n-1;i++) {
//         for(let j = i + 1;j < n;j++) {
//             if(nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };


// Optimized Approach:
// Using extreme 2-pointers, utilising the fact that the array is sorted.
// 10^4 operations/sec, so no TLE.
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let n = numbers.length;
    let i = 0;
    let j = n - 1;
    
    while(i < j) {
        if(numbers[i] + numbers[j] === target) {
            return [i + 1, j + 1];
        } else if(numbers[i] + numbers[j] < target) {
            i++;
        } else {
            j--;
        }
    }
};