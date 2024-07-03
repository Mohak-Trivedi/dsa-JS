// Problem: https://leetcode.com/problems/squares-of-a-sorted-array/

// Brute Force Approach: TC: O(nlogn), SC: O(1)
// Update nums[i] with nums[i]**2, and then sort nums.
// (In case -ve integers are also given, the squared array is not in sorted array,
// so need to sort it).
// var sortedSquares = function(nums) {
//     let n = nums.length;

//     for(let i = 0;i < n;i++) {
//         nums[i] = nums[i] ** 2;
//     }

//     nums.sort((x, y) => x - y);

//     return nums;
// };

// Optimized Approach: TC: O(n), SC: O(n)
// Extreme 2-pointer
// We can avoid sorting as we know for sure that the largest square will be found
// at the end of array or at the beginning of array (if -ve value's square is 
// greatest) given that the provided array is sorted in ascending order.
// Can't do in-place with this algo, as it leads to loss of value, so need to 
// use a result array.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    // set the 2 pointers
    let n = nums.length;
    let left = 0;
    let right = n - 1;

    let result = Array(n);

    for(let i = n - 1;i >= 0;i--) {
        if(nums[left]**2 > nums[right]**2) {
            result[i] = nums[left]**2;
            left++;
        } else {
            result[i] = nums[right]**2;
            right--;
        }
    }
    
    return result;
};