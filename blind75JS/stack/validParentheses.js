// Problem: https://leetcode.com/problems/valid-parentheses/

// Optimized Approach: TC: O(N), SC: O(N)
// Using Stack and Map
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = [];

  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (const char of s) {
    const isBracket = char in map;
    if (!isBracket) {
      // opening bracket: just push in the stack
      stack.push(char);
      continue;
    }

    // closing bracket
    const isEqual = stack[stack.length - 1] === map[char];
    if (isEqual) {
      // closes the current open bracket, so just pop the current open bracket
      stack.pop();
      continue;
    }

    // does not close the current open bracket, so it is an invalid parenthesis
    return false;
  }

  // At this point, in case, opening brackets added were more, then false will be returned as
  // those can't be closed. Else, true.
  return stack.length === 0;
};
