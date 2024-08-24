// TC: O(N^2), Omega(N), SC: O(1)

// Camparison-based, In-place, Stable
// Not swap-heavy. But, more swap-heavy in comparison Selection Sort.

function insertionSort(arr) {
  // 0th index element is assumed to be already sorted.
  for (let i = 1; i < arr.length; i++) {
    let currEle = arr[i]; // so that arr[i] value isn't lost due to shifting
    let j = i - 1; // rightmost element of sorted subarray

    // perform right-shifting from sorted subarray until you find the correct
    // sorted position of currEle
    while (j >= 0 && arr[j] > currEle) {
      arr[j + 1] = arr[j];
      j--;
    }

    // found the correct sorted position as j+1 for currEle.
    arr[j + 1] = currEle;
  }
}

let arr = [6, 8, 3, 4, -1, -2, 0, 9, 2];
insertionSort(arr);
console.log(arr);
