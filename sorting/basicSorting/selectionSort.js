// Implement Selection Sort algo.

// TC: O(N^2), SC: O(1) in all cases.
// i.e. even if array is sorted, it will be O(N^2)

// Comparison-based, in-place, unstable sorting algorithm.
// Prefer to use this when you want to limit swaps.
// N^2 comparisons, N swaps in worst case.

// Algo:
// At each index i of array to be sorted, swap it with the minimum element in
// the range [i+1, arr.length-1].

// Given an array and index i, return the index from the range [i, arr.length-1]
// where the minimum value is present.
function getMinIndex(arr, i) {
  let minIndex = i;
  for (let idx = i + 1; idx < arr.length; idx++) {
    if (arr[idx] < arr[minIndex]) {
      minIndex = idx;
    }
  }
  return minIndex;
}

// Given an array arr, sort it in ascending order
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = getMinIndex(arr, i);

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
}

let arr = [3, 6, -1, 0, 4, -2];
selectionSort(arr);
console.log(arr);
