// Iterative
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

let arr = [4, -2, 6, -1, 0, 6, 2];
bubbleSort(arr);
console.log(arr);

// Partial Recursive
// Observe how bubble sort actually works:
// First the (n-1)th largest element gets bubbled to its correct sorted position
// Then the (n-2)th largest element gets bubbled to its correct sorted position
// Then the (n-3)th largest element gets bubbled to its correct sorted position
// .
// .
// .
// Then the (1)st largest element gets bubbled to its correct sorted position
// The 0th largest does not really need to get bubbled as it will automatically
// be at its correct sorted position after the remaining n-1 elements are bubbled
// to their correct sorted positions.
// Suppose we have a function f() that takes in:
// arr: array to be sorted with recursive bubble sort
// k: a number
// and it bubbles the kth largest element to its correct sorted position
// So, we need to call:
// f(arr, n-1)
// then f(arr, n-2)
// then f(arr, n-3)
// .
// .
// .
// then f(arr, 1)
// and for f(arr, 0) just return
function f(arr, k) {
  if (k === 0) return false;

  for (let idx = 0; idx < k; idx++) {
    if (arr[idx] > arr[idx + 1]) {
      let temp = arr[idx];
      arr[idx] = arr[idx + 1];
      arr[idx + 1] = temp;
    }
  }

  f(arr, k - 1);
}

arr = [4, -2, 6, -1, 0, 6, 2];
f(arr, arr.length - 1);
console.log(arr);
