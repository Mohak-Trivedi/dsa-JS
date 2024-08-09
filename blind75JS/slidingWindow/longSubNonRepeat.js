//Problem: leetcode.com/problems/longest-substring-without-repeating-characters/description/

// Brute Force Approach: TC: O(N^2), SC: O(N)
// From each index l, expand substring starting from l to end until you find non repeating char
// As soon as you get a repeating char, update maxLen if current substring is longest
// Do the above, for l 0 -> s.length-1
// Finally, return maxLen.
// NOTE: Use Set to store substring to find in O(1) if current char is already
// present (repeating) in current substring
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;

  for (let l = 0; l < s.length; l++) {
    const set = new Set(); // substring with non-repeating chars starting from l

    for (let r = l; r < s.length; r++) {
      if (set.has(s[r])) {
        // duplicate found in substring starting at l
        break; // substring starting with l can't be extended any further
      }

      // not a duplicate char
      set.add(s[r]); // extend current substring with current char
      maxLen = Math.max(maxLen, set.size); // update if current substring is longest
    }
  }

  return maxLen;
};

// Optimized Approach: TC: O(N), SC: O(N)
// After finding current s[r] to be already present (repeating) in current substring
// s[l, r], instead of starting r at next l s[l+1, r=l+1], just delete the repeating
// char from the substring by updating the window start i.e. l++ and removing s[l] from
// the set.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set(); // current window (substring) [l, r] length
  let l = 0; // current window (substring) start
  let maxLen = 0;

  for (let r = 0; r < s.length; r++) {
    // r : current char to expand current substring

    while (set.has(s[r])) {
      // Doing delete(s[r]) would might lead to breaking substring, so keep
      // deleting until you delete s[r]
      set.delete(s[l]);
      l++;
    }

    // Current char is not repeat char, so add it to current substring
    set.add(s[r]);

    // update if current substring is longest
    maxLen = Math.max(maxLen, set.size);
  }

  return maxLen;
};
