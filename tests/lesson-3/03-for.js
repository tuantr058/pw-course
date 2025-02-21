// 01 - Sum from 1 to 99
// function sum() {
//     let result = 0;
//     for (let i = 1; i <= 99; i++) {
//         result += i;
//     };
//     console.log(result);
// };
// sum();

// 02 - Multiplication table
// function multiplicationTable() {
//     for (let i = 2; i <= 9; i++) {
//         console.log(`Bảng cửu chương ${i}:`);
//         for (let j = 1; j <= 10; j++) {
//             console.log(`${i} x ${j} = ${i * j}`);
//         };
//         console.log('');
//     };
// };
// multiplicationTable();

// 03 - Array of odd numbers
// function oddArray() {
//     let arr = [];
//     for (let i = 1; i <= 99; i += 2) {
//         arr.push(i);
//     };
//     console.log(arr);
// };
// oddArray();

// 04 - User email
// function userEmail() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`user-${i}@mail.com`);
//     };
// };
// userEmail();

// 05 - Sum of revenues
function sumRev(arr) {
    let totalRev = 0;
    for (month in arr) {
        totalRev += arr[month].total;
    }
    console.log(totalRev);
};
revenues = [
    {'month': 1, 'total': 200},
    {'month': 2, 'total': 100},
    {'month': 3, 'total': 300},
    {'month': 4, 'total': 400},
    {'month': 5, 'total': 500},
    {'month': 6, 'total': 600},
    {'month': 7, 'total': 700},
    {'month': 8, 'total': 800},
    {'month': 9, 'total': 900},
    {'month': 10, 'total': 1000},
    {'month': 11, 'total': 1100},
    {'month': 12, 'total': 1200},
];
sumRev(revenues);