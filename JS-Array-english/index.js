// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a instanceof Array);// false
console.log(b instanceof Array);// true

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (let i = 0; i < a.length; i++) {
    a[i] *= 2;
}
console.log(a);// [ 2, 4, 6, 8, 10 ]

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
function handleColorList(key) {
    let str = '';
    switch (key) {
        case 1:
            str = colors.join(" ");
            break;
        case 2:
            str = colors.join("+");
            break;
        case 3:
            str = colors.join(",");
            break;
        default:
            break;
    }
    return str;
}
console.log(handleColorList(1));
console.log(handleColorList(2));
console.log(handleColorList(3));

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
// 由大到小排序
console.log(a.sort(function(a, b) {
    return b - a;
}));

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
/**
 * 检索出现最频繁的元素
 * @param {*} arr 传入的数组
 */
function findMostFrequentElement (arr) {
    if (!arr.length) return;
    if (arr.length === 1) return arr[0];
    let res = {};
    let mostFreElement = '';
    let maxCount = 0;
    // 遍历数组
    arr.forEach(item => {
      res[item] ? res[item] += 1 : res[item] = 1
      if (res[item] > maxCount) {
        mostFreElement = item
        maxCount = res[item]
      }
    })
    return mostFreElement;
}
console.log(findMostFrequentElement(a));// 'a'