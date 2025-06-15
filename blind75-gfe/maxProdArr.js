// Problem: https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-maximum-product-contiguous

/**
 * @param {number[]} numbers
 * @return {number}
 */

// The algorithm works because zeros act as absolute barriers. Between any two zeros (or between a zero and an array boundary), we have a segment with no zeros.
// Within a Zero-Free Segment
// For any segment without zeros, here's the corrected reasoning:

// If the segment has an even number of negative numbers: The entire segment will have a positive product, so taking the whole segment (which is both a prefix and suffix of itself) is optimal.
// If the segment has an odd number of negative numbers: The entire segment has a negative product. The optimal subarray must exclude at least one negative number. The question is: which negative number should we exclude?

// If we exclude the first negative number and everything before it, we get a suffix
// If we exclude the last negative number and everything after it, we get a prefix
// The optimal choice between these two will be one of the prefixes or suffixes we compute

export default function maxProductSubArray(numbers) {
  let pre = 1, suff = 1, maxProduct = Number.NEGATIVE_INFINITY;
  const n = numbers.length;

  for(let i = 0;i < n;i++) {
    pre = (pre === 0) ? numbers[i] : pre * numbers[i];
    suff = (suff === 0) ? numbers[n - 1 - i] : suff * numbers[n - 1 - i];

    maxProduct = Math.max(maxProduct, Math.max(pre, suff));
  }

  return maxProduct;
}