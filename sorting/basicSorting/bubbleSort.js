// Implement Bubble Sort algo.

// Based on real-life bubbling. Large bubbles get bubbled up first and then the
// smallest one at the end.
// In Bubble Sort, we consider 2 subarrays within the array, unsorted array
// (initially entire array) on left and sorted subarray (initially empty) on right.
// In each iteration, the largest element from the unsorted subarray gets
// bubbled to the start of the sorted subarray.

// TC: O(N^2) for worst and average case, Omega(N) for best case, SC: O(1)
// Best case: Array is already started.

// Comparison-based, In-place, Stable sorting algorithm.
// It is swap-heavy.
// N^2 comparisons and N^2 swaps in worst case.

function bubbleSort(arr) {
  let n = arr.length;

  // Do bubbling for n-1 elements
  for (let iter = 1; iter <= n - 1; iter++) {
    let isSwapped = false; // to track if [0, n - 1 - iter] is already sorted

    // (n - 1 - iter, n - 1] is sorted range
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

let arr = [5, 4, 3, 2, 1];
bubbleSort(arr);
console.log(arr);
