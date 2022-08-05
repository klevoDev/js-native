// * ===== Array methods 2 part (callback - HOF) ===== * //

// HOF - High Order Function (Функция высшего порядка)
// Функция высшего порядка - функция/метод, на вход которой подаётся другая функция

// подаваемая функция называется callback'ом
// callback не вызывается нами, он просто передаётся по ссылке

// Её вызывает сам HOF

// пример:
// function name2(callback) {
//     callback(10)
// }
// name2(console.log)




// * 1. array.forEach((value, index, arr) => { ... })
// arr.forEach(callback);
// Простой перебор элементов
// Метод forEach ничего не возвращает
// forEach принимает функцию(callback) определённого вида
// callback ==> (value, index, arr) => { любой код, который мы хотим }
// callback ничего не возвращают

const testArray = [4, 8, 15, 16, 23, 42]

// 1. Вывести все элементы массива в столбик

// for (const el of testArray) {
//     console.log(el);
// }

const callback = value => {
    console.log(value);
}
// forEach для каждого элемента вызывает callback
testArray.forEach(callback)

// В реале:
testArray.forEach(value => console.log(value))


// 2. Каждый второй элемент массива заменить на 'letter'

testArray.forEach((v, index, array) => {
    (index + 1) % 2 === 0 && (array[index] = 'letter')
})
console.log(testArray);


// 3. Вывести в консоль каждое чётное значение:
const newArray = [4, 54, 675, 76, 8, 769, 879, 78, 8564]

newArray.forEach((value) => {
    value % 2 === 0 && console.log(value);
})


// * 2.let value = array.find( (value, index, array) => { return ... } )
// Поиск значениЯ по условию (одно значение)
// Метод find возвращает первое встречное value, на котором callback - функция вернула истину
// Если ничего не найдёт, то вернёт undefined

const testerArray = [4, 54, 675, 76, 8, 769, 879, 78, 8564]
// Найти значение в массиве, которое больше 700

const value = testerArray.find((value) => {
    return value > 700 // true/false
})
console.log(value);


// * 3. let index = array.findIndex( (value, index, array) => { return ... })
// Поиск индекс по условию
// Метод findIndex возвращает первый встречный index, на котором callback-функция вернула true
// Если ничего не найдёт, то вернёт -1

// indexOf() // Для поиска индекс необходимо конкретное значение


// * 4. let arr = array.filter((value, index, array) => { return ... })
// Поиск значениЙ по условию
// Метод filter возвращает НОВЫЙ массив значений, на которых callback-функция вернула true
// Если ничего не найдёт, то вернёт []

// На каждом элементе, на котором callback вернула true - попадут в новый массив, который вернёт метод filter

const userList = [
    { age: 20, name: 'ALex' },
    { age: 10, name: 'alex' },
    { age: 110, name: 'Pavel' },
    { age: 8, name: 'Oksana' },
    { age: 15, name: 'Dima' },
    { age: 45, name: 'Lexus' },
    { age: 95, name: 'Deda' },
]

// Написать функцию, которая: 
// Найти всех совершенно-летних пользователей
// Записать их в отдельный массив

// const user18plus = userList.filter((user) => {
//     return user.age >= 18
// })

// const user18plus = userList.filter(user => user.age >= 18)
// console.log(user18plus);


// function getUser18Plus(users) {
//     return users.filter(user => user.age >= 18)
// }


const getUser18Plus = users => {
    return users.filter(user => user.age >= 18)
}

console.log(getUser18Plus(userList));

// 1

// Написать функцию, которая находит индекс первого числа, кратного 3
// Написать функцию, которая находит индекс первого имени, длина которого больше 5
// Написать функцию, которая находит индекс первого true из массива любых типов данных

// Написать функцию, которая ищет среди массива чисел первое встречное отрицательное число
// Написать функцию, которая ищет среди массива имен первое встречное имя с длиной строки меньшее 4

// Написать функцию, которая мутирует массив, заменяя все чётные на 777
// Написать функцию, которая мутирует массив, заменяя все строки на число 0
// Написать функцию, которая выводит в консоль только чётные индексы, начиная с 2

// const userList = [
//     { age: 20, name: 'ALex' },
//     { age: 10, name: 'alex' },
//     { age: 110, name: 'Pavel' },
//     { age: 8, name: 'Oksana' },
//     { age: 15, name: 'Dima' },
//     { age: 45, name: 'Lexus' },
//     { age: 95, name: 'Deda' },
// ]
// Написать функцию, которая возвращает из массива пользователей всех пользователей, чьё имя длинее 6 символов
// Написать функцию, которая возвращает из массива чисел все чётные числа
// Написать функцию, которая возвращает из массива строк все строки, которые написаны строго в нижнем регистре (Если хотя бы одна буква большая, то такое слово не подходит)





























// * Реализовать функцию, на вход которой подаётся массив и callback функция. Функция делает всё то же самое, что и метод forEach