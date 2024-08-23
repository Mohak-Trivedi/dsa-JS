// Problem: Given an array of N integers and a number K, return the Kth largest element.

// Brute Force Approach: TC: O(N^2), SC: O(1)
// Use Bubble Sort or Selection Sort.
// Then return arr[k-1]

// Optimized Approach: TC: O(N * K), SC: O(1)
// Modified Bubble Sort:
// Do bubbling for only the first K elements.
function bubbleSort(arr, k) {
  let n = arr.length;
  for (let iter = 1; iter <= k; iter++) {
    let isSwapped = false;
    for (let i = 0; i <= n - 1 - iter; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        isSwapped = true;
      }
    }
    if (isSwapped === false) return;
  }
}

let arr = [7, 1, 4, 6, 3];
let k = 2;
bubbleSort(arr, k);
console.log(arr[arr.length - k]);

// Most Optimized Approach: TC: O(N), SC: O(1)
// Using QuickSelect sort.
