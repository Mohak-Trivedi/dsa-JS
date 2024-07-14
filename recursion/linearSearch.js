function f(arr, i, target) {
    // Base Case
    if(i > arr.length - 1) return false;

    if(arr[i] === target) return true;

    return f(arr, i + 1, target);
}

console.log(f([1, 9, -1, 3, 8, 6], 0, 8));
console.log(f([1, 9, -1, 3, 8, 6], 0, 7));