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
