function alphabetSort(message) {
    let newStr = message.split("").sort().join("");
    return newStr;
}
console.log(alphabetSort('hello')); // should return 'ehllo'