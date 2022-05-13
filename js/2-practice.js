//## Задачи по теме 2. Output & Input ##


/*
### 1. Задача +
Создать 3 перемнных, все разного типа данных.
Вывести в консоль в одну строчку через пробел.
*/

// let someNumber = 100;
// let othernumber = "200";
// let reserved;

// console.log(someNumber + " " + othernumber + " " + reserved);
// console.log(someNumber, othernumber, reserved);
// console.log("Числа " + someNumber + " и " + othernumber + " это не " + reserved);


/*
### 2. Задача +
Создать переменную, которая хранит имя.
Вывести в консоль приветствие: <br>
`Привет, <имя из переменной>!`
*/

// let madMax = "Макс";
// console.log("Привет, " + madMax + "!");



// ### 3. Задача + 
// Объяви переменные intValue, numericValue, size, number типа number.
// Присвой им любые разные значения. 
// Вывести в консоль переменные в консоль через пробел, в обратном порядке их создания.


// let intValue = 1;
// let numericValue = 2;
// let size = 3;
// let number = 4;
// console.log(number, size, numericValue, intValue);


/*
### 4. Задача +
Создать 3 перемнных, все разного типа данных.
Вывести их тип в консоль.
*/

// let year = 2022;
// let month = "апрель";
// let isAdmin = true;
// console.log(typeof year);
// console.log(typeof month);
// console.log(typeof isAdmin);


/*
### 5. Задача. +
Сделать рефакторинг кода:

```
vozrastPolzovatela = 10
boolian = false;
user__text = 'Какой-то текст";
console.log(chiclo boolian user__text)
```
*/

// let userAge = 10;
// let isBoolean = false;
// let userText = "Какой-то текст";
// console.log(userAge, userText, isBoolean);

/*
### 6. Задача +
Сделать рефакторинг кода:

```
uzerName = Валентин;
user-money = 2000;
areAccess = "true";

console.log("У" + uzerName + "а" + " есть " + "user-money" + "монет")
console.log(uzerName + "имеет" + "доступ:" + "true")
*/

// let userName = "Валентин";
// let userMoney = 2000;
// let hasAccess = true;

// console.log("У " + userName + "а есть " + userMoney + " монет");
// console.log(userName + " имеет доступ: " + hasAccess);

/*
### 7. Задача +
Убери комментарии с части кода, чтобы в консоль вывелась фраза: <br>
`Happy New Year`
*/

// let text = '';
// // text = text + "Merry";
// // text = text + "Christmas\n";
// // text = text + "Merry New\n";
// // text = text + "New";
// // text = text + "weekend\n";
// text = text + "Happy New";
// // text = text + "Merry New!";
// text = text + " ";
// text = text + "Year";
// console.log(text);

/*
### 8. Задача +
Раскомментируй одну строчку, чтобы программа вывела в консоль числа 12 и 2 (сначала 12, а затем 2).
- Нельзя изменять строки с объявлением переменных.
- Нельзя изменять строки отвечающие за вывод в консоль.
- Нужно раскомментировать одну строку и не менять остальные.
*/

// let x = 2;
// let y = 12;
// // y = x * y; 
// y = x + y;
// x = y - x;
// y = y - x;
// console.log(x);
// console.log(y);

/*
### 9. Задача +
Закомментируй ненужные строки кода, чтобы в консоль вывелась надпись: 2 плюс 3 равно 5
Примечание: комментировать строки с объявлением переменных let a и let b нельзя.
- Нельзя изменять строки с объявленными переменными let a и let b.
- Нужно закомментировать хотя бы одну строку.
- Нельзя изменять или добавлять команды, отвечающие за вывод, только комментировать.
*/

// let a = 3;
// let b = 2;

// //console.log("два");
// console.log(b);
// console.log(" плюс ");
// //console.log(" минус ");
// console.log(a);
// //console.log("три");
// console.log(" равно ");
// //console.log(" будет ");
// //console.log("пять");
// console.log(a + b);


/*
### 10. Задача +
Пользователь вводит с клавиатуры любое сначала число, а затем текст.
Вывести в консоль в следующем виде: <br>
`Вы ввели текст: <текст пользователя>, вы ввели число: <число пользователя>`
*/

// let numberEnter = Number(prompt("Введите число"));
// let textEnter = prompt("Введите текст");
// console.log("Вы ввели текст: " + textEnter + ", вы ввели число: " + numberEnter);

/*
### 11. ★ Задача ★ +
Что выведется в консоли и почему:
*/


// console.log(numTest); // undefined
// var numTest = 7; // Hoisting
// console.log(numTest); // выведется 7 даже если не коментируем первую строку

// console.log(numberTest); // ошибка, код читается сверху вниз
// let numberTest = 12;
// console.log(numberTest); // выведется 12 если коментируем console.log(numberTest)

// //console.log(PI); // ? ошибка, код читается сверху вниз
// const PI = 3.1415;
// console.log(PI); // выведется 3.1415 если коментируем console.log(PI)



// 2(typeof)

// ### 11. Задача
// Не выполняя код, дать ответ, что выведется в консоль:
// Результат записать в комментарий.

// console.log(typeof "text"); // string
// console.log(typeof "1010"); // string
// console.log(typeof false); // boolean
// console.log(typeof "Pavel"); // string
// console.log(typeof "undefined"); // string

// console.log(typeof -106.432); // number, думал что double или float
// console.log(typeof "null"); // string
// console.log(typeof 111); // number
// console.log(typeof true); // boolean
// console.log(typeof " "); // string



// ### 12. Задача
// Не выполняя код, дать ответ, что выведется в консоль:
// Результат записать в комментарий.

// console.log(typeof Infinity); // чекал что это: положительная бесконечность тип number
// console.log(typeof 200); // number
// console.log(typeof ""); // string
// console.log(typeof "true"); // string
//console.log(typeof null); // object
//null — умышленно созданный «пустой» объект. Единственное значение типа Null.

// console.log(typeof "tester"); // string
// console.log(typeof NaN); // number
// console.log(typeof false); // boolean
// console.log(typeof -Infinity); // number
// console.log(typeof undefined); // undefined