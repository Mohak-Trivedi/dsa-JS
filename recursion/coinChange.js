// Problem: https://leetcode.com/problems/coin-change/description/ but ignore 
// the return -1 case in case of no combination found. 

function f(coins, amount) {
    if(amount === 0) return 0;

    let ans = Infinity;
    for(let i = 0;i < coins.length;i++) {
        if(amount - coins[i] < 0) continue;
        ans = Math.min(ans, 1 + f(coins, amount - coins[i]));
    }

    return ans;
}

console.log(f([1, 5, 7], 11));
console.log(f([1, 5, 7], 6));
console.log(f([1, 2, 5], 11));
console.log(f([2], 3));
console.log(f([1], 0));