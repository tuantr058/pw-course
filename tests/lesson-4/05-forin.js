// 01 - List out object's keys and values
let student = {'name': 'Alex', 'age': 10};
for (let stu in student) {
    console.log(stu, '=', student[stu]);
};

// 02 - Find sum of non-string keys
let student = {'name': 'Alex', 'age': 10, 'salary': 20};
let sum = 0;
for (let stu in student) {
    if (typeof student[stu] === 'number') {
        sum += student[stu];
    };
};
console.log(sum);

// 03 - New array contains only keys
let student = {'name': 'Alex', 'age': 10, 'salary': 20};
let arr = [];
for (let stu in student) {
    arr.push(stu);
};
console.log(arr);