function f(arr, i) {
    if(i === arr.length) return 0;

    return arr[i] + f(arr, i + 1);
}

console.log(f([3, 5, 2, 0, 8], 0));