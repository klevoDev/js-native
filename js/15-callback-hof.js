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




// *** 1. array.forEach((value, index, arr) => { ... })
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


// *** 4. let arr = array.filter((value, index, array) => { return ... })
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

// *** 5 let arr = array.map((value, index, array) => { return ... })

// Метод map возвращает массив значений, которые возвращает callback-функция
// => Массив будет той же длины

// Написать функцию, на вход которой подаётся массив строк
// Функция возвращает новый массив, заменяя слова на длину строки


const nameList = ['Alex', 'Pavel', 'Bob', 'Gale', 'Henry']
console.log(changeLength(nameList));

function changeLength(array) {
    return array.map((text) => text.length)
}


// * 6 isCheck = array.some( (value, index, array) => { return ...} )
// Проверка на нахождении хотя бы одного элемента в массиве
// some Возвращает true если проверка успешна
// Если ничего не нашёл, то false
// callback должен вернуть true, тогда проверка считается успешной


// * 7 isCheck = array.every( (value, index, array) => { return ...} )
// Проверка, удовлетворяют ли все элементы массива условию
// every Возвращает true если проверка успешна
// Если хотя бы один не соответствует, то возвращаетися false
// callback должен вернуть true/false


// * 8 let value = array.reduce( (prReturnValue, value, index, array) => {return ...}, startValue)
// Вычисляет значение, на основе всего массива
// reduce возвращает одно значение

// callback возвращает значение и оно в следующей итерации будет записано в prReturnValue

// В самую первую итерацию prReturnValue = startValue

// Если startValue не задан, то по умолчанию равен первому элементу массива


// Посчитать сумму всех чисел в массиве

const listNumber = [7, 6, 7, 2, 3, 4, 7, 2, 3]

let oldSum = 0
for (const el of listNumber) {
    oldSum += el
}
console.log(oldSum);

const sum = listNumber.reduce((prReturnValue, value) => {
    return prReturnValue + value
})
console.log(sum);


// Посчитать сумму чётных
const sumEven = listNumber.reduce((prReturnValue, value) => {
    return value % 2 === 0 ? prReturnValue + value : prReturnValue
}, 0)
console.log(sumEven);

// sort
// reduce




































// * Реализовать функцию, на вход которой подаётся массив и callback функция. Функция делает всё то же самое, что и метод forEach