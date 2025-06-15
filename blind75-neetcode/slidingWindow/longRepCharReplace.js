// Problem: https://leetcode.com/problems/longest-repeating-character-replacement/description/

// Optimized Approach:
// l = 0, r = 0 , maxLen = 0
// Add s[r] in substring.
// As long as number of replacements required in current substring > k:
// - Shrink the window from left i.e. l++
// Now that number of replacements required in current substring <= k:
// Update maxLen if current substring is longer.
// Do the above steps for r: 0 -> s.length - 1
// return maxLen

// How to find the number of replacements required in the current substring?
// For a substring "ABA" and k = 2, we decide, we will replace 1 char B with A
// For a substring "AABAAC" and k = 2, we decide, we will replace 2 chars B and C with A
// Basically, we determine maxFreq and then replace the remaining (subStringLength - maxFreq)
// chars.
// To get the maxFreq, maintain a freqMap i.e. a frequency array. Each time you
// update the freqMap, check if maxFreq needs to be updated.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  if (s.length === 1) return 1;

  let l = 0,
    r = 0,
    maxLen = 0,
    maxFreq = 0;

  const freqMap = new Array(26).fill(0);

  while (r < s.length) {
    const currCharFreq = addRightFreq(s, r, freqMap);
    maxFreq = Math.max(maxFreq, currCharFreq);

    while (r - l + 1 - maxFreq > k) {
      subtractLeftFreq(s, l, freqMap);
      l++;

      maxFreq = 0;
      for (let i = 0; i < 26; i++) {
        maxFreq = Math.max(maxFreq, freqMap[i]);
      }
    }

    maxLen = Math.max(maxLen, r - l + 1);
    r++;
  }

  return maxLen;
};

// increments the frequency of s[r] in freqMap and returns that frequency
const addRightFreq = (s, r, freqMap) => {
  const char = s[r];
  const index = s[r].charCodeAt(0) - "A".charCodeAt(0);

  freqMap[index]++;

  return freqMap[index];
};

// decrements the frequency of s[l] in freqMap
const subtractLeftFreq = (s, l, freqMap) => {
  const char = s[l];
  const index = char.charCodeAt(0) - "A".charCodeAt(0);

  freqMap[index]--;
};
