// Problem: https://leetcode.com/problems/group-anagrams/

// Brute Force Approach: TC: O(N * (K * log(K))), SC: O(N * K), where N: number of strings, K: average number of characters in each string
// Using sorting and hashmap.
// Create Hashmap: Sorted word: array of anagrams of this sorted word
// Return array of all values of this hashmap
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  groupWords(strs, map);

  return [...map.values()];
};

var groupWords = function (words, map) {
  for (const original of words) {
    const sortedWord = reorder(original);
    const anagramsArr = map.get(sortedWord) || [];

    anagramsArr.push(original);
    map.set(sortedWord, anagramsArr);
  }
};

var reorder = function (str) {
  return str
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
};

// Optimized Approach: TC: O(N * K), SC: O(N * K)
// Using HashMap and frequency array.
// Create HashMap: Stringified Frequency Array: Array of strings having this frequency array
// Return array containing all the values of the hashmap.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  groupWords(map, strs);

  return [...map.values()];
};

var groupWords = function (map, words) {
  for (const original of words) {
    const hash = getHash(original);
    const values = map.get(hash) || [];

    values.push(original);
    map.set(hash, values);
  }
};

var getHash = function (str) {
  const freqArr = new Array(26).fill(0);

  for (const char of str) {
    const idx = getCode(char);
    freqArr[idx]++;
  }

  return freqArr.toString();
};

var getCode = (c) => c.charCodeAt(0) - "a".charCodeAt(0);
