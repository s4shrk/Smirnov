// Исходный массив чисел
const numbers = [100, -20, 30, 0, -50]; // замените на ваш массив

let positiveCount = 0;
let negativeCount = 0;

const skipIndex = numbers.length - 2;

for (let i = 0; i < numbers.length; i++) {
    //  предпоследний элемент
    if (i === skipIndex) {
        continue;
    }
    // положительные и отрицательные
    if (numbers[i] > 0) {
        positiveCount++;
    } else if (numbers[i] < 0) {
        negativeCount++;
    }
}
// результат
console.log(`Положительных: ${positiveCount}`);
console.log(`Отрицательных: ${negativeCount}`);



// Генерация случайного целого числа от 1 до 6
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}
// два рандомных числа
let num1 = getRandomNumber();
let num2 = getRandomNumber();
// счетчик попыток
let attempts = 1;
// цикл пока не выпадет дубль
while (num1 !== num2) {
    // обновляем оба числа
    num1 = getRandomNumber();
    num2 = getRandomNumber();
    // увеличиваем счетчик попыток
    attempts++;
}
// результат
console.log(`Количество попыток: ${attempts}`);
console.log(`Первое число: ${num1}`);
console.log(`Второе число: ${num2}`);



const word = "транскрипция";
// массив гласных букв русского алфавита ниж.
const vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
// объявляем счетчики
let vowelsCount = 0;
let consonantsCount = 0;
// перебираем каждую букву
for (let char of word) {
    // приводим букву к нижнему регистру для сравнения
    const lowerChar = char.toLowerCase();
    // проверяем является ли символ буквой русского алфавита
    if (lowerChar >= 'а' && lowerChar <= 'я' || lowerChar === 'ё') {
        if (vowels.includes(lowerChar)) {
            vowelsCount++;
        } else {
            consonantsCount++;
        }
    }
}
// результат
console.log(`Гласных букв: ${vowelsCount}`);
console.log(`Согласных букв: ${consonantsCount}`);



// исходный объект
const obj = {
    name: "Иван",
    age: 30,
    city: "Москва"
};

// массивы для ключей и значений
const keysArray = [];
const valuesArray = [];
// перебираем все свойства объекта с помощью цикла for in
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        // добавляем ключ в массив ключей
        keysArray.push(key);
        // добавляем значение в массив значений
        valuesArray.push(obj[key]);
    }
}
// выводим полученные массивы
console.log("Ключи:", keysArray);
console.log("Значения:", valuesArray);



