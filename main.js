/*
let cube1, cube2;
let attempts = 0;
do {
    cube1 = Math.floor(Math.random() * 6) + 1;
    cube2 = Math.floor(Math.random() * 6) + 1;
    attempts++;
    console.log(`Попытка ${attempts}: ${cube1} и ${cube2}`);
} while (cube1 !== cube2);
console.log(`Выпал дубль ${cube1} после ${attempts} попыток.`);



const numbers = [3, -1, 0, 5, -8, 12, -4, 7, -2];
let positiveCount = 0;
let negativeCount = 0;
for (let i = 0; i < numbers.length; i++) {
    if (i === numbers.length - 2) {
        continue;
    }
    if (numbers[i] > 0) {
        positiveCount++;
    } else if (numbers[i] < 0) {
        negativeCount++;
    }
}
console.log(`Положительных чисел: ${positiveCount}`);
console.log(`Отрицательных чисел: ${negativeCount}`);



const numbers = [1.2, -3, 4.7, 5.5, -2, 3.3, 7.9, 6.1, 8.4];
let positiveIndices = [];
// индексы всех положительных чисел
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveIndices.push(i);
    }
}
// индексы последних трёх положительных чисел
const skipIndices = new Set(positiveIndices.slice(-3));
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0 && !skipIndices.has(i)) {
        numbers[i] = Math.round(numbers[i]);
    }
}
console.log(numbers);
..//


const strings = ["яблоко", "банан", "груша", "слива", "персик"];
const halfIndex = Math.floor(strings.length / 2);
const secondHalf = strings.slice(halfIndex);
console.log(secondHalf);



const h = 5;
for (let i = 1; i <= h; i++) {
    const spaces = ' '.repeat(h - i);
    const stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
}

const matrix = [
    ['Id', 'Title', 'Description'],
    [1, 'Title-1', 'Description-1'],
    [2, 'Title-2', 'Description-2'],
    [3, 'Title-3', 'Description-3', 'Поле с багом'],
    [4, 'Title-4', 'Description-4'],
    [5, 'Title-5', 'Description-5'],
    [6, 'Title-6', 'Description-6', 'Поле с багом'],
];

for (let i = 0; i < matrix.length; i++) {
    let row = '';
    for (let j = 0; j < matrix[i].length; j++) {
        row += matrix[i][j] + '\t';
    }
    console.log(row);
}

*/



