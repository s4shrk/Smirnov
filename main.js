const number = Math.floor(Math.random() * (15 - 3 + 1)) + 3;
if (number % 3 === 0 && number % 5 === 0) {
    console.log(number + ' => FizzBuzz');
} else if (number % 3 === 0) {
    console.log(number + ' => Fizz');
} else if (number % 5 === 0) {
    console.log(number + ' => Buzz');
} else {
    console.log(number + ' => Не Fizz и не Buzz');
}



const year = Math.floor(Math.random() * ((2120 - 1980) / 10 + 1)) * 10 + 1980;
let isLeap;
if (year % 4 !== 0) {
    isLeap = false;
} else if (year % 100 !== 0) {
    isLeap = true;
} else if (year % 400 === 0) {
    isLeap = true;
} else {
    isLeap = false;
}
console.log(year + (isLeap ? ' — високосный год' : ' — не високосный год'));