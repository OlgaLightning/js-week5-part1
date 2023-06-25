//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.

const currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.

const currentYear = currentDate.getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.

const currentMonth = currentDate.getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.

const currentDay = currentDate.getDay();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.

const birthday = new Date('2023-08-02');
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.

const futureDate = new Date('2023-09-01');
console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate

const timeDiff = futureDate - currentDate;
const daysToGo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
console.log(daysToGo);

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.

const pastDate = new Date('2023-06-20');
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate

const pastDiff = currentDate - pastDate;
const daysPast = Math.floor(pastDiff / (1000 * 60 * 60 * 24));
console.log(daysPast);

//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.

const nextWeek = new Date('2023-06-30');
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek
const dayNum = nextWeek.getDay();
const nextWeekDay = (dayNum === 5) ? 'Friday' : 'Another day of the week';
console.log(nextWeekDay);

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.

const futureYear = currentDate.getFullYear() + 5;
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.

const futureDateInFutureYear = new Date('2024-08-02')
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом

const yearDiff = futureYear - currentYear;
console.log(`Разница между текущим годом и ${futureYear} годом - ${yearDiff} лет`);

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.

const strDate = '2023-06-15T08:30:00.000Z';
const newDate = new Date(Date.parse(strDate));
console.log(newDate);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.

newDate = Date.parse(strDate);
console.log(newDate);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else

const date = '2023/06/15';
const wrongDate = Date.parse(date);
if (wrongDate == NaN) {
    console.log('Неправильный формат даты');
} else {
    console.log('Правильный формат даты');
}

//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;

if (number => 0) {
    console.log(`${number} is a positive number`);
} else {
    console.log('You\'ve inserted a negative number');
}

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.

if (number % 2 === 0) {
    console.log(`${number} is an even number`);
} else {
    console.log(`${number} is an odd number`);
}

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.

if (number % 3 === 0) {
    console.log(`${number} кратно 3`);
} else {
    console.log(`${number} не кратно 3`);
}

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.

if (number >= 0 && number <= 9) {
    console.log(`${number} однозначное число`);
} else {
    console.log(`${number} неоднозначное число`);
}

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.

if (number >= 10 && number <= 99) {
    console.log(`${number} двузначное число`);
} else {
    console.log(`${number} не двузначное число`);
}

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.

if (number > 0) {
    console.log(`${number} является положительным числом`);
} else if (number == 0) {
    console.log(`${number} является нулём`);
} else {
    console.log(`${number} является отрицательным числом`);
}

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.

if (number % 5 === 0) {
    console.log(`${number} является кратным 5`);
} else if (number % 7 === 0) {
    console.log(`${number} является кратным 7`);
} else {
    console.log(`${number} не является кратным 5 или 7`);

}

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.

if (number < 0) {
    console.log(`${number} является отрицательным числом`);
} else if (number == 0) {
    console.log(`${number} является нулём`);
} else {
    console.log(`${number} не является ни отрицательным числом, ни нулём`);
}

//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.

if (number >= 100 && number <= 999) {
    console.log(`${number} является трёхзначным положительным числом`);
} else if (number >= -100 && number <= -999) {
    console.log(`${number} является трёхзначным отрицательным числом`);
} else {
    console.log(`${number} является другим числом`);
}

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).

let todayIs = '';

switch (new Date().getDay()) {
    case 0:
        todayIs = "Sunday";
        break;
    case 1:
        todayIs = "Monday";
        break;
    case 2:
        todayIs = "Tuesday";
        break;
    case 3:
        todayIs = "Wednesday";
        break;
    case 4:
        todayIs = "Thursday";
        break;
    case 5:
        todayIs = "Friday";
        break;
    case 6:
        todayIs = "Saturday";
        break;
    default:
        day = "Unknown day of the week";
}

console.log(`Today is ${todayIs}`);

//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").
let direction = 'W';
let fullName;

switch (direction) {
    case 'N':
        fullName = "Север";
        break;
    case 'S':
        fullName = "Юг";
        break;
    case 'E':
        fullName = "Восток";
        break;
    case 'W':
        fullName = "Запад";
        break;
    default:
        fullName = "Направление не задано";
}

console.log(`Направление на ${fullName}`);
