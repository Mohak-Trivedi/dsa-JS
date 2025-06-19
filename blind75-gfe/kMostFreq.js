// Problem: https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-most-common-elements

// Optimized approach:
// TC: O(N), SC: O(N)
/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number[]}
 */
export default function mostCommonElements(numbers, k) {
  const freqMap = {};
  const n = numbers.length;

  for(let i = 0;i < n;i++) {
    freqMap[numbers[i]] = (freqMap[numbers[i]] || 0) + 1;
  }

  const buckets = Array(n + 1).fill(null).map(() => []);

  for(let num in freqMap) {
    const freq = freqMap[num];

    buckets[freq].push(Number(num));
  }

  const result = [];

  for(let i = buckets.length - 1;i >= 0 && k > 0;i--) {
    const bucket = buckets[i];
    if(bucket.length > 0) {
      for(let num of bucket) {
        result.push(num);
        k--;

        if(k === 0) break;
      }
    }
  }

  return result;
}