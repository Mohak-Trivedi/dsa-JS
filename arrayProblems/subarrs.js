// Problem: Given an array, print all possible subarrays.

function printSubarrays(arr) {
    let subarr = "";

    for(let i = 0;i < arr.length;i++) {
        for(let j = i;j < arr.length;j++) {
            subarr += arr[j] + " ";
            console.log(subarr);
        }
        subarr = "";
    }
}

printSubarrays([1, 2, 3, 4]);