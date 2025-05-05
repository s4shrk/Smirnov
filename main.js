// длина строки
const s4sha = "пример";
console.log(s4sha.length); // длина строки
console.log(s4sha.toUpperCase()); // строка в заглавном


// первый и последний символ строки
const slovo = "example";
const firstChar = slovo.charAt(0).toUpperCase();
const lastChar = slovo.charAt(slovo.length - 1).toUpperCase();
console.log(firstChar + slovo.slice(1, slovo.length - 1) + lastChar); // ExamplE


// поиск позиции символа
const milk = "молоко";
const firstO = milk.indexOf("о");
const lastO = milk.lastIndexOf("о");
console.log(`Первая 'о': ${firstO}, Последняя 'о': ${lastO}`);


// поиск вхождения символа
const milks = "молоко";
const hasU = milks.includes("у");
const hasM = milks.includes("м");
console.log(`Есть 'у': ${hasU}, Есть 'м': ${hasM}`);



// начало строки
const hello = ["привет", "ветеринар"];
const startsWithVet = hello.map(word => word.startsWith("вет"));
console.log(startsWithVet); // [false, true]



//разделитель
const text = 'this_is_an_example_string';
const result = text.split('_');
console.log(result); // [ 'this', 'is', 'an', 'example', 'string' ]



// шаблонные строки
const name = 'Ruslan';
const message = `
Добро пожаловать, ${name}, благодарим за регистрацию!
Надеемся, Вам понравится`;
console.log(message);



