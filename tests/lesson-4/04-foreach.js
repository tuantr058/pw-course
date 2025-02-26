// 01 - Print array's values
let nums = [1, 2, 3];
nums.forEach(num => {
    console.log(num)
});

// 02 - Find sum, max & min value of an array
let nums = [1, 5, 10];
let sum = 0;
let min = Infinity;
let max = - Infinity;
nums.forEach(num => {
    sum += num;

    if (num < min) {
        min = num;
    };

    if (num > max) {
        max = num;
    };

});
console.log('Tổng của mảng: ', sum);
console.log('Giá trị lớn nhất trong mảng: ', max);
console.log('Giá trị nhỏ nhất trong mảng: ', min);

// 03 - Crate 2nd array with double value
let nums = [1, 2, 3];
let nums2 = [];
nums.forEach(num => {
    nums2.push(num * 2);
});
console.log('Mảng mới: ', nums2);