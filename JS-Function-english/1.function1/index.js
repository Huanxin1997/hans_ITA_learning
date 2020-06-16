function reverseString(message){
    return message.split('').reverse().join('');
}
let result = reverseString('hello');
console.log(result); // should return 'olleh'