// 01 - Khởi động Tàu Vũ trụ K12
let departurePlanet = 'Trái đất';
let mission = 'Khám phá Vũ trụ K12';
let crew = ['Trang', 'Châu', 'Tuấn', 'Thiên', 'Ánh', 'Vũ', 'Thông', 'Thanh'];

function launchShip(crew) {
    return `Chuẩn bị khởi động! Phi hành đoàn gồm: ${crew} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission}!`
};
console.log(launchShip(crew));

// 02 - Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
    return `Khoảng cách đến hành tinh là: ${speed * time} km`;
};
let speed = 1000;
let time = 24;
console.log(calculateDistance(speed, time));

// 03 - Hành tinh kỳ lạ
function convertTimeToHex(time) {
    return `Thời gian theo hệ thập lục phân là: ${time.toString(16)} giây`;
};
let decimalTime = 120;
console.log(convertTimeToHex(decimalTime));

// 04 - Khám phá kho báu
function decryptCode(code) {
    let result = '';
    for (let char of code) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        };
    };
    return result;
};
let code = 'K12 Challenge';
console.log('Mật mã là: ', decryptCode(code));

// 05 - Trở về Trái Đất
function returnToEarth() {
    console.log('Chuẩn bị trở về Trái Đất!');
};
returnToEarth();