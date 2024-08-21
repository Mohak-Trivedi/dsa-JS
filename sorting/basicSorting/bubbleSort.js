// Implement Bubble Sort algo.

// TC: O(N^2) for worst and average case, Omega(N) for best case, SC: O(1)
// Best case: Array is already started.

// Comparison-based, In-place, Stable sorting algorithm.
// It is swap-heavy.

function bubbleSort(arr) {
  for (let iter = 1; iter <= n - 1; iter++) {
    // Do bubbling for n-1 elements

    let isSwapped = false; // track if swapping done or not to prevent extra work
    // in case of already sorted array

    for (let i = 0; i < n - iter - 1; i++) {
      // [n - iter - 1, arr.length - 1] is sorted range.
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        isSwapped = true;
      }
    }

    if (isSwapped === false) break;
  }
}

let arr = [5, 4, 3, 2, 1];
bubbleSort(arr);
console.log(arr);
