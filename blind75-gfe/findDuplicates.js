// Problem: https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-find-duplicate

/**
 * @param {number[]} numbers
 * @return {boolean}
 */
export default function findDuplicates(numbers) {
  const seen = new Set();

  for(let num of numbers) {
    if(seen.has(num)) {
      return true;
    }
    seen.add(num);
  }

  return false;
}