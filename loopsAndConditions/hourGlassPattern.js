/*
Given a number n, print an hour glass pattern.

e.g. n = 7

o/p:

1 2 3 4 5 6 7
 2 3 4 5 6 7
  3 4 5 6 7
   4 5 6 7
    5 6 7
     6 7
      7
     6 7
    5 6 7
   4 5 6 7
  3 4 5 6 7 
 2 3 4 5 6 7 
1 2 3 4 5 6 7
*/

function printPattern(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= i - 1; j++) {
      str += " ";
    }

    for (let num = i; num <= n; num++) {
      str += num + " ";
    }
    console.log(str);
  }

  for (let i = n - 1; i >= 1; i--) {
    let str = "";

    for (let j = 1; j <= i - 1; j++) {
      str += " ";
    }

    for (let num = i; num <= n; num++) {
      str += num + " ";
    }
    console.log(str);
  }
}

printPattern(7);
