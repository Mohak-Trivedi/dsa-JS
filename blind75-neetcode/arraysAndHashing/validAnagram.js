// Problem: https://leetcode.com/problems/valid-anagram/

// Approach 1: TC: O(s + t), SC: O(s)
// Using HashMap
// Create frequency map for string s.
// For each char of string t:
// - If it doesn't exist in freqMap, continue to next char.
// - If it exists, then decrement its frequency.
// For each key-value pair of freqMap:
// - If value is NOT 0, return false.
// - return true

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const freqMap = new Map();

  addFreq(freqMap, s);

  subtractFreq(freqMap, t);

  return checkFreq(freqMap);
};

const addFreq = (map, str) => {
  for (const char of str) {
    const freq = (map.get(char) || 0) + 1;

    map.set(char, freq);
  }
};

const subtractFreq = (map, str) => {
  for (const char of str) {
    if (!map.has(char)) continue;

    const freq = map.get(char) - 1;
    map.set(char, freq);
  }
};

const checkFreq = (map) => {
  for (const [char, freq] of map) {
    if (freq !== 0) return false;
  }

  return true;
};

// Approach 2: TC: O(NlogN), SC: O(N)
// Using Sorting
// If the sorted versions of s and t are same, then they are anagrams of each
// other, else not.
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  return reorder(s) === reorder(t);
};

var reorder = (str) => {
  str
    .split("")
    .sort((a, b) => a.localeCompare(b)) // localeCompare() for Unicode characters
    .join("");
};
