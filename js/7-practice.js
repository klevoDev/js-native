// ## Задачи по теме 7. Cycle ##

// ### 1. Задача
// Вывести 5 раз любую фразу в консоль, пользуясь циклами.
// Сделать эту задачу 3 способами:
// - цикл for;
// - цикл while;
// - цикл do-while;


// for (let i = 0; i < 5; i++) {
//     console.log("Повтроим?)");
// }
// for (let i = 1; i <= 5; i++) {
//     console.log("Повтроим?)");
// }

// for (let i = 5; i >= 1; i--) {
//     console.log("Повтроим?)");
// }
// for (let i = 10; i >= 5; i--) {
//     console.log("Повтроим?)");
// }



// let offer = 5;
// while (offer < 10) {
//     console.log('offerTwo');
//     offer++;
// }

// let offer = 5;
// do {
//     console.log('offerThree');
//     offer--;
// } while (offer > 0)


// ### 2. Задача
// Вывести в консоль: "*******" - 7 звёздочек, пользуясь исключительно переменной star.


// const star = '*';
// let result = "";
// for (let i = 0; i < 7; i++) {
//     debugger
//     result += star;
//     debugger
//     //console.log(result);
//     //debugger
// }
// console.log(result);
// debugger

// star = '*';
// result = "";

// cycle
// 1 iter
// result = result + star
// result = "" + "*"

// result = "*";

// 2 iter
// result = "*" + "*"
// result = "**";



// ### 3. Задача
// Вывести в консоль, пользуйтесь переменной star:

// ```
// const star = '*';
// ```

// ```
// *
// **
// ***
// ```

// const star = "*";
// let starResult = "";
// for (let i = 0; i < 3; i++) {
//     //debugger
//     starResult += star;
//     //debugger
//     console.log(starResult);
//     //debugger
// }



//### 4. Задача
// Вывести в консоль, пользуйтесь переменной circle:

// ```
// const circle = 'O';
// ```

// ```
// O
// OOO
// OOOOO
// OOOOOOO
// ```


// const star = "O";
// let result = "";
// for (let i = 0; i < 7; i++) {
//     result += star;
//     if (result === "OO") {
//         continue
//     } else if (result === "OOOO") {
//         continue
//     } else if (result === "OOOOOO") {
//         continue
//     }
//     console.log(result);
// }



// ### 5. Задача
// Вывести числа в консоль из промежутка от 1 до 20 вкл.

// let num = "";
// for (let i = 1; i < 21; i++) {
//     num += i;
//     debugger
// }
// console.log(num);
// debugger



// ### 6. Задача
// Вывести числа в консоль из промежутка от 3 до 15 не вкл.

// let num = "";
// for (let i = 3; i < 15; i++) {
//     num += i;
//     //debugger
// }
// console.log(num);
// //debugger


// ### 7. Задача
// Вывести числа в консоль из промежутка от 1 до 10 вкл., доклеивая к чётным числам: `even`.

// let result = "";
// for (let i = 1; i < 11; i++) {
//     result = i;
//     if (i % 2 === 0) {
//         result += " even";
//     }
//     console.log(result);
// }



// ### 8. Задача
// Вывести числа в консоль из промежутка от 1 до 10 вкл., доклеивая каждому третьему: `=x3=`.

// let result = "";
// for (let i = 1; i < 11; i++) {
//     result = i;
//     if (i % 3 === 0) {
//         result += "=x3=";
//     }
//     console.log(result);
// }


// ### 9. Задача
// Вывести числа в консоль из промежутка от 1 до 10 вкл., доклеивая к нечётному числу: ` - odd`.

// let result = "";
// for (let i = 1; i < 11; i++) {
//     result = i;
//     if (!(i % 2 === 0)) {
//         result += " - odd=";
//     }
//     console.log(result);
// }



// ### 10. Задача
// Вывести числа в консоль из промежутка от 1 до 10 вкл., доклеивая каждому второму: `=x2=`.

// let result = "";
// for (let i = 1; i < 11; i++) {
//     result = i;
//     if (i % 2 === 0) {
//         result += "=x2=`";
//     }
//     console.log(result);
// }



// ### 11. Задача
// Вывести все числа в консоль из промежутка от 1 до 30 вкл., доклеивая числу, которое делится на 4: `*4*`.

// for (let i = 1; i <= 30; i++) {
//     if (i % 4 === 0) {
//         console.log(i + "*4*");
//     } else {
//         console.log(i);
//     }
// }



// ### 12. Задача
// Вывести все числа в консоль из промежутка от 1 до 30 вкл., доклеивая числу, которое не делится на 4: `=!/4=`.

// for (let i = 1; i <= 30; i++) {
//     if (i % 4 === 0) {
//         console.log(i);
//     } else {
//         console.log(i + "=!/4=");
//     }
// }



// ### 13. Задача
// Выводить только чётные числа в консоль из промежутка от 5 до 30 не вкл.

// for (let i = 5; i < 30; i++) {
//     if (i % 2 === 0) console.log(i);
// }



// ### 14. Задача
// Выводить только нечётные числа в консоль из промежутка от 5 до 30 не вкл.

// for (let i = 5; i < 30; i++) {
//     if (!(i % 2 === 0)) console.log(i);
// }




// ### 15. Задача - номер задачи дубль
// Выводить только каждые 5 чисел из промежутка от 1 до 50 не вкл.

// for (let i = 1; i < 50; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     } else {
//         continue
//     }
// }



// ### 16. Задача
// Вывести промежуток чисел от 1 до 30.
// - Кажому шестому числу добавить `~*~`;
// - Кажому третьему числу добавить `^_^`;
// - Остальным - `???`;

// for (let i = 1; i < 30; i++) {
//     if (i % 6 === 0) {
//         console.log(i + "~*~");
//     } else if (i % 3 === 0) {
//         console.log(i + "^_^");
//     } else {
//         console.log(i + "???");
//     }
// }



// ### 17. Задача
// Запросить у пользователя число. 
// Вывести все чётные числа от 1 до того числа, которое ввёл пользователь с клавиатуры.

// let userNum = Number(prompt("Введите число от 1 до бесконечности :"));
// for (let i = 1; i <= userNum; i++) {
//     if (i % 2 === 0) console.log(i);
// }



// ### 18. Задача
// Вывести числа в столбик от 3 до 21 вкл, добавляя всем символ ` + 5 =`.

// ### 19. Задача
// Запросить у пользователя число, умножить его на 4, вывести выражение в красивом виде: <br>
// `10 x 4 = 40`

// ### 20. Задача
// Вывести столбик из таблицы умножения на число 5, диапазон столбика от 1 до 10 вкл.