function getAccessLevel(role) {
    let accessLevel;

    switch (role) {
        case 'user':
        case 'client':
            accessLevel = 1; // Уровень 1
            break;
        case 'admin':
        case 'manager':
            accessLevel = 2; // Уровень 2
            break;
        case 'superadmin':
            accessLevel = 3; // Уровень 3
            break;
        default:
            accessLevel = 0; // Неизвестная роль
            break;
    }

    return accessLevel;
}



/*
Напишите switch-case конструкцию, которая будет выводить в консоль лицо персонажа из мультфильма Sponge Bob,
  в зависимости от полученного в switch() имени.
Конструкция должна поддерживать следующих персонажей:
Слева имя персонажа, справа то, что должно вывестись

"spongebob" -> | ( · )( · ) |

"patrick"   -> / ( · )( · ) \

"squidward" -> ( ( · )( · ) )

"plankton"  -> | ( · ) |

"mr. Crabs" -> |·||·|

 */



function getCharacterFace(name) {
    switch (name.toLowerCase()) {
        case 'spongebob':
            console.log('| ( · )( · ) |');
            break;
        case 'patrick':
            console.log('/ ( · )( · ) \\');
            break;
        case 'squidward':
            console.log('( ( · )( · ) )');
            break;
        case 'plankton':
            console.log('| ( · ) |');
            break;
        case 'mr. crabs':
            console.log('|·||·|');
            break;
        default:
            console.log('Персонаж не найден.');
    }
}

getCharacterFace('mr. crabs'); // | ( · )( · ) |


function mapStatus(externalStatus) {
    let internalStatus;

    switch (externalStatus) {
        case 'approved':
            internalStatus = 'approved';
            break;
        case 'pending':
            internalStatus = 'pending';
            break;
        case 'moderation':
            internalStatus = 'pending';
            break;
        case 'waiting':
            internalStatus = 'pending';
            break;
        case 'declined':
            internalStatus = 'declined';
            break;
        case 'rejected':
            internalStatus = 'declined';
            break;
        case 'notaccepted':
            internalStatus = 'declined';
            break;
        default:
            internalStatus = 'pending'; // Значение по умолчанию
    }

    return internalStatus;
}

console.log(mapStatus('approved'));     // approved



const alex = {
    name: 'Alex',
    dateOfBirth: new Date('2024-05-15'),
};

const jake = {
    name: 'Jake',
    dateOfBirth: new Date('1970-01-01T00:00:00.000Z'),
};

const john = {
    name: 'John',
    dateOfBirth: new Date('2007-12-30T11:32:59.953+03:00'),
};

const bob = {
    name: 'Bob',
    dateOfBirth: new Date('2025-01-20T08:20:21.741Z'),
};

// Установим текущую дату на 20 января 2025 года
const currentDate = new Date('2025-01-20');

// Функция для вычисления возраста
function calculateAge(dateOfBirth, currentDate) {
    let age = currentDate.getFullYear() - dateOfBirth.getFullYear();
    const monthDifference = currentDate.getMonth() - dateOfBirth.getMonth();

    // Если день рождения еще не наступил в этом году, уменьшаем возраст на 1
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dateOfBirth.getDate())) {
        age--;
    }

    return age;
}

// Добавляем поле age в каждый объект
alex.age = calculateAge(alex.dateOfBirth, currentDate);
jake.age = calculateAge(jake.dateOfBirth, currentDate);
john.age = calculateAge(john.dateOfBirth, currentDate);
bob.age = calculateAge(bob.dateOfBirth, currentDate);

// Выводим каждый объект
console.log(alex);
console.log(jake);
console.log(john);
console.log(bob);



// соеденитель
const array = [1, 33, -10, 'example', 'word'];
const result = array.join('_');
console.log(result); // Вывод: "1_33_-10_example_word"



// история ник-неймов
const user = {
    name: 'Alex',
    nickname: 'Alexxx675',
    nicknameHistory: ['AlexLuk', 'Xela-123', 'Sasha 8'],
};

// Записываем текущий никнейм в историю и обновляем никнейм
user.nicknameHistory.push(user.nickname);
user.nickname = 'Sanya';

console.log(user);




// что выведет код?
--- Группа 1 ---
-5000
-5 [1]
3

--- Группа 2 ---
8
9
NaN
-170
NaN

--- Группа 3 ---
9
    [4,5,6]
5
NaN
3

--- Группа 4 ---
777
666
555



