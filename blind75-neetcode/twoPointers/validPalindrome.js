// Problem: https://leetcode.com/problems/valid-palindrome/description/

// Brute Force Approach: TC: O(N), SC: O(N)
// Using Regex, filter and reverse.
var isPalindrome = function (s) {
  if (s.length === 1) return true;

  // Get the lowercase version of s without non-alphanumeric characters
  const alphaNumericStr = filterAlphaNumeric(s);

  // Get the reverse of the alphanumeric version of s
  const reversedStr = getReverse(s);

  // If reverse is same, the string is a valid palindrome.
  return alphaNumericStr === reversedStr;
};

// replace each non-alphanumeric character of the string with '' character
const filterAlphaNumeric = function (s) {
  let nonAlphaNumeric = new RegExp("[^a-z0-9]", "gi");

  return s.toLowerCase().replace(nonAlphaNumeric, "");
};

const getReverse = function (s) {
  return s.split("").reverse().join("");
};

// Optimized Approach: TC: O(N), SC: O(1)
// Using 2-pointers and no regex
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 1) return true;

  const isAlphaNumeric = (c) =>
    (c.toLowerCase() >= "a" && c.toLowerCase() <= "z") ||
    (c >= "0" && c <= "9");

  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (!isAlphaNumeric(s.charAt(left))) {
      left++;
      continue;
    }

    if (!isAlphaNumeric(s.charAt(right))) {
      right--;
      continue;
    }

    if (s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase())
      return false;

    right--;
    left++;
  }

  return true;
};
