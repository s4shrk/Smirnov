/* Исходный массив чисел
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



const people = [
    { id: 8, name: 'Александр', gender: 'm', age: 25 },
    { id: 12, name: 'Мария', gender: 'f', age: 22 },
    { id: 31, name: 'Иван', gender: 'm', age: 17 },
    { id: 34, name: 'Ольга', gender: 'f', age: 19 },
    { id: 53, name: 'Дмитрий', gender: 'm', age: 30 },
    { id: 95, name: 'Екатерина', gender: 'f', age: 21 },
    { id: 3, name: 'Сергей', gender: 'm', age: 18 },
    { id: 20, name: 'Анна', gender: 'f', age: 20 },
    { id: 19, name: 'Андрей', gender: 'm', age: 15 },
    { id: 30, name: 'Наталья', gender: 'f', age: 25 },
];
const result = {
    mans: [],
    women: [],
};
// проходим по всем людям
for (let i = 0; i < people.length; i++) {
    const person = people[i];
    if (person.gender === 'm' && person.age > 18) {
        // ужчина старше 18
        result.mans.push(person.name);
    } else if (person.gender === 'f' && person.age > 20) {
        // енщина старше 20
        result.women.push(person.name);
    }
}
console.log(result);
*/



const arr = [1.1 , 2.2, -2, 3.3, -1, 5.5, 5.99, 7.49, 7.9999, -2.2, -3];
// ищем все индексы положительных чисел
const positiveIndices = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveIndices.push(i);
    }
}
// берем последние три индекса
const lastThreePositiveIndices = positiveIndices.slice(-3);
// идем по массиву и округляем нужные числа
const result = arr.slice(); // создаем копию массива для изменений
for (let i = 0; i < result.length; i++) {
    if (result[i] > 0 && !lastThreePositiveIndices.includes(i)) {
        // если число положительное и не входит в последние три
        result[i] = Math.round(result[i]);
    }
}
console.log(result);



// задали высоту ёлки - 5
const h = 5
for (let i = 1; i <= h; i++) {
    // Кол-во пробелов перед звездочками
    const spaces = h - i;
    // Кол-во звездочек в текущей строке (2*i - 1)
    const stars = 2 * i - 1;
    // пробелы + звездочки
    const line = ' '.repeat(spaces) + '*'.repeat(stars);
    console.log(line);
}