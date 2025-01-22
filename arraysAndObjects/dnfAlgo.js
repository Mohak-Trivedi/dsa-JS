// Problem:
// Given an array containing only 0s and 1s. The data is shuffled randomly.
// Write a function that can rearrange the data such that all the 0s are
// present before all the 1s.
// Do this without creating any new array, and you may access each element only
// once i.e. do it in a single pass.

// Approach 1:
// Maintain 2 variables:
// countOne and countZero
// Iterate over array and increment countOne each time you encounter 1, similarly
// update countZero.
// Then again iterate over array such for countZero times insert 0, then countOne
// times insert 1.
// But, we are unable to do it in a single pass here, so can't use this approach.

// Approach 2:
// arr[0, i-1] i.e. on left of ith element: all 0s
// arr[j+1, n-1] i.e. on right of jth element: all 1s
// arr[i, j] i.e. from i to j: unsorted i.e. mixture of 0s and 1s
// Now for each element in arr[i, j], we need to put it before i (if 0) or
// after j (if 1).
// So, if(arr[i] === 0), simply move i to its right so it autmatically falls in
// arr[0, i-1], else i.e. arr[i]===1, then swap it with arr[j] and now since we
// are sure that arr[j]===1, move j to left i.e. j-- so that this 1 automatically
// falls in arr[i+1, n-1]
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function separate(arr) {
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    if (arr[i] === 1) {
      swap(arr, i, j);
      j--;
    } else {
      i++;
    }
  }
}

let arr = [1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1];
separate(arr);
console.log(arr);

// Doubts on Approach 2:
// Why not do i++ and why just j-- after swapping arr[i] with arr[j] when arr[i]
// was found as 1?
// Answer:
// Because, we are sure that the value that moved from i to j was 1, but we are
// not sure whether the value that moved from j to i was 0 or not, if we would've
// been sure that it will always be 0 then we would've also moved i++, but that's
// not always the case.

// Why check only for i, why not also check if(arr[j]===1) j-- ?
// Answer:
// Well, we can do that as well. However, it is not really required and our algo
// works totally fine even without that additional condition.

// Note:
// We can also, make it j-based:
/*
while(i < j) {
    if(arr[j] === 1) {
        j--;
    } else {
        swap(arr, i, j);
        i++;
    }
}
*/
