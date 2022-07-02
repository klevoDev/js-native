// 1. Задача +

// Написать функцию, которая выводит сообщение Hello world! 5 раз.

// function helloWorld() {
//     for (let i = 0; i < 5; i++)
//         console.log("Hello world!");
// }

// helloWorld()



// 2. Задача +

// Написать функцию, на вход которой подаётся переменная, функция возвращает название типа данных.


// function showType(value) {
//     return typeof value;
// }

// let test = showType(34)
// console.log(test);



// 3. Задача +

// Написать функцию, которая проверяет, является ли переменная типом string

// function checkString(value) {
//     if (typeof value === "string") {
//         console.log("string")
//     } else {
//         console.log("Это " + typeof value);
//     }
// }

// let test = 34;
// checkString(test)



// 4. Задача +

// Написать функцию, которая проверяет, является ли переменная типом null

// function checkNull(value) {
//     if (value === null) {
//         console.log("Это null")
//     } else {
//         console.log("Это " + typeof value);
//     }
// }

// let test = null;
// checkNull(test)



// 5. Задача +

// Написать функцию, на вход которой подаётся 2 переменных, функция проверяет является ли первая переменная типом number, а вторая - string. (Т.е. функция возвращает true или false)

// function chekValue(valOne, valTwo) {
//     if (typeof valOne === "number" && typeof valTwo === "string") {
//         return true
//     } else {
//         return false
//     }
// }

// let test = chekValue(1, "sf")
// console.log(test);



// 6. Задача +

// Написать функцию, на вход которой подаётся 2 числа, если эти числа равны 15, то возвращается true иначе false.

// function checkSum(num1, num2) {
//     if (num1 + num2 === 15) {
//         return true
//     } else {
//         return false
//     }
// }


// let test = checkSum(7, 8)
// console.log(test);



// 7. Задача +

// Написать функцию, на вход которой подаётся 2 числа, если первое число равно 5, а второе 3, то возвращается true иначе false

// function chekValue(num1, num2) {
//     if (num1 === 5 && num2 === 3) {
//         return true
//     } else {
//         return false
//     }
// }

// let test = chekValue(5, 3)
// console.log(test);




// 8. Задача +

// Написать функцию, которое проверяет равно ли переданное число 10.

// function chekValue(num) {
//     return num === 10 && true
// }

// let test = chekValue(10)
// console.log(test);



// 9. Задача +

// Написать функцию, которая проверяет переданное число на чётность.

// function checkEven(num) {
//     return num % 2 === 0
// }

// let test = checkEven(0)
// console.log(test);



// 10. Задача +

// Написать функцию, которая проверяет переданное число на то, делится ли оно на 10 или нет.

// function checkValue(num) {
//     return num % 10 === 0
// }

// let test = checkValue(11)
// console.log(test);



// 11. Задача +

// Написать функцию, которая проверяет переданное число на крастность 17.

// function checkNum(num) {
//     return num % 17 === 0
// }

// let test = checkNum(34)
// console.log(test);



// 12. Задача +

// Написать функцию, на вход которой подаётся 2 числа, функция проверяет равны ли эти числа.

// function checkEquality(num1, num2) {
//     return num1 === num2
// }

// let test = checkEquality(3, 2)
// console.log(test);



// 13. Задача -

// Написать функцию, на вход которой подаётся 2 или 3 или 4 перемнных, функция возвращает true / false, в зависимости от того являются ли все переменные типом string.

// function getString(val1, val2, val3, val4) {
// }



// 14. Задача +

// Написать функцию, на вход которой подаётся число, функция возвращает текст: Делится на 5, если переданное число делится на 5. Иначе возвращает: Не делится.

// function calcDivision(num) {
//     return num % 5 === 0 ? "Делится на 5." : "Не делится."
// }

// let test = calcDivision(10)
// console.log(test);



// 15. Задача +

// Сделать рефакторинг кода.

// function isTwenty(num) {
//     if (num == 20) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function chekTwenty(num) {
//     return num === 20
// }



// 16. Задача -

// Написать функцию, которая складывает 2 или 3 числа, возвращает результат. Учесть, что пользователь может подать на вход не число. Вывести в этом случе: error.

// function calcSum(num1, num2, num3) {

//     if (typeof num2 === "number" && typeof num3 === "number") {
//         return num1 + num2
//     } else if (typeof num1 === "number") {
//         return num1
//     } else {
//         return "error"
//     }
// }

// let test = calcSum(3, 4, 'sd')
// console.log(test);



// 17. Задача

// Написать функцию, которая перемножает 2, 3 или 4 числа, возвращает результат. Учесть, что пользователь может подать на вход не число. Вывести в этом случе: error.




// 18. Задача +

// Написать функцию, которая склеивает переданные 2 строки через пробел.

// function showString(val1, val2) {
//     if (typeof val1 === "string" && typeof val2 === "string") {
//         return val1 + " " + val2
//     }
// }



// let test = showString("3", "4")
// console.log(test);



// 19. Задача +

// Написать функию, которая вычисляет площадь окружности. На вход одно число - радиус окружности.

// function getArea(radius) {
//     console.log(`Площадь круга через радиус = ${3.14 * (radius * radius)}`);
// }

// getArea(2)



// 20. Задача +

// Написать функцию, которая выводит столбик (от 1 до 10 включительно) из таблицы умножения на то число, которое подали на вход в функцию.

// function showMultiply(value) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${value} x ${i} = ${value * i}`);
//     }
// }

// showMultiply(7)