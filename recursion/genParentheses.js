// Problem: https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let parentheses = [];

    function solution(curr, open, close) {
        if(curr.length === 2 * n) {
            parentheses.push(curr);
            return;
        }

        if(open < n) {
            solution(curr + '(', open + 1, close);
        }

        if(close < open) {
            solution(curr + ')', open, close + 1);
        }        
    }

    solution('', 0, 0);

    return parentheses;
};