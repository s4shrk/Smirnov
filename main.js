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
