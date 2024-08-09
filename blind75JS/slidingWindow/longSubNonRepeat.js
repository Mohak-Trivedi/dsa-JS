//Problem: leetcode.com/problems/longest-substring-without-repeating-characters/description/

// Optimized Approach: TC: O(N), SC: O(1)
/**
 * @param {string} s
 * @return {number}
 */
https: var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let l = 0;
  let maxLen = 0;

  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    set.add(s[r]);
    maxLen = Math.max(maxLen, set.size);
  }

  return maxLen;
};
