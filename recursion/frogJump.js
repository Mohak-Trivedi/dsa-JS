// Not the Leetcode Frog Jump problem. This is a simple recursion one.
// https://www.geeksforgeeks.org/minimum-cost-for-hopping-frog-to-reach-stair-n/

function f(currStone, lastStone, heights) {
    // Base Case: lastStone to lastStone will require 0 cost
    if(currStone === lastStone) {
        return 0;
    }

    // Edge Case: 2nd last stone, so can't go to currStone+2 as it doesn't exist
    if(currStone === lastStone - 1) {
        return Math.abs(heights[currStone] - heights[currStone + 1]) + f(currStone + 1, lastStone, heights);
    }

    return Math.min(
        Math.abs(heights[currStone] - heights[currStone + 1]) + f(currStone + 1, lastStone, heights), 
        Math.abs(heights[currStone] - heights[currStone + 2]) + f(currStone + 2, lastStone, heights)
    );
}


// test cases
console.log(f(1, 6, [undefined, 30, 10, 60, 10, 60, 50])); // undefined on 0th 
// index to facilitate 1-based indexing

console.log(f(1, 4, [undefined, 10, 30, 40, 20]));

console.log(f(1, 2, [undefined, 10, 10]));