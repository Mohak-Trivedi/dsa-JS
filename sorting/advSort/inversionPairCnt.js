// Let A[0...n-1] be an array of n distinct positive integers. If i < j and
// A[i] > A[j] then the pair (i, j) is called an inversion of A. Given n and an
// array A, your task is to find the number of inversions of A.

// Brute Force:
//

// Optimized Approach:
let count = 0;

// Given 2 sorted arrays leftArr and rightArr, merge them in a sorted manner into
// a new array and return that sorted array.
function merge(leftArr, rightArr) {
  let result = [];

  let i = 0,
    j = 0;
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      result.push(leftArr[i]);
      i++;
    } else {
      count += leftArr.length - i;
      result.push(rightArr[j]);
      j++;
    }
  }

  // leftArr got exhausted first
  while (j < rightArr.length) {
    result.push(rightArr[j]);
    j++;
  }

  // rightArr got exhausted first
  while (i < leftArr.length) {
    result.push(leftArr[i]);
    i++;
  }

  return result;
}

// Creating this so that we need to pass only the array to mergeSort(), and then
// mergeSort can internally call this and return the sorted array returned by this.
function f(arr, i, j) {
  // Base Case: Subarray of length 1 is always sorted
  if (i === j) {
    let temp = [arr[i]];
    return temp;
  }

  // Get mid
  let mid = Math.floor((i + j) / 2);

  // Get first half sorted
  let leftArr = f(arr, i, mid);

  // Get second half sorted
  let rightArr = f(arr, mid + 1, j);

  // Get entire array sorted by merging the two sorted halves
  let result = merge(leftArr, rightArr);
  // Return the sorted array
  return result;
}

function mergeSort(arr) {
  return f(arr, 0, arr.length - 1);
}

let arr = [2, 3, 8, 6, 1];
arr = mergeSort(arr);
console.log(arr);
console.log(count);
