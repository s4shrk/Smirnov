let a = Math.floor(Math.random() * 10) + 1; //сгенерили случайное число от 1 до 10
let area = a * a; // перемножили это число, узнали площадь
console.log(`Площадь квадрата со стороной "a" = ${a} равна ${area}`); // получили результат
// Площадь квадрата выше

// Площадь круга
let radius = Math.floor (Math.random() * 20) + 1;
let radius2 = radius * radius;
let circule = Math.PI * radius2;
circule = circule.toFixed(2);
console.log(`Площадь круга с радиусом "${radius}" = ${circule}`)

// Про яблоки
let cheloveki = Math.floor(Math.random() * 15) + 1;
let apples = Math.floor(Math.random() * 15) + 1;
let apple = Math.floor(apples / cheloveki);
let ostatok = apples % cheloveki;
console.log(`Если разделить ${apples} apple(S) на ${cheloveki} человек(а), то каждый получит по ${apple} apple(s), и останется ${ostatok} apple(s).`);


// Про парты
let classes = Math.floor(Math.random() * 30) + 1;
let peoples = Math.floor(Math.random() * 30) + 1;
let DesksInClass = Math.ceil(peoples / 2);
let Desks = classes * DesksInClass;
console.log(`Классов: ${classes}`);
console.log(`Учеников: ${peoples}`);
console.log(`Нужно купить парт: ${Desks}`);


// сравнить свои ответы перед запуском кода
let i = 0; // переменная i = 0 (ноль)
console.log('1:', i); // 1: 0
console.log('2:', i++); // 2: 0
console.log('3:', i); // 3: 1
console.log('4:', ++i); // 4: 2
console.log('5:', i); // 5: 2
console.log('6:', i--); // 6: 2
console.log('7:', i); // 7: 1
console.log('8:', --i); // 8: 0
console.log('9:', i); // 9: 0