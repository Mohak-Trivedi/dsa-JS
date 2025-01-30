// Problem: Given a 2D array, print its element in the form of a wave.

/*
[[1,2,3,4], 
[5,6,7,8], 
[9,10,11,12], 
[13,14,15,16], 
[17,18,19,20]]

O/p:
1 5 9 13 17 18 14 10 6 2 3 7 11 15 19 20 16 12 8 4
*/

function printWave(arr) {
  let str = "";

  for (let col = 0; col < arr[0].length; col++) {
    if (col % 2 === 0) {
      for (let row = 0; row < arr.length; row++) {
        str += arr[row][col] + " ";
      }
    } else {
      for (let row = arr.length - 1; row >= 0; row--) {
        str += arr[row][col] + " ";
      }
    }
  }

  console.log(str);
}

const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];

printWave(arr);
