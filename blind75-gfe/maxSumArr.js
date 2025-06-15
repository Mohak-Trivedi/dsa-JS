// Problem: https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-maximum-sum-contiguous

/**
 * @param {number[]} numbers
 * @return {number}
 */

/*
sum < 0 -> no point in continuing sub-array as it will be smaller as compared to starting a new subarray
*/

export default function maxSumSubArray(numbers) {
  let sum = 0, maxSum = Number.NEGATIVE_INFINITY;
  const n = numbers.length;

  for(let i = 0;i < n;i++) {
    if(sum < 0) {
      sum = numbers[i];
    } else {
      sum += numbers[i];
    }

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}
