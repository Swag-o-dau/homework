// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку.
//  Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

function calculateFinalPrice(baseCost, discount, tax) {
    let finalPrice = baseCost - (discount / baseCost) * 100 + (baseCost - (discount / baseCost) * 100) * tax;
    return finalPrice;
}

console.log(calculateFinalPrice(100, 10, 0));

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль.
//  Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

function checkAccess(userName, password) {
    if (userName == "admin" && password == 123456) {
        console.log("Доступ разрешен");
    } else {
        console.log("Доступ запрещен");
    }
}

const userName = prompt("Введите имя пользователя: ");
const password = prompt("Введите пароль: ");

checkAccess(userName, password);

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

function getTimeOfDay(time) {
    if (0 <= time && time <= 5) {
        console.log("Ночь");
    } else if (6 <= time && time <= 11) {
        console.log("Утро");
    } else if (12 <= time && time <= 17) {
        console.log("День");
    } else if (18 <= time && time <= 23) {
        console.log("Вечер");
    } else {
        console.log("Некорректное время");
    }
}

const time = +prompt("Введите время: ");

getTimeOfDay(time);

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

function findFirstEven(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            return console.log(i);
        } else if (i % 2 !== 0) {
            if (i == end) {
                return console.log("Чётных чисел нет");
            } else {
                continue;
            }
        }
    }
}

const start = +prompt("Введите начальное число: ");
const end = +prompt("Введите конечное число: ");

findFirstEven(start, end);
