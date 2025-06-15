// Problem: https://leetcode.com/problems/product-of-array-except-self/

// Notice that we aren't allowed to use / operator.

// Brute Force Approach: TC: O(N^2), SC: O(1) as ans[] used for output is not to be considered as extra space.
// At each element, calculate product of all left elements and right elements.
// Store this product at the same index of the output array.

// Better Approach: TC: O(N), SC: O(2N) -> O(N)
// 2 arrays:
// pre: pre[i] = product of [0,i] elements
// post: post[i] = product of [i,nums.length-1] elements
// output array:
// ans[i] = pre[i-1] * post[i+1]
// return ans

// Optimized Approach: TC: O(N), SC: O(1)
// At each point, we care only about latest prefix product and latest postfix product
// value, so no need to store the previous prefix and postfix product values.
// So, use variables instead of arrays:
// pre: product of all elements in range [0, i-1] i.e. product of all elements to left of current element
// post: product of all elements in range [i+1, nums.length-1] i.e. product of all elements to right of current element.
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let ans = Array(nums.length).fill(0);

  let pre = 1; // default prefix product for nums[0]
  for (let i = 0; i < nums.length; i++) {
    ans[i] = pre;

    pre *= nums[i]; // prefix product for nums[i+1]
  }

  let post = 1; // default postfix product for nums[nums.length - 1]
  for (let i = nums.length - 1; i >= 0; i--) {
    ans[i] *= post;

    post *= nums[i]; // postfix product for nums[i-1]
  }

  return ans;
};
