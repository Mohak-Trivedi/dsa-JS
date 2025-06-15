// Problem: https://leetcode.com/problems/3sum/

// Optimized Approach: TC: O(N^2), SC: O(1)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b); // sort to be able to use 2-pointer approach as well as to get all the duplicates adjacent making it easier to prevent duplicate triplets

  let res = [];

  for (let i = 0; i <= nums.length - 3; i++) {
    const num = nums[i];

    if (num > 0) break; // not possible to form triplet of sum 0 for this and further elements as all of them are +ve numbers only.

    if (i > 0 && num === nums[i - 1]) continue; // avoid duplicate triplets. Same first number -> Same triplet

    let l = i + 1,
      r = nums.length - 1;
    while (l < r) {
      const threeSum = num + nums[l] + nums[r];

      if (threeSum < 0) {
        l++;
      } else if (threeSum > 0) {
        r--;
      } else {
        // found triplet
        res.push([num, nums[l], nums[r]]);

        l++;
        r--;

        while (l < r && nums[l] === nums[l - 1]) {
          // avoid duplicate triplets. Same first and second number -> same 3rd number -> same triplet
          l++;
        }
      }
    }
  }

  return res;
};
