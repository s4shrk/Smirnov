let tur = 'Добрый день!';
console.log(tur.length)
console.log(tur.toUpperCase());



let tir = 'добро'
const first = tir.charAt(0);
console.log(first);
const last = tir.charAt(4);
console.log(last);
let middle = 'обр';
console.log (first.toUpperCase(1) + middle + last.toUpperCase(1));



let milk = 'молоко';
console.log('В слове:', milk)
const firstO = milk.indexOf('о'); // 1-ая "о"
const lastO = milk.lastIndexOf('о'); // последняя "о"
console.log('Первая "о" это буква под номером -', firstO);
console.log('Последняя "о" это буква под номером -', lastO);



console.log(milk);
let bukvaY = milk.includes('у');
let bukvaM = milk.includes('м');
console.log('Есть ли "у"?', bukvaY);  // false
console.log('Есть ли "м"?', bukvaM);  // true



let hello = 'привет';
let veterinar = 'ветеринар';
console.log('Начинается ли слово "привет" с "вет"?')
console.log(hello.startsWith('вет')); // false
console.log('Начинается ли слово "ветеринар" с "вет"?')
console.log(veterinar.startsWith('вет')); // true



const test = 'this_is_an_example_string';
const words = test.split('_');
console.log(words);



const name = 'Ruslan';
const message = `Добро пожаловать, ${name}, благодарим за регистрацию!
Надеемся, Вам понравится`;
console.log(message);