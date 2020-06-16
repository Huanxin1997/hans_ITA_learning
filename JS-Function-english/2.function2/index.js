function palindrome(message) {
    // wirte your code here
    let reverseStr = message.split("").reverse().join("");
    return reverseStr == message;
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true