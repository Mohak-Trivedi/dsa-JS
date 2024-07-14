function f(str, i) {
    // Base Case
    if(i === str.length) return 0;

    let currDigNum = str.charAt(i) - '0';
    return currDigNum + f(str, i + 1);
}

console.log(f("1234", 0));