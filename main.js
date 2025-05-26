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


/*
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
*/



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
    let rowString = '';
    for (let j = 0; j < matrix[i].length; j++) {
        rowString += matrix[i][j] + '\t';
    }
    console.log(rowString);
}



const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'Diana', age: 35 },
    { name: 'Eve', age: 30 },
    { name: 'Frank', age: 28 },
    { name: 'Grace', age: 25 },
    { name: 'Hannah', age: 41 },
    { name: 'Ivy', age: 30 },
    { name: 'Jack', age: 28 },
];

const counter = {}; // объект для подсчета кол-ва каждого возраста
// подсчет кол-ва каждого возраста
for (let i = 0; i < users.length; i++) {
    const age = users[i].age;
    if (counter[age]) {
        counter[age]++;
    } else {
        counter[age] = 1;
    }
}
for (const age in counter) {
    console.log(`Возраст=${age}. Количество людей=${counter[age]}`);
}



const mary = {
    name: 'Mary',
    wantApples: 2,
};
const alex = {
    name: 'Alex',
    wantApples: 1,
};
const mike = {
    name: 'Mike',
    wantApples: 5,
};
const brown = {
    name: 'Brown',
    wantApples: 4,
};
const people = [mary, alex, mike, brown];
const apples = 11;
const happy = [];
const notHappy = [];

let totalPeople = people.length;
// распределяем яблоки поровну
let applesPerPerson = Math.floor(apples / totalPeople);
// в цикле for of распределяем яблоки и определяем счастье
for (const person of people) {
    // каждому человеку достается applesPerPerson яблок
    person.eaten = applesPerPerson;
    // определяем, счастлив ли человек
    person.isHappy = person.eaten >= person.wantApples;
    // добавляем в соответствующий массив
    if (person.isHappy) {
        happy.push(person);
    } else {
        notHappy.push(person);
    }
}
console.log('Довольные:', happy);
console.log('Недовольные:', notHappy);



const user = {
    example: [1, 2, 3],
    'X-Address': {
        street: 'Ленина',
        house: '10-Б',
    },
    nickname: null,
    permissions: [true, false],
    age: 101,
    emails: ['alice@example.com', 'bob@example.com', 'charlie@example.com', 'peter@example.com'],
    name: 'Peter Charles',
    isAdult: true,
    now: new Date().toISOString(),
};
// инициализируем переменные для хранения максимальной длины и последнего элемента
let maxLength = 0;
let lastElement = null;
// перебираем все свойства объекта
for (const key in user) {
    const value = user[key];
    // проверяем, является ли значение массивом
    if (Array.isArray(value)) {
        // если текущая длина массива больше сохраненной, обновляем значения
        if (value.length > maxLength) {
            maxLength = value.length;
            lastElement = value[value.length -1];
        }
    }
}
// результат
console.log(`Максимальная длина: ${maxLength}. Последний элемент: ${lastElement}`);



