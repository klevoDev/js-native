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

// const sumText2 = function(arrayString) {
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



// 6. Задача (FD) +

// Написать функцию, на вход которой подаётся массив из чисел, функция возвращает новый массив из чисел, которые делятся на 4.

// const someArray = [8, 13, 12, 3, 4, 5, 1, 16];

// // Gunction Declaration
// function getDividedBy4(arrayNumbers) {
//     let arrDividedBy4 = [];
//     for (const el of arrayNumbers) {
//         if (el % 4 === 0) {
//             arrDividedBy4.push(el)
//         }
//     }
//     return arrDividedBy4
// }

// console.log(getDividedBy4(someArray));

// //Function Exprssion

// const arrayDividedBy4 = function (arrayNumbers) {
//     let arrDividedBy4 = [];
//     for (const el of arrayNumbers) {
//         el % 4 === 0 && arrDividedBy4.push(el)
//     }
//     return arrDividedBy4
// }

// console.log(arrayDividedBy4(someArray));

// // Arrow Function

// const dividedBy4 = arrayNumbers => {
//     let arrDividedBy4 = [];
//     for (const el of arrayNumbers) {
//         el % 4 === 0 && arrDividedBy4.push(el)
//     }
//     return arrDividedBy4
// }

// console.log(dividedBy4(someArray));



// 7. Задача (FD) +

// Написать функцию, на вход которой подаётся любое количество чисел, функция возвращает массив из чисел, которые делятся на 3.

// const one = 1;
// const second = 2;
// const three = 3;
// const four = 4;
// const six = 6;

// // Function Declaration

// function getDividedBy3(...rest) {
//     const newArr = [];
//     for (const el of rest) {
//         if (el % 3 === 0) {
//             newArr.push(el)
//         }
//     }
//     return newArr
// }

// console.log(getDividedBy3(one, second, three, four, six));

// // Function Expression

// const dividedBy3 = function (...rest) {
//     const newArr = [];
//     for (const el of rest) {
//         el % 3 === 0 && newArr.push(el)
//     }
//     return newArr
// }

// console.log(dividedBy3(one, four, six));

// // Arrow Function

// const arrDividedBy3 = (...rest) => {
//     const newArr = [];
//     for (const el of rest) {
//         el % 3 === 0 && newArr.push(el)
//     }
//     return newArr
// }

// console.log(arrDividedBy3(three));



// 8. Задача (FD) +

// Дана функция, привести её к виду Function Decalration.

// const checkMoreTen = num => num > 10;

// const someNumber = 9;

// function checkMoreTen(num) {
//     return num > 10
// }

// console.log(checkMoreTen(someNumber));



// 9. Задача (FE) +

// Дана функция, привести функцию к виду Function Expression.

// const getGender = text => text === 'm' ? 'male' : 'female';

// const gender = "m";

// const getGender = function (text) {
//     return text === "m" ? "male" : "female";
// }

// console.log(getGender(gender));



// 10. Задача (AF) +

// Дана функция, привести функцию к виду Arrow Function.

// function test(x, y, z = 1) {
//     return x * y * z; 
// }

// const six = 6;
// const second = 2;
// const three = 3;

// const multyplyNum = (x, y, z = 1) => x * y * z

// console.log(multyplyNum(six, second, three));




// 11. Задача (AF) +

// Дана функция, привести функцию к виду Arrow Function.

// function test(x, y, z = 0) {
//     console.log(x + y + z);
// }

// const six = 6;
// const second = 2;
// const three = 3;

// const test = (x, y, z = 0) => { console.log(x + y + z) }

// test(six, second)



// 12. Задача (AF || FE || FD) +

// Написать функцию, на вход которой подаёт неизвестное количество строк. Функция вовзаращает число - количество всех символов из всех переданных строк.

// const test = "test";
// const monday = "mobday";
// const go = "go";


// // Function Declaration

// function sumSymbol(...rest) {
//     let countSymbol = 0;
//     // const newString = rest.join('');
//     // for (const el of newString) {
//     //     countSymbol += 1
//     // }
//     for (const el of rest) {
//         countSymbol += el.length
//     }

//     return countSymbol
// }

// console.log(sumSymbol(test, go));


// // Function Expression

// const countSymbol = function (...rest) {
//     let countSymbol = 0;
//     const newString = rest.join('');
//     for (const el of newString) {
//         countSymbol += 1
//     }
//     return countSymbol
// }

// console.log(countSymbol(monday, go));

// // Arrow Function

// const sumSymbol2 = (...rest) => {
//     let countSymbol = 0;
//     const newString = rest.join('');
//     for (const el of newString) {
//         countSymbol += 1
//     }
//     return countSymbol
// }

// console.log(sumSymbol2(go));




// 13. Задача (AF || FE || FD) +

// Написать функцию, на вход которой подаёт любое количество чисел. Функция возвращает сумму всех чисел.


// Function Declaration

// function getSumNumbers(...numbers) {
//     let countNumbers = 0
//     for (const el of numbers) {
//         countNumbers += el
//     }
//     return countNumbers
// }

// console.log(getSumNumbers(4, 3));

// // Function Expression


// const sumNumbers = function (...numbers) {
//     let countNumbers = 0
//     for (const el of numbers) {
//         countNumbers += el
//     }
//     return countNumbers
// }

// console.log(sumNumbers(4, 3, 9, 23));

// // Arrow Function

// const sumNum = (...numbers) => {
//     let countNumbers = 0
//     for (const el of numbers) {
//         countNumbers += el
//     }
//     return countNumbers
// }

// console.log(sumNum(4, 23));




// 14. Задача (AF || FE || FD) +

// Написать функцию, на вход которой подаётся массив чисел. Функция возвращает одно число - наименьшее из них.


// Function Declaration

// const someArr = [4, 2, 19, -3, 0]

// function getMinNumber(arrayNumbers) {
//     return Math.min(...arrayNumbers)
// }

// console.log(getMinNumber(someArr));

// // Function Expression

// const someArray = [4, 2, 19, 0]

// const minNumber = function (arrayNumbers) {
//     return Math.min(...arrayNumbers)
// }

// console.log(minNumber(someArray));

// // Arrow Function

// const minNum = arrayNumbers => Math.min(...arrayNumbers);

// console.log(minNum(someArr));







// 15. Задача + -

// Что вернёт фунция tester?

// const tester = (...numbers) => typeof numbers;
// let result = tester(3, 7, 4, 1); // ? number по каждому числу
// console.log(result);



// 16. Задача +

// Что вернёт фунция tester?

// const tester = numbers => typeof numbers;
// let result = tester([3, 7, 4, 1]); // ? вернет обьект



// 17. Задача +

// Что вернёт фунция tester?

// const tester = numbers => Array.isArray(numbers);
// let result = tester([3, 7, 4, 1]); // ? вернет true



// 18. Задача (FD) +

// Перепишите Arrow Function в Function Declaration.

// const tester = numbers => Array.isArray(numbers);
// let result = tester([3, 7, 4, 1]);

// function tester(numbers) {
//     return Array.isArray(numbers)
// }



// 19. Задача (AF) +

// Сделать рефакторинг функции isLongString.

// const isLongString = (string) => {
//     if (string.length > 10) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const isLongString = string => string.length > 10



// ★ Задачи повышенной сложности ★

// ★ 20. Задача ★ + -

// Что выведется в консоль? 

// const tester = numbers => Array.isArray(numbers);
// // ? tester функция проверяющая массив или нет

// const res = changeBoolToString(tester([3, 7, 4, 1]));


// function changeBoolToString(a) {
//     return a ? "array" : "Not an Array";
// }
// // ? res тоже проверяет 

// // console.log(res); // ? "array"



// ★ 21. Задача ★ -

// Что выведется в консоль?

// const arr = [3, 7, 4, 1];
// const tester = numbers => Array.isArray(numbers);

// const res = changeBoolToString(tester);
// // Передали ссылку на функцию, но не вызвали её!

// function changeBoolToString(a) {
//     // a = tester
//     // callback - функция с обратным вызовом
//     return a(arr) ? "array" : "Not an Array";
// }

// console.log(res);



// 20. Задача (AF)

// Написать функцию, на вход которой подаётся 2 параметра. Функция вычисляет произведение двух чисел. Функция возвращает объект, в котором хранится 2 параметра и результат умножения.


// function getSum(num1, num2) {
//     return {
//         num1,
//         num2,
//         multi: num1 * num2
//     }
// }



// const test = (num1, num2) => ({
//     num1,
//     num2,
//     multi: num1 * num2
// })

// console.log(getSum(3, 4));