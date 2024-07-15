// Problem: Given an array, return true if it is sorted else return false.
// Solve using Recursion.

// Self-work:
// At ith index, check if it is <= its next element i.e. (i+1)th element.
// So, we have checked if arr[i, i+1] is sorted.

// Assumption:
// f(arr, i+1) will return true if the remaining array is sorted.
// So, we have also check if arr[i+1, arr.length-1] is sorted.

// In this manner, we have checked if entire array is sorted or not.

// Base case:
// An i+1 can lead us to arr.length-1 i.e. last element.
// i.e. we will have to check if [arr.length-1, arr.length-1] is sorted
// but it's just a single element.
// So, return true.

function f(arr, i) {
    // Base case: array of length 1 is always sorted
    if(i === arr.length - 1) {
        return true;
    }

    return ((arr[i] <= arr[i+1]) && (f(arr, i+1)));
}

console.log(f([2, 5, 7, 8], 0));
console.log(f([2, 1, 7, 8], 0));