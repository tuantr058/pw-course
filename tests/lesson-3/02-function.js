// 01 - Sorts BMI
// function sortBMI(height, weight) {
//     let bmiIndex = weight / (height * height);

//     if (bmiIndex < 18.5 ) {
//         console.log('Thiếu cân');
//     };
//     if (bmiIndex >= 18.5 && bmiIndex < 25) {
//         console.log('Bình thường');
//     };
//     if (bmiIndex >= 25 && bmiIndex < 30) {
//         console.log('Thừa cân');
//     };
//     if ( bmiIndex >= 30) {
//         console.log('Béo phì');
//     };
// };
// sortBMI(1.7, 70);

// 02 - Temparature conversion
// function tempConvert(temp, measurement) {
//     if (measurement === 'F') {
//         console.log(result = temp * 9 / 5 + 32);
//     };
//     if (measurement === 'C') {
//         console.log(result = (temp - 32) * 5 / 9);
//     };
// };
// tempConvert(0, 'C');

// 03 - Sum of array's values
// function sumValue(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     };
//     console.log(sum)
// };
// sumValue([1, 2, 3, 4]);

// 04 - Find prime number
// function findPrimes(arr) {
//     let primes = [];

//     for (let num of arr) {
//         if (num < 2) {
//             continue;
//         };

//         let isPrime = true;
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 isPrime = false;
//                 break;
//             };
//         };
//         if (isPrime) {
//             primes.push(num);
//         };
//     };
//     console.log(primes);
// };
// findPrimes([2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 06 - Student average score
function calcAverage(studentScoreList) {
    let sumScore = 0;
    for (student in studentScoreList) {
        sumScore += studentScoreList[student]['score']
    };
    let averageScore = sumScore / studentScoreList.length;
    console.log(averageScore);
};
studentScoreList = [
    {'name': 'Alex', score: 85},
    {'name': 'Bryce', score: 100},
    {'name': 'Chase', score: 49}
];
calcAverage(studentScoreList);

// 07 - Is bigger than 0?
// function isBigger(productList) {
//     let found = false;

//     for (product in productList) {
//         if (productList[product]['price'] < 0) {
//             console.log(`Sản phẩm ${productList[product]['name']} có giá bé hơn 0`);
//             found = true;
//             break;
//         };
//     };
//     if (!found) {
//         console.log('Không có sản phẩm nào có giá bé hơn 0');
//     };
// };
// productList = [
//     {'name': 'product 1', price: 100},
//     {'name': 'product 2', price: -1},
//     {'name': 'product 3', price: 10}
// ];
// isBigger(productList);

// 08 - Store hours
// function storeHour(hour) {
//     if (hour >= 9 && hour < 21) {
//         console.log('Mở cửa');
//     };
//     if (hour < 9 && hour >= 21) {
//         console.log('Đóng cửa');
//     };
// };
// storeHour(10);

// 09 - Ticket price
// function ticketPrice(age) {
//     if (age < 6) {
//         console.log('Free');
//     };
//     if (age >= 6 && age < 18) {
//         console.log('50k');
//     };
//     if (age >= 18) {
//         console.log('100k');
//     };
// };
// ticketPrice(12);

// 10 - Print month's name
// function monthName(monthNumber) {
//     switch (monthNumber) {
//         case 1:
//             console.log('January');
//             break;
//         case 2:
//             console.log('February');
//             break;
//         case 3:
//             console.log('March');
//             break;
//         case 4:
//             console.log('April');
//             break;
//         case 5:
//             console.log('May');
//             break;
//         case 6:
//             console.log('June');
//             break;
//         case 7:
//             console.log('July');
//             break;
//         case 8:
//             console.log('August');
//             break;
//         case 9:
//             console.log('September');
//             break;
//         case 10:
//             console.log('October');
//             break;
//         case 11:
//             console.log('November');
//             break;
//         case 12:
//             console.log('December');
//             break;
//         default:
//             console.log('Số tháng không hợp lệ.');
//     };
// };
// monthName(4);

// 11 - Studen classify
// function gradesClassify(grade) {
//     if (grade >= 8) {
//         console.log('Giỏi');
//     };
//     if (grade < 8 && grade >= 6.5) {
//         console.log('Khá');
//     };
//     if (grade <= 6.5 && grade > 5) {
//         console.log('Trung bình');
//     };
//     if (grade < 5) {
//         console.log('Yếu');
//     };
// };
// gradesClassify(7.3);

// 12 - Temparature notification
// function tempNotification(temp) {
//     if (temp >= 30) {
//         console.log(`Nhiệt độ: ${temp} độ C - Nóng`);
//     };
//     if (temp >= 20 && temp < 30) {
//         console.log(`Nhiệt độ: ${temp} độ C - Mát`);
//     };
//     if (temp < 20) {
//         console.log(`Nhiệt độ: ${temp} độ C - Lạnh`);
//     };
// };
// tempNotification(30);