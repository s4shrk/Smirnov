/*
const a = 10; // присваиваем переменой "а" неизменное значение 10

if (a === 2 || 3) {
    console.log(-1);
} // "а" не равняется 2, значит false || 3 - true - ture, выводим "-1"

if (a === 2 || a === 3) {
    console.log(0);
} // false || false, ничего не выводим

if (10 % 1) {
    console.log(1);
} // 10 делится на 1, остаток будет "0" - это false, ничего не выводим

if (10 % 0) {
    console.log(2); // nan, false
} else if (10) {
    console.log(3); // true, выведем "3"
} else if (true) { // не проверяется, true был выше
    console.log(4);
}

let g = ''; //false, ибо пустая строка


if (g) { //не работает, ибо фолс
    console.log(5);
} else { // выводим 6
    console.log(6);
}

if (undefined) {
    console.log(7); //undefined это false
}

if ('0') { // 0 в строке это true
    console.log(8); // выводим 8
} else if ('') {
    console.log(9); // первое тру, остальные не чекаем
} else {
    console.log('a');
}

if (!'0') { //false, берем строку с elser
    console.log('b');
} else {
    console.log('c'); // выводим с
}

if (!!'' || !!0 || !!1) { // false false true -> true
    console.log('d'); // выводим d
}

if (undefined || false || '' || 0) { // all false
    console.log('e');
} else if (!false && (0 || '0')) { // true and true -> true
    console.log('f'); // выводим f, далее не чекаем
} else {
    console.log('g');
}
*/
const a = 0;
const b = 1;
let c;

console.log(a == '0' ? 'h' : 'i'); // h
console.log(!(a > b) ? 'j' : 'k'); // j
console.log(0 ? 'l' : 'm'); // m
console.log(!0 ? 'n' : 'o'); //n
console.log((null === undefined || 11 % 5) && (a > b || !!true) ? 'n' : 'o'); /* (false ||
1) and (false || true) = true and true = n */
console.log('abc' == 'ABC' ? 'p' : 'q'); // q
console.log('false' ? 'r' : 's'); // r
console.log('false' == false ? 't' : 'u'); // false - u
console.log(Number('one') ? 'v' : 'w'); // false - w
console.log(c ? 'x' : 'y'); // не совсем понял почему y - переменная не объявлена
/*console.log(null == undefined ? 'z' : '🫡'); выведет 🫡 */



