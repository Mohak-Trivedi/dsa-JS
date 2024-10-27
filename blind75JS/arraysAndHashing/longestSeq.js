// Problem Link: https://leetcode.com/problems/longest-consecutive-sequence/description/

// For each element num:
// - if prevNum i.e num - 1 exists i.e. longest consecutive sequence doesn't
// start from it, then move to next num using continue
// - Since the longest consecutive sequence might start from it, consider it as
// currNum of current sequence and keep its score (length) as 1. And, keep increasing
// score as long as next number exists in array (use set.has() for faster search)
// After the next number is no longer present, update maxScore if required.
// - return maxScore

// Optimized Solution: TC: O(N), SC: O(N)
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let maxScore = 0;

  for (const num of [...set]) {
    const prevNum = num - 1;
    if (set.has(prevNum)) {
      continue;
    }

    let [currNum, score] = [num, 1];
    while (set.has(currNum + 1)) {
      score++;
      currNum++;
    }

    maxScore = Math.max(score, maxScore);
  }

  return maxScore;
};
