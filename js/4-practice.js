// ## Задачи по теме 4. String ##

// ### 1. Задача +
// Вывести в консоль с учётом переноса строки:

// ```
// Это строка?
// “Да!”
// ```

console.log("Это строка?\n“Да!”");



// ### 2. Задача +
// Вывести в консоль: <br>
// `Петр сказал: "Иван учит английский язык".`

console.log("Петр сказал: \"Иван учит английский язык\".");



// ### 3. Задача +
// Воспользуйтесь как можно меньшим количеством конкатенаций:

// let name = "Peter";
// let rareCoins = 3;

// console.log("У" + " " + name + " " + "имеет" + " " + rareCoins + "шт." + " " + "редких монет" + "!");


// console.log("У " + name + " имеет " + rareCoins + "шт. редких монет!");



// ### 4. Задача +
// Пользуясь шаблонными литералами, сделать рефакторинг кода 3 задачи.

// console.log(`у ${name} имеет ${rareCoins}шт. редких монет!`);

// ### 5. Задача +
// Вывести в консоль: <br>
// `Я - строка с "двойными кавычками" внутри "двойных кавычек".`

console.log("Я - строка с \"двойными кавычками\" внутри \"двойных кавычек\".");



// ### 6. Задача +
// Вывести в консоль с учётом переноса строки:

// ```
// FirstLine
//     \SecondLine
// ThirdLine
// ```

console.log("FirstLine\n\t\ SecondLine\nThirdLine");


// ### 7. Задача +
// Исправьте код двумя способами, чтобы он работал:
// - экранирование;
// - одинарные кавычки;

// ```
// const myStr = "<a href="http://www.example.com" target="_blank">Link</a>";
// ```

// const myStr = `<a href="http://www.example.com" target="_blank">Link</a>"`;
// const myStr2 = "\<a href=\"http://www.example.com\" target=\"_blank\">Link</a>\"";
// console.log(myStr);
// console.log(myStr2);



// ### 8. Задача +
// Пользуясь переменными выполнить склеивание: <br>
// `My name is Pavel. I have 1000000 dollars`

// let name = "Pavel";
// let money = 1000000;
// console.log("My name is " + name + ". I have " + money + " dollars");



// ### 9. Задача +
// Получить из строки числовой тип данных. Вывести результат в консоль.


let numberStr = "200";
console.log(Number(numberStr));



// ### 10. Задача +
// Пользуясь приведением типов выполнить сложение двух чисел.


// let number = 21;
// let numberic = "22";
// console.log(number + Number(numberic));



// ### 11. Задача +
// Пользуясь приведением типов выполнить сложение двух чисел.


let number = '200';
let numberic = '22';
console.log(Number(number) + Number(numberic));



// ### 12. Задача +
// Вывести в консоль количество символов в строке strText;


let strText = "Hello world!";
console.log(strText.length);



// ### 13. Задача +
// В переменную tagline нужно записать строку "JustDoIt".
// Используй s1, s2, s3 и конкатенацию строк.

// - Не изменяй значения переменных s1, s2, s3;
// - Для инициализации переменной tagline используй s1, s2, s3 и конкатенацию строк;
// - Программа должна выводить в консоль значение переменной tagline;

let s1 = "Do";
let s2 = "It";
let s3 = "Just";
let tagline = s3 + s1 + s2;
console.log(tagline);



// ### 14. Задача +
// Выполнить задачу 13 с использованием шаблонных литералов.

console.log(`${s3 + s1 + s2}`);



// ### 15. Задача +
// В переменную digits нужно записать строку "60". 
// Используй переменные x, y, z, пустую строку.

// - Не изменяй значения переменных x, y, z;
// - Для инициализации переменной digits используй x, y, z, пустую строку;
// - Программа должна выводить в консоль переменную digits;


// let x = 2;
// let y = 4;
// let z = 0;
// let digits = x + y + String(z);
// console.log(digits);



// ### 16. Задача +
// В переменную digits нужно записать строку "100". Используй переменные x, y, пустую строку.

// - Не изменяй значения переменных x, y, z;
// - Для инициализации переменной digits используй x, y, z, пустую строку;
// - Программа должна выводить в консоль переменную digits;

let x = 5;
let y = 4;
let num1 = x - y;
let num2 = x + y;
let num3 = y - y;
let digits = num1 + num2 + String(num3);
console.log(digits);



// ### 17. Задача +
// В переменную hugeAmount нужно записать число 100500.
// Используй переменные bigAmount, greatAmount и преобразование строки в число.

// - Не изменяй значения переменных bigAmount и greatAmount;
// - Программа должна выводить в консоль переменную hugeAmount;


let bigAmount = "500";
let greatAmount = "100000";
let hugeAmount = Number(bigAmount) + Number(greatAmount);
console.log(hugeAmount);



// ### 18. Задача +
// В консоль выводятся значения трех строк.
// Внеси изменения в код, чтобы вместо значений строк вывелась длина каждой строки.
// Не изменяй значение переменной emptyString.

// ```
// let emptyString = "";
// console.log(emptyString);
// console.log("Oh no!");
// console.log((emptyString + 4 + 3 + "11"));
// ```

let emptyString = "";
console.log(emptyString.length);
console.log("Oh no!".length);
console.log((emptyString + 4 + 3 + "11").length);

// ### 19. Задача + 
// В консоль выводится четыре строки.
// Внеси изменения в код, чтобы все буквы в этих строках стали строчными.
// Не изменяй значения переменных title, degree и career.

let title = "Senior Lead Principal Software Engineer Data Architect";
let degree = "In college, I Majored in Political Science and Minored in Religious Studies.";
let career = "Experienced Team Leader with strong Organizational Skills and a Successful career in Management.";

console.log(title.toLowerCase());
console.log(degree.toLowerCase());
console.log(career.toLowerCase());




// ### 20. Задача +
// Считай с клавиатуры три строки.
// А затем:
// - Выведи на экран третью строку в неизменном виде;
// - Выведи на экран вторую строку, предварительно преобразовав ее к верхнему регистру;
// - Выведи на экран первую строку, предварительно преобразовав ее к нижнему регистру;
// Все три строки нужно вывести в правильном порядке: третья, вторая, первая.

// ```
// > Пример ввода:
// Строка Номер РАЗ
// Вторая строка
// Строка 3

// > Пример вывода:
// Строка 3
// ВТОРАЯ СТРОКА
// строка номер раз
// ```

// let num1 = prompt("Первая строка:");
// let num2 = prompt("Вторая строка:");
// let num3 = prompt("Третья строка:");
// console.log(num3);
// console.log(num2.toUpperCase());
// console.log(num1.toLowerCase());



// ### 21. Задача +
// Запросить у пользователя 2 числа
// Сначала сложить эти два числа, а затем результат умножить на 3
// Вывести в консоль в красивом виде: <br>

// `(10 + 20) × 3 = 90`

// let num1 = Number(prompt("Введите первое число :"));
// let num2 = Number(prompt("Введите первое число :"));
// console.log("(" + num1 + " + " + num2 + ") × 3 = " + (num1 + num2) * 3);