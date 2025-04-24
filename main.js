/*// "Положительное или нет"
let num = Math.floor(Math.random() * 5) - 2;
console.log(`Сгенерировано число: ${num}`);
if (num > 0) {
    console.log("положительное");
} else if (num < 0) {
    console.log("отрицательное");
} else {
    console.log("null");
}


// Что делает этот код?
const age = Math.round(Math.random() * 90); // генерим рандом число, после 0.5 округляем вверх, например 85 (до 90)
console.log(`${age >= 18 ? '' : 'не'}совершеннолетний`) // если число 18 или более - совершеннолетний, если менее несовершеннолетний
// код нужен для проверки возраста
*/

/* let fullname = 'Alexander Adams';
let surname = '';

const newLine = '\n';

const threshold = 10;

if (fullname.length > threshold) {
    console.log(`У ${fullname} длинное имя, оно превышает ${threshold} знаков`, newLine);

    fullname.toUpperCase();

    const letter1 = 'M';
    if (fullname.indexOf(letter1) !== -1) {
        console.log(`Буква "${letter1}" найдена`);
    } else {
        console.log(`Буква "${letter1}" не найдена`);
    }

    const letter2 = 'R';
    if (fullname.toUpperCase().includes(letter2)) {
        console.log(`Буква "${letter2}" найдена`, newLine);
    } else {
        console.log(`Буква "${letter2}" не найдена`);
    }

    fullname = '              ';

    if (surname) {
        console.log(`Его фамилия: ${surname}`, newLine);
    } else {
        surname = 'Себастьянов';
    }
}

if (fullname.trim().length) {
    console.log(`Осталось имя: ${fullname}`, newLine);
} else {
    console.log('Имя пустое', newLine);
}

const start = 2;
const end = 5;

let index = start;
const phrase = surname.at(index++) + surname.at(index++) + surname.at(index++);

if (surname.slice(start, index) === phrase) {
    console.log(`"${phrase}" действительно лежит внутри "${surname}" между ${start} и ${end} символами`, newLine);
}

const star = '*';
const underscore = '_';
const count = 3 + Math.round(Math.random() * 3);

const prettified = `${star.repeat(count)}-${surname}-${star.repeat(count)}`;

console.log(prettified);
console.log(prettified.replaceAll(star, underscore));



Math.floor(Math.random() )*/

const g = 100+400;
console.log(g)
