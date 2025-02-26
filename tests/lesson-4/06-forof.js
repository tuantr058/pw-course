// 01 - Find the first and last index of given value
let nums = [1, 2, 3, 4, 3, 55, 23];
let target = 3;

let firstIndex = -1;
let lastIndex = -1;
let index = 0;

for (let num of nums) {
    if (num === target) {
        if (firstIndex === -1) {
            firstIndex = index;
        };
        lastIndex = index;
    };
    index++;
};
console.log('Vị trí đầu tiên của phần tử: ', firstIndex);
console.log('Vị trí cuối cùng của phần tử: ', lastIndex);

// 02 - Reverse string
/**
 * Solution 1 - use unshift()
 */
let str = 'Playwright';
let arr = [];
for (let char of str) {
    arr.unshift(char);
};
console.log(arr);

/**
 * Solution 2 - use reverse()
 */
let str = 'Playwright';
let arr = [];
for (char of str) {
    arr.push(char);
};
arr.reverse();
console.log(arr);

// 03 - Filter values
let nums = [0, 1, 2, 3, 1, 2, 4, 5, 8];
let count = {};

for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
};

for (let num of nums) {
    if (count[num] === 1) {
        console.log(num);
    };
};