// 1. Задача +

// Написать функцию, которая выводит сообщение Hello world! 5 раз.

// function helloWorld() {
//     for (let i = 0; i < 5; i++) { console.log("Hello world!") };
// }

// helloWorld()



// 2. Задача +

// Написать функцию, на вход которой подаётся переменная, функция возвращает название типа данных.


// function showType(value) {
//     return typeof value;
// }

// console.log(showType(34));



// 3. Задача +

// Написать функцию, которая проверяет, является ли переменная типом string
// ! Если функция должна что-то проверить, то она возвращает true/false

// function checkString(value) {
//     return typeof value === "string";
// }

// console.log(checkString(5));




// 4. Задача +

// Написать функцию, которая проверяет, является ли переменная типом null

// function checkNull(value) {
//     return value === null;
// }

// console.log(checkNull(null));



// 5. Задача +

// Написать функцию, на вход которой подаётся 2 переменных, функция проверяет является ли первая переменная типом number, а вторая - string. (Т.е. функция возвращает true или false)

// function chekValue(valOne, valTwo) {
//     return typeof valOne === "number" && typeof valTwo === "string"
// }


// console.log(chekValue(1, 3));



// 6. Задача +

// Написать функцию, на вход которой подаётся 2 числа, если эти числа равны 15, то возвращается true иначе false.

// function checkSum(num1, num2) {
//     return num1 + num2 === 15
// }


// console.log(checkSum(7, 8));



// 7. Задача +

// Написать функцию, на вход которой подаётся 2 числа, если первое число равно 5, а второе 3, то возвращается true иначе false

// function checkFiveAndTree(num1, num2) {
//     return num1 === 5 && num2 === 3
// }

// console.log(checkFiveAndTree(5, 3));



// 8. Задача +

// Написать функцию, которое проверяет равно ли переданное число 10.

// function checkTenValue(num) {
//     return num === 10
// }

// console.log(checkTenValue(11));



//9. Задача +

// Написать функцию, которая проверяет переданное число на чётность.

// function checkEven(num) {
//     return num % 2 === 0;
// }

// console.log(checkEven(2));




//10. Задача +

// Написать функцию, которая проверяет переданное число на то, делится ли оно на 10 или нет.

// function checkValue(num) {
//     return num % 10 === 0;
// }

// console.log(checkValue(10));




//11. Задача +

// Написать функцию, которая проверяет переданное число на крастность 17.

// function checkNum(num) {
//     return num % 17 === 0;
// }

// console.log(checkNum(14));




//12. Задача +

// Написать функцию, на вход которой подаётся 2 числа, функция проверяет равны ли эти числа.

// function checkEquality(num1, num2) {
//     return num1 === num2;
// }
// console.log(checkEquality(2, 2));




// 13. Задача +

// Написать функцию, на вход которой подаётся 2 или 3 или 4 перемнных, функция возвращает true / false, в зависимости от того являются ли все переменные типом string.

// function sumNubers(num1, num2, num3 = '', num4 = '') {
//     return typeof num1 === "string" &&
//         typeof num2 === "string" &&
//         typeof num3 === "string" &&
//         typeof num4 === "string";
// }

// console.log(sumNubers('4532', '543'));



// 14. Задача +

// Написать функцию, на вход которой подаётся число, функция возвращает текст: Делится на 5, если переданное число делится на 5. Иначе возвращает: Не делится.

// function calcDivision(num) {
//     return num % 5 === 0 ? "Делится на 5." : "Не делится."
// }

// console.log(calcDivision(10));



// 15. Задача +

// Сделать рефакторинг кода.

// function isTwenty(num) {
//     if (num == 20) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function checkTwenty(num) {
//     return num === 20
// }



// 16. Задача

// Написать функцию, которая складывает 2 или 3 числа, возвращает результат. Учесть, что пользователь может подать на вход не число. Вывести в этом случе: error.

// function calcSum(num1, num2, num3 = 0) {

//     if (typeof num1 === 'number' && typeof num2 === 'number' && typeof num3 === 'number') {
//         return num1 + num2 + num3
//     } else {
//         return "error"
//         // throw new Error() - для вызова ошибки
//     }
// }

// console.log(calcSum(1, 4, 3));



// 17. Задача +

// Написать функцию, которая перемножает 2, 3 или 4 числа, возвращает результат. Учесть, что пользователь может подать на вход не число. Вывести в этом случе: error.

// function getResult(num1, num2 = 1, num3 = 1, num4 = 1) {
//     if (typeof num1 === "number" && typeof num2 === "number" && typeof num3 === "number" && typeof num4 === "number") {
//         return num1 * num2 * num3 * num4
//     } else {
//         return "error"
//     }
// }

// console.log(getResult(4, 5));




// 18. Задача +

// Написать функцию, которая склеивает переданные 2 строки через пробел.

// function showString(val1, val2) {
//     if (typeof val1 === "string" && typeof val2 === "string") {
//         return val1 + " " + val2
//     }
// }

// console.log(showString("3", "4"));



// 19. Задача +

// Написать функию, которая вычисляет площадь окружности. На вход одно число - радиус окружности.


// расчитатьб - calc
// площадь - square
// окружность - circle

// function getSquare(radius) {
//     return 3.14 * radius ** 2;
// }

// console.log(getSquare(4));




// 20. Задача +

// Написать функцию, которая выводит столбик (от 1 до 10 включительно) из таблицы умножения на то число, которое подали на вход в функцию.

// function showMultiply(value) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${value} x ${i} = ${value * i}`);
//     }
// }

// showMultiply(7)



// 21. Задача +

// Напишите функцию, которая принимает 2 параметра: длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то функция вычисляет площадь квадрата.

// function calcSquare(num1, num2 = num1) {
//     return num1 * num2;
// }

// console.log(calcSquare(4, 3));



// 22. Задача +

// Написать функцию, которой передаём, имя, фамилия и возраст. Функция выводит в консоль, например: Ты Иван Петров с возрастом 17 лет.

// function showFullName(firstName, secondName, age) {
//     console.log(`Ты ${firstName} ${secondName} c возарстом ${age} лет.`);
// }



// 23. Задача +

// Написать функцию, которая принимает пол человека ('M','F') в виде строки.

// Функции возвращает строку: Ваш пол мужской если ввели M.
// Функции возвращает строку: Ваш пол женский если ввели F.
// Если ничего не передано или передана любая другая строка, то вывести: Ваш пол не опеределен
// Функция должна работать с любым регистром.


// function getGender(yourGender) {
//     if (yourGender.toLowerCase() === "m") {
//         return "Ваш пол мужской"
//     } else if (yourGender.toLowerCase() === "f") {
//         return "Ваш пол женский"
//     } else {
//         return "Ваш пол не опеределен"
//     }
// }

// console.log(getGender("f"));
// console.log(getGender("F"));
// console.log(getGender("m"));
// console.log(getGender("M"));
// console.log(getGender("A"));


// ? Функции с массивами:

// 24. Задача +

// Написать функцию, на вход которой подаётся массив, функция возвращает среднее арифметическое чисел.

// const someArray = [3, 4, 23, 6];

// function getValue(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum / arr.length;
// }


// function getValue(arr) {
//     let sum = 0;
//     for (const el of arr) {
//         sum += el
//     }
//     return sum / arr.length;
// }

// console.log(getValue(someArray));

// 25. Задача

// Написать функцию, которая принимает массив. Функция возвращает одно число – количество чётных чисел.

// const someArray = [3, 4, 23, 6, 7, 23];

// function getValue(arr) {
//     let s = Number();
//     for (let i = 0; i < arr.lenght; i++) {
//         if (arr[i] % 2 === 0) {
//             s += 1
//         }
//     }

// }
// console.log(s);
// console.log(getValue(someArray));

// let s = 0;
// for (let i = 0; i < someArray.lenght; i++) {
//     if (someArray[i] % 2 === 0) {
//         s += i
//     }
// }
// console.log(s);