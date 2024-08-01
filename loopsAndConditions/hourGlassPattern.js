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
    for(let row = 1;row <= n;row++) {
        let spaces = row - 1;
        let str = "";
        for(let i = 1;i <= spaces;i++) {
            str += " ";
        }

        for(let num = row;num <= n;num++) {
            str += num + " ";
        }

        console.log(str);
    }

    for(let row = 1;row < n;row++) {
        let spaces = n - row - 1;
        let str = "";
        for(let i = 1;i <= spaces;i++) {
            str += " ";
        }

        for(let num = n - row;num <= n;num++) {
            str += num + " ";
        }

        console.log(str);
    }
}

printPattern(7);