// Problem: https://leetcode.com/problems/merge-sorted-array/description/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let result = [];
    let i = 0, j = 0, k = 0;
    while(i < m && j < n) {
        if(nums1[i] < nums2[j]) {
            result[k] = nums1[i];
            i++;
        } else {
            result[k] = nums2[j];
            j++;
        }
        k++;
    }

    while(i < m) {
        result[k] = nums1[i];
        i++;
        k++
    }

    while(j < n) {
        result[k] = nums2[j];
        j++;
        k++;
    }

    // nums1 = result; // this won't work as LeetCode expects only in-place changes
    for(let i = 0;i < nums1.length;i++) {
        nums1[i] = result[i];
    }
};