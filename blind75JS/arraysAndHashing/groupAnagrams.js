// Problem: https://leetcode.com/problems/group-anagrams/

// Brute Force Approach: ime O(N * (K * log(K))) | Space O(N * K)
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
