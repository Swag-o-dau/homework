const user = {
    name: 'Danila',
    age: 20,
    sayHello(name) {
        console.log(`Hello, ${name}`)
    }
}
user.sayHello(user.name)

// ===================================================

const users = [
    {
        name: 'alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'john',
        age: 30,
        isAdmin: true
    },
    {
        name: 'ivan',
        age: 30,
        isAdmin: true
    },
]

let normalUsers = null

for (i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        normalUsers = normalUsers + 1
    }
}
console.log(normalUsers)
