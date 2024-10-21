// Problem:
/*
Given a sorted array of non-negative distinct integers, find the smallest missing
non-negative element in it.

e.g.s:
[0, 1, 2, 6, 9] -> 3

[1, 2, 3, 6] -> 0

[0, 1, 2, 3, 4] -> 5
*/

function smallestMissing(arr) {
  // edge case 1: 0 can be the smallest non-negative missing integer and is easy
  // to check
  if (arr[0] !== 0) return 0;

  // edge case 2: no smallest non-negative missing integer found in array
  let ans = arr.length;

  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);

    if (arr[mid] === mid) {
      // since array is sorted with distinct non-negative integers, we can
      // conclude that if arr[mid] === mid, then no missing integers are
      // present in [0, mid] range.
      lo = mid + 1; // update search range to [mid + 1, hi]
    } else {
      // arr[mid] !== mid, so mid is a missing integer, but, we are not sure
      // that this is the SMALLEST missing or not.
      ans = mid; // Save the current as it has the potential
      hi = mid - 1; // Look for smaller missing non-negative numbers
    }
  }

  return ans;
}

console.log(smallestMissing([0, 1, 2, 3, 4]));
console.log(smallestMissing([1, 2, 3, 6]));
console.log(smallestMissing([0, 1, 2, 6, 9]));
