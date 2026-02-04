// Задание 1.
// Дан массив пользователей:
const users = [
  { name: 'Alex', age: 24, isAdmin: false },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
]
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

users.push({ name: 'Ann', age: 19, isAdmin: false }, { name: 'Jack', age: 43, isAdmin: true })

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users),
//  которая возвращает средний возраст пользователей.

function getUserAverageAge(users) {
    let sum = 0;
    for (let i = 0; i < users.length; i++) {
        sum += users[i].age;
    }
    sum = sum / users.length;
    return sum;
}

console.log(getUserAverageAge(users))

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users),
//  которая возвращает массив всех администраторов.

function getAllAdmins(users) {
    let admins = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].isAdmin === true) {
            admins.push(users[i]);
        } else {
            continue
        }
    }
    return admins;
}

const admins = getAllAdmins(users);
console.log(admins)

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0,
//  возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

function first(array, n) {
    if (n > array.length) {
        return console.error(`Число не может быть больше длинны массива: ${n}`);
    }
    let first = [];
    if (n == 0) {
        return first;
    }
    if (n == undefined) {
        first.push(array[1]);
        return first;
    }
    for (let i = 0; i < n; i++) {
        first.push(array[i]);
    }
    return first;
}

console.log(first(users, 0))
