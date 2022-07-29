// Задачи по теме 13. Function types

// 1. Задача (FD & FE & AF) +

// Написать функцию, на вход которой подаётся переменная, функция возвращает название типа данных.


// const car = "mazda";

// // FD
// function getType(variable) {
//     return typeof variable
// }

// console.log(getType(car));

// //FE
// const typeVariable = function (variable) {
//     return typeof variable
// }

// console.log(typeVariable(car));

// //AF
// const typeVar = variable => typeof variable

// console.log(typeVar(car));



// 2. Задача (AF) +

// Написать функцию, которая проверяет, является ли переменная типом null.


// Function Declaration

// const typeNull = null;

// function checkNull(variable) {
//     return variable === null
// }

// console.log(checkNull(typeNull));


// // Function Expression

// const checkNull2 = function (variable) {
//     return variable === null
// }

// console.log(checkNull2(typeNull));


// // Arrow Function

// const checkNull3 = variable => variable === null

// console.log(checkNull3(typeNull));



// 3. Задача (AF) +

// Написать функцию, которая проверяет переданное число на чётность.

//Function Declaration

// const userNumber = 11;

// function isEven(number) {
//     return number % 2 === 0
// }

// console.log(isEven(userNumber));


// // Function Expression

// const userNumber2 = function (number) {
//     return number % 2 === 0
// }

// console.log(userNumber2(userNumber));


// // Arrow Function

// const userNumber3 = number => number % 2 === 0
// console.log(userNumber3(userNumber));



// 4. Задача (FE) +

// Написать функцию, которая склеивает переданные строки через пробел. Функция работает, как с двумя, так и со многими переданными переменными.

// const brand = "BMW";
// const model = "X5";
// const stage = "M";
// // Function Declaration

// function sumText(...rest) {
//     let newText = '';
//     for (const el of rest) {
//         newText += ` ${el}`
//     }
//     return newText
// }

// console.log(sumText(brand, model, stage));


// // Function Expression

// const sumText2 = function (...rest) {
//     let newText = '';
//     for (const el of rest) {
//         newText += ` ${el}`
//     }
//     return newText
// }

// console.log(sumText2(brand, model));


// // Arrow Function

// const sumText3 = (...rest) => {
//     let newText = '';
//     for (const el of rest) {
//         newText += ` ${el}`
//     }
//     return newText
// }

// console.log(sumText3(model, stage));



// 5. Задача (FE) +

// Написать функцию, на вход которой подаётся массив строк, функция возвращает одну строку (склеенную из всех в массиве).

// const textArr = ["one", "Two", "Three"]

// // Function Declaration

// function sumText(arrayString) {
//     let newString = '';
//     for (const el of arrayString) {
//         newString += el
//     }
//     return newString
// }

// console.log(sumText(textArr));

// //Function Expression

// const sumText2 = function (arrayString) {
//     let newString = '';
//     for (const el of arrayString) {
//         newString += el
//     }
//     return newString
// }

// console.log(sumText2(textArr));

// //Arrow Function

// const sumText3 = arrayString => {
//     let newString = '';
//     for (const el of arrayString) {
//         newString += el
//     }
//     return newString
// }

// console.log(sumText3(textArr));



// 6. Задача (FD)

// Написать функцию, на вход которой подаётся массив из чисел, функция возвращает новый массив из чисел, которые делятся на 4.

// 7. Задача (FD)

// Написать функцию, на вход которой подаётся любое количество чисел, функция возвращает массив из чисел, которые делятся на 3.

// 8. Задача (FD)

// Дана функция, привести её к виду Function Decalration.

// const checkMoreTen = num => num > 10;
// 9. Задача (FE)

// Дана функция, привести функцию к виду Function Expression.

// const getGender = text => text === 'm' ? 'male' : 'female';
// 10. Задача (AF)

// Дана функция, привести функцию к виду Arrow Function.

// function test(x, y, z = 1) {
//     return x * y * z; 
// }
// 11. Задача (AF)

// Дана функция, привести функцию к виду Arrow Function.

// function test(x, y, z = 0) {
//     console.log(x + y + z);
// }
// 12. Задача (AF || FE || FD)

// Написать функцию, на вход которой подаёт неизвестное количество строк. Функция вовзаращает число - количество всех символов из всех переданных строк.

// 13. Задача (AF || FE || FD)

// Написать функцию, на вход которой подаёт любое количество чисел. Функция возвращает сумму всех чисел.

// 14. Задача (AF || FE || FD)

// Написать функцию, на вход которой подаётся массив чисел. Функция возвращает одно число - наименьшее из них.

// 15. Задача

// Что вернёт фунция tester?

// const tester = (...numbers) => typeof numbers;
// let result = tester(3, 7, 4, 1); // ?
// 16. Задача

// Что вернёт фунция tester?

// const tester = numbers => typeof numbers;
// let result = tester([3, 7, 4, 1]); // ?
// 17. Задача

// Что вернёт фунция tester?

// const tester = numbers => Array.isArray(numbers);
// let result = tester([3, 7, 4, 1]); // ?
// 18. Задача (FD)

// Перепишите Arrow Function в Function Declaration.

// const tester = numbers => Array.isArray(numbers);
// let result = tester([3, 7, 4, 1]);
// 19. Задача (AF)

// Сделать рефакторинг функции isLongString.

// const isLongString = (string) => {
//     if (string.length > 10) {
//         return true;
//     } else {
//         return false;
//     }
// }
// ★ Задачи повышенной сложности ★

// ★ 20. Задача ★

// Что выведется в консоль?

// const tester = numbers => Array.isArray(numbers);

// const res = changeBoolToString(tester([3, 7, 4, 1]));

// function changeBoolToString(a) {
//     return a ? "array" : "Not an Array";
// }

// console.log(res);
// ★ 21. Задача ★

// Что выведется в консоль?

// const arr = [3, 7, 4, 1];
// const tester = numbers => Array.isArray(numbers);

// const res = changeBoolToString(tester);

// function changeBoolToString(a) {
//     return a(arr) ? "array" : "Not an Array";
// }

// console.log(res);