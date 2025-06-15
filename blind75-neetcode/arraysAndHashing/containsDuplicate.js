// Problem: https://leetcode.com/problems/contains-duplicate/description/

// Brute Force: TC: O(N^2), SC: O(1)
// At each number, check if it had appeared at a previous index.
var containsDuplicate = function (nums) {
  for (let right = 0; right < nums.length - 1; right++) {
    let currEle = nums[right];

    for (let left = 0; left < right; left++) {
      let prev = nums[left];

      if (currEle === prev) return true;
    }
  }

  return false;
};

// Brute Force 2: TC: O(NlogN), SC: O(1)
// Sort the array, at each element check if its adjacent right element is a duplicate.
var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }

  return false;
};

// Optimized Approach: TC: O(N), SC: O(N)
// Using Frequency Map with JS Object.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let freqMap = {};

  for (let num of nums) {
    if (freqMap[num]) return true;

    freqMap[num] = 1;
  }

  return false;
};

// Same as above, but using Hash Set
var containsDuplicate = function (nums) {
  const numSet = new Set(nums);

  for (const num of nums) {
    if (numSet.has(num)) return true;

    numSet.add(num);
  }

  return false;
};
