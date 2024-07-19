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
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function separate(arr) {
    let i = 0;
    let j = arr.length - 1;

    while(i < j) {
        if(arr[i] === 1) {
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