const height = 170;
const heightMod = height % 100;

const maxWeight = heightMod;
const minWeight = (heightMod * 8) / 10;
const perfectWeight = (heightMod  * 9) / 10;

console.log('Cân nặng lý tưởng: ' + perfectWeight + 'kg - Cân nặng tối đa: ' + maxWeight + 'kg - Cân nặng tối thiểu: ' + minWeight + 'kg');