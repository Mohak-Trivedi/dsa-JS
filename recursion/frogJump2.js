// Follow-up of "Frog Jump" question.
// In the previous question, the frog was allowed to jump either one or two steps 
// at a time. In this question, the frog is allowed to jump up to ‘K’ steps at a 
// time. 

function f(currStone, lastStone, k, heights) {
    // Base Case: lastStone to lastStone will require 0 cost
    if(currStone === lastStone) return 0;

    let result = Infinity;
    for(let i = 1;i <= k;i++) {
        if(currStone + i <= lastStone) {
            result = Math.min(result, Math.abs(heights[currStone + i] - heights[currStone]) + f(currStone + i, lastStone, k, heights));
        }
    }
    return result;
}

console.log(f(1, 6, 2, [undefined, 30, 10, 60, 10, 60, 50]));