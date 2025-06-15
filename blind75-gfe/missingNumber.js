// Problem: https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-find-missing-number-in-sequence

/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function findMissingNumberInSequence(numbers) {
  let expectedSum = 0;
  for(let i = 0;i <= numbers.length;i++) {
    expectedSum += i;
  }

  let actualSum = 0;
  for(let num of numbers) {
    actualSum += num;
  }

  const missingNum = expectedSum - actualSum;
  return missingNum;
}