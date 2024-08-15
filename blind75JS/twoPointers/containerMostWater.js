// Problem: https://leetcode.com/problems/container-with-most-water/description/

// Brute Force: TC: O(N^2), SC: O(1)
// For each pair of heights, calculate container area and update maxArea.

// Optimized Approach: TC: O(N), SC: O(1)
// Extreme 2-pointer approach.
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let [left, right, maxArea] = [0, height.length - 1, 0];

  while (left < right) {
    let containerWidth = right - left;
    let containerHeight = Math.min(height[left], height[right]);
    let area = containerWidth * containerHeight;
    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};
