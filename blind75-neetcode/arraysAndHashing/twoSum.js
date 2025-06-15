// Problem: https://leetcode.com/problems/two-sum/

// Brute Force Approach: TC: O(N^2), SC: O(1)
// For each number check if complement i.e. target - number, exists
// If it does return an array containing their indices
var twoSum = function (nums, target) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// Better Approach: TC: O(2N), SC: O(N)
// Hashmap - Double pass (first store all, then check)
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const complement = target - currNum;

    if (map.has(complement)) {
      const complementIdx = map.get(complement);

      return [i, complementIdx];
    }

    map.set(currNum, i);
  }
};

// Optimized Approach: TC: O(N), SC: O(N)
// Hashmap - Single Pass (first check, then store only if complement not present)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const complement = target - currNum;

    if (map.has(complement)) {
      const complementIdx = map.get(complement);

      return [i, complementIdx];
    }

    map.set(currNum, i);
  }
};
