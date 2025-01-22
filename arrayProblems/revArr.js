// Problem: Given an array, reverse it without creating a new array.

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function revArr(arr) {
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    swap(arr, i, j);
    i++;
    j--;
  }
}

let arr = [2, 4, 8, 6, 5];
revArr(arr);
console.log(arr);
