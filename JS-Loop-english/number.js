// 创建一个新的index.js文件并以任何方式编写循环来满足以下要求：从0到20，确定数字是奇数还是偶数，然后输出。输出如下：
// 1 is odd number.
// 2 is even number.
// 3 is odd number.
// ……
// 19 is odd number.
// 20 is even number.
let n = 1;
do {
    if(n % 2 == 0) {
        console.log(`${n} is even number.`);
    } else {
        console.log(`${n} is odd number.`);
    }
    n ++;
} while (n <= 20);