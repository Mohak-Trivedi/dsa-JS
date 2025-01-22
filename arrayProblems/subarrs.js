// Problem: Given an array, print all possible subarrays.

function printSubarrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    let subarr = "";
    for (let j = i; j < arr.length; j++) {
      subarr += arr[j];
      console.log(subarr);
    }
  }
}

printSubarrays([1, 2, 3, 4]);
