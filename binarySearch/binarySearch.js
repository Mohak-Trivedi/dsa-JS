// Problem Link: https://leetcode.com/problems/binary-search/description/

// TC: O(logN), SC: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) {
      // remove left half of search space
      lo = mid + 1;
    } else {
      // remove right half of search space
      hi = mid - 1;
    }
  }

  return -1;
};
