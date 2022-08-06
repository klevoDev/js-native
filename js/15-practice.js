
// ? Написать функцию, которая находит индекс первого числа, кратного 3

// const someNumbers = [1, 2, 3, 4, 5]

// function getIndex(value) {
//     return value.findIndex((value, index) => value % 3 === 0 && index)
// }

// console.log(getIndex(someNumbers));



// ? Написать функцию, которая находит индекс первого имени, длина которого больше 5

// const someNumbers = ["Sergo", "Max", "Alexander", "Dmitriy", "Tony"]

// function getIndexName(array) {
//     return array.findIndex((value, index) => value.length > 5 && index)
// }

// console.log(getIndexName(someNumbers));


// ? Написать функцию, которая находит индекс первого true из массива любых типов данных +- почему не 0?

// const arr = [2, 3, null, [0, 1], { r: 34, s: 5 }, [], [null], () => { }];

// function getIndex(array) {
//     return array.findIndex((value, index) => Boolean(value) && index)
// }

// console.log(getIndex(arr));


// ? Написать функцию, которая ищет среди массива чисел первое встречное отрицательное число

// const someNumbers = [1, 2, 3, 4, 5, -6]

// function getNegativeNumber(array) {
//     return array.forEach(value => value < 0 && console.log(value));
// }

// getNegativeNumber(someNumbers);


// ? Написать функцию, которая ищет среди массива имен первое встречное имя с длиной строки меньшее 4

// const someNumbers = ["Sergo", "Max", "Alexander", "Dmitriy", "Tony"]

// function getIndexName(array) {
//     array.forEach(el => el.length < 4 && console.log(el));
// }

// getIndexName(someNumbers)


// ? Написать функцию, которая мутирует массив, заменяя все чётные на 777 - +

// const someNumbers = [1, 2, 3, 4, 5]

// function getArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             return array[i] = 777
//         }
//     }
// }

// function getArray(array) {
//     array.forEach((element) => {
//         (array[element]) % 2 === 0 && (array[element] = 777)
//     });
// }

// console.log(getArray(someNumbers));
// console.log(someNumbers);


// ? Написать функцию, которая мутирует массив, заменяя все строки на число 0 -

// const someNumbers = [1, 2, 3, 4, "test", 5, "go"]

// function getArray(array) {
//     array.forEach(el => {
//         if (typeof array[el] === "string") {
//             array[el] = 0
//         }
//     });
// }


// getArray(someNumbers);
// console.log(someNumbers);


// ? Написать функцию, которая выводит в консоль только чётные индексы, начиная с 2

// const userList = [
//     { age: 20, name: 'ALex' },
//     { age: 10, name: 'alex' },
//     { age: 110, name: 'Pavel' },
//     { age: 8, name: 'Oksana' },
//     { age: 15, name: 'Dima' },
//     { age: 45, name: 'Lexus' },
//     { age: 95, name: 'Deda' },
// ]


// const someNumbers = [1, 2, 3, 4, 5, -6]

// function getArr() {

// }



// ? Написать функцию, которая возвращает из массива пользователей всех пользователей, чьё имя длинее 6 символов

// const userList = [
//     { age: 20, name: 'ALex' },
//     { age: 10, name: 'alex' },
//     { age: 110, name: 'Pavel' },
//     { age: 8, name: 'Oksana' },
//     { age: 15, name: 'Dima' },
//     { age: 45, name: 'Lexus' },
//     { age: 95, name: 'Deda' },
//     { age: 25, name: 'Alexander' },
// ]


// function getLongName(object) {
//     return object.filter((user) => user.name.length > 6)
// }

// console.log(getLongName(userList));


// ? Написать функцию, которая возвращает из массива чисел все чётные числа

// const someNumbers = [1, 2, 3, 4, 5]

// function getEvenNumbers(array) {
//     return array.filter((numbers) => numbers % 2 === 0)
// }

// console.log(getEvenNumbers(someNumbers));

// ? Написать функцию, которая возвращает из массива строк все строки, которые написаны строго в нижнем регистре (Если хотя бы одна буква большая, то такое слово не подходит)

// const arr = ["Rty", "test", "5", "Go"]

// function getArrayString(array) {
//     return array.filter(el => el === el.toLowerCase());
// }

// console.log(getArrayString(arr));




// ? 1. Задача +

// Написать функцию, которая выводит переданный массив в консоль в красивой форме: 
// элемент №{} значение: {}

// const arr = ["Rty", "test", "5", "Go"];

// function getBeautifullArray(array) {
//     array.forEach((value, index) => console.log(`элемент № ${index} значение: ${value}`));
// }

// getBeautifullArray(arr);