// Problem: https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-balanced-brackets

/**
 * @param {string} str
 * @return {boolean}
 */
export default function isBalancedBrackets(str) {
  const mappings = {
    ')' : '(',
    ']' : '[',
    '}' : '{'
  };

  const stack = [];

  for(let bracket of str) {
    if(mappings[bracket]) { // closing bracket
      if(stack.length === 0) { // no opening brackets present
        return false;
      }

      const openingBracket = stack.pop();
      if(openingBracket !== mappings[bracket]) { // opening bracket does not match closing bracket
        return false;
      }
    } else { // opening bracket
      stack.push(bracket);
    }
  }

  // if stack is not empty (no closing bracket for opening brackets) return false, else return true
  return stack.length === 0;
}