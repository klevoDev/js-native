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

// console.log(calcSum(1));



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

// console.log(getValue(someArray));


// ? for of:
// function getValue(arr) {
//     let sum = 0;
//     for (const el of arr) {
//         sum += el
//     }
//     return sum / arr.length;
// }

// console.log(getValue(someArray));




// 25. Задача +

// Написать функцию, которая принимает массив. Функция возвращает одно число – количество чётных чисел.

// const someArray = [3, 4, 23, 6, 7, 23, 8];

// function getEvenNumber(arr) {
//     let evenNumber = 0;
//     for (const el of arr) {
//         el % 2 === 0 && (evenNumber += 1)
//     }
//     return evenNumber
// }

// console.log(getEvenNumber(someArray));



// 26. Задача +

// Написать функцию, на вход которой подаётся массив чисел, функция заменяет все чётные числа на строку even.

// const someArray = [3, 4, 23, 6, 7, 23];

// function getNumChange(arr) {
//     for (let i = 0; i < someArray.length; i++) {
//         if (arr[i] % 2 === 0) {
//             arr[i] = 'even'
//         }
//     }
//     return arr
// }

// console.log(getNumChange(someArray));



// 27. Задача +

// Написать функцию, на вход которой подаётся массив чисел, функция заменяет все отрицательные числа на положительные.

// const someArray = [3, 4, 25, -6, 7, -23];

// function getPositiveNum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr[i] *= -1
//         }
//     }
//     return arr
// }

// console.log(getPositiveNum(someArray));



// 28. Задача +

// Написать функцию, на вход которой подаётся массив из чисел, функция возвращает новый массив из чисел, которые делятся на 7.

// const someArray = [3, 4, 25, -6, 7, -23, 21];

// function getDividedSeven(arr) {
//     const newArr = []

//     for (const el of arr) {
//         el % 7 === 0 && newArr.push(el)
//     }
//     return newArr
// }

// console.log(getDividedSeven(someArray));



// 29. Задача +

// Написать функцию, на вход которой подаётся массив из строк, функция возвращает новый массив из строк, чья длина больше 3 символов.

// const arrString = ["тост", "ой", "бег", "пост"]

// function getArrString(arr) {
//     const newArr = [];
//     for (const el of arr) {
//         el.length <= 3 && newArr.push(el)
//     }
//     return newArr
// }

// console.log(getArrString(arrString));



// 30. Задача +

// Написать функцию, на вход которой подаётся массив из чисел, функция изменяет текущий массив, заменяя каждый второй элемент массива на строку =x2=.

// const someArray = [3, 5, 6, 23, 8, 89, 56, 7, 1]

// function changeSecondEl(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if ((i + 1) % 2 === 0 && i !== 0) {
//             arr[i] = "=x2="
//         }
//     }
//     return arr
// }

// console.log(changeSecondEl(someArray));



// 31. Задача +

// Написать функцию, на вход которой подаётся массив из строк, функция изменяет текущий массив, заменяя каждый третий элемент массива на строку число - количество символов в элементе.

// const someArray = [
//     "виноделие",
//     "крылья",
//     "каркассон",
//     "один",
//     "марс",
//     "ой"];

// function getSymbol(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if ((i + 1) % 3 === 0) {
//             arr[i] = arr[i].length

//         }
//     }
//     return arr
// }

// console.log(getSymbol(someArray));



// 32. Задача +

// Написать функцию, на вход которой подаётся массив, функция удаляет первый и последний элементы из массива.

// const someArray = [3, 5, 6, 23, 8, 89, 56, 7, 1]

// function changeArray(arr) {
//     arr.shift() && arr.pop()
//     return arr
// }

// console.log(changeArray(someArray));



// 33. Задача + -

// Написать функцию, на вход которой подаётся 2 массива, функция добавляет к первому массиву все значения из второго.

// const someArray = [3, 5, 6]
// const array = [56, 7, 1]

// function getGluingArr(arr1, arr2) {
//     return arr1.concat(arr2)

// }
// console.log(getGluingArr(someArray, array));




// 34. Задача -

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// function test(x, y) {
//     return x + y;
// }

// console.log(test(3, 4, 5, 7)); // ? ничего не выведется, вывелось 7( 

// в общем тут вопрос мы же не присвоили значения по дефолту, почему 7 то вывелось.



// 35. Задача -

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// function test(x, y) {
//     return x + y;
// }

// console.log(test(3)); // ? 3 - ответ nan!


// 36. Задача +

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// function test(x, y) {
//     console.log(x + y); 
// }

// console.log(test(3, 7)); // ? 12



// 37. Задача + -

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(test(3, 7)); // ? 12
// console.log(test(true, 1)); // ? -
// console.log(test('1', 0)); // ? 10

// function test(x, y) {
//     return x + y;
// }



// 38. Задача + -

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// function test(x, y) {
//     return x * y;
// }

// console.log(test('3', '7')); // ? 21 наверно)
// console.log(test(false, 1)); // ? -
// console.log(test('1', 0)); // ? 0
// console.log(test('1', 'true')); // ? -



// 39. Задача

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// function test(x = 1, y = 1) {
//     return x * y;
// }

// console.log(test(4)); // ? 4
// console.log(test(null, 5)); // ? -
// console.log(test(undefined, 5)); // ? 5
// console.log(test(undefined, undefined)); // ? 1, 1



// 40. Задача

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(test(3, 2, 1)); // ? 6
// console.log(test(null, null, 2)); // ? 1
// console.log(test(undefined, undefined, 5)); // ? 5
// console.log(test(undefined, undefined, undefined)); // ? 1
// console.log(test(3, 2, undefined)); // ? 6
// console.log(test(3, 2)); // ? 6

// function test(x, y, z = 1) {
//     return x * y * z; 
// }



// 41. Задача

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(sum(3, sum(4, 5))); // ? 12
// console.log(sum(sum(3, -1), 7)); // ? 9
// console.log(sum(sum(0, -5), sum(3, 7))); // ? -5
// console.log(sum(sum(3, sum(12, 5)), sum(sum(4, 8), 13))); // ? 45
// console.log(sum(sum(sum(5, 3), sum(7, -15)), sum(sum(10, 10), sum(-15, -5)))); // 0

// function sum(x, y) {
//     return x + y;
// }

// ? Посмотрел решение первого примера, так думал что должна быть ошибка, по итогу ошибки нет и на основе первого прорашал следующие, лучше проговорить почему 4 + 5 в первом примере

// 42. Задача +

// Написать функцию, на вход которой подаётся массив чисел. Функция возвращает одно число - наибольшее из них.

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, 0, 5];

// function getMaxValue(arr) {
//     let maxValue = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (maxValue < arr[i]) {
//             maxValue = arr[i]
//         }
//     }
//     return maxValue
// }

// console.log(getMaxValue(numberArray));



// ? ★ Задачи повышенной сложности ★


// ★ 43. Задача ★ + -

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(test(5)); // ? 50
// function test(x) {
//     let multi1 = 10;
//     return multi1 * x;
// }
// console.log(multi1); // ? 50 - ошибся, забыл про зону видимости

// console.log(anotherTest(5)); // ? 50
// function anotherTest(x) {
//     var multi2 = 10;
//     return multi2 * x;
// }
// console.log(multi2); // ? 50 - опять ошибся, думал что вар видно везде, ну кроме тела функции)

// console.log(otherTest(5)); // ? 50
// function otherTest(x) {
//     const multi3 = 10;
//     return multi3 * x;
// }
// console.log(multi3); // ? будет ошибка



// ★ 44. Задача ★ +

// Написать функцию, которая вычисляет факториал числа. На вход подаётся целое число. Функция возвращает -1, если:

// На вход подали не число;
// На вход подали отрицательное число;
// На вход подали не целое число;

// Примеры:
// 1! = 1
// 2! = 1 x 2 = 2
// 3! = 1 x 2 x 3 = 6
// 7! = 1 х 2 х 3 х 4 х 5 х 6 х 7 = 5040
// 0! = 1 (Искл)


// function getFactorialNumber(userNum) {
//     let calc = 1;
//     let result = 1;
//     if (userNum === 0) {
//         return "0! = 1";
//     } else if (userNum === 1) {
//         return "1! = 1";
//     } else if (typeof userNum !== "number") {
//         return "-1";
//     } else if (userNum < 0) {
//         return "-1";
//     } else if (Number.isInteger(userNum) === false) {
//         return "-1";
//     } else {
//         for (let i = 1; i <= userNum; i++) {
//             if (i > 1) {
//                 calc = calc + " x " + i
//                 result *= i;
//             }
//         }
//         return userNum + "! = " + calc + " = " + result;
//     }
// }

// console.log(getFactorialNumber(6));








