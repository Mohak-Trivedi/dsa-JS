// Problem: https://leetcode.com/problems/maximize-distance-to-closest-person

// Brute Force Approach: TC: O(N), SC: O(N)
/**
 * @param {number[]} seats
 * @return {number}
 */
// var maxDistToClosest = function(seats) {
//     let left = []; // left[i] -> left closest person to ith seat
//     let right = []; // right[i] -> right closest person to ith seat

//     // form left[]
//     for(let i = 0;i < seats.length;i++) {
//         if(seats[i] === 1) {
//             left[i] = i;
//         } else {
//             if(i > 0)
//                 left[i] = left[i - 1];
//             else 
//                 left[i] = -Infinity;
//         }
//     }

//     // form right[]
//     for(let i = seats.length - 1;i >= 0;i--) {
//         if(seats[i] === 1) {
//             right[i] = i;
//         } else {
//             if(i < seats.length - 1)
//                 right[i] = right[i + 1];
//             else
//                 right[i] = Infinity;
//         }
//     }

//     // Get the maximized closest person distance
//     let ans = -1;
//     for(let i = 0;i < seats.length;i++) {
//         let leftDist = i - left[i]; // distance from left closest person
//         let rightDist = right[i] - i; // distance from right closest person
//         let closest = Math.min(leftDist, rightDist); // distance from closest person
//         ans = Math.max(ans, closest); // maximized distance from closest person
//     }

//     return ans;
// };

// Optimized Approach: TC: O(N), SC: O(1)
// Optimized Space. No need to keep arrays because:
// We use each element of array only once i.e. left[i] is used only to get
// distance of closest left person to i. So, no need to maintain an array.
// Simply maintain 2 variables : 
// left: left closest person to current (ith) seat
// right: right closest person to current (ith) seat
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let left = -Infinity; // left closest person to current seat
    let right = -Infinity; // right closest person to current seat
    let ans = -1; // max distance to closest person

    for(let i = 0;i < seats.length;i++) {
        if(seats[i] === 1) {
            left = i;
        } else {
            if(right < i) {
                right = i;
                while(right < seats.length && seats[right]!=1) {
                    right++;
                }

                // Edge case: No person to the right for >=ith seat
                // E.g.: seats = [1,0,0,0]
                if(right === seats.length) {
                    right = Infinity;
                }
            }

            let leftDist = i - left; // distance to left closest person
            let rightDist = right - i; // distance to right closest person
            let closest = Math.min(leftDist, rightDist); // distance to closest person
            ans = Math.max(ans, closest); // maximized distance to closest person
        }
    }

    return ans;
};