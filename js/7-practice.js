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
//     if (i % 2 !== 0) {
//         continue
//     }
//     console.log(result);
// }

// const star = "O";
// let result = star;
// let countLine = 4
// for (let i = 0; i < countLine; i++) {
//     if (i === 0) {
//         console.log(result);
//         continue;
//     }

//     result = `${result}${star}${star}`;
//     console.log(result);
// }



// ### 5. Задача
// Вывести числа в консоль в столбик из промежутка от 1 до 20 вкл.


// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }





// ### 6. Задача
// Вывести числа в консоль из промежутка от 3 до 15 не вкл.

// for (let i = 3; i < 15; i++) {
//     console.log(i);
// }



// ### 7. Задача
// Вывести числа в консоль из промежутка от 1 до 10 вкл., доклеивая к чётным числам: `even`.


// for (let i = 1; i <= 20; i++) {
//     let result = i;
//     if (i % 2 === 0) {
//         result += "even";
//     }
//     console.log(result);
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i + "even");
//     } else {
//         console.log(i);
//     }
// }



// ### 8. Задача
// Вывести числа в консоль из промежутка от 1 до 10 вкл., доклеивая каждому третьему: `=x3=`.

// for (let i = 1; i <= 10; i++) {
//     if (i % 3 === 0) {
//         console.log(i + "=x3=");
//     } else {
//         console.log(i);
//     }
// }



// ### 9. Задача
// Вывести числа в консоль из промежутка от 1 до 10 вкл., доклеивая к нечётному числу: ` - odd`.

// for (let i = 1; i <= 10; i++) {
//     if (!(i % 2 === 0)) {
//         console.log(i + " - odd=");
//     } else {
//         console.log(i);
//     }
// }



// ### 10. Задача
// Вывести числа в консоль из промежутка от 1 до 10 вкл., доклеивая каждому второму: `=x2=`.

// for (let i = 1; i < 11; i++) {
//     if (i % 2 === 0) {
//         console.log(i + "=x2=");
//     } else {
//         console.log(i);
//     }
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
//     if (i % 2 === 0) {
//         console.log(i);
//     } else {
//         continue
//     }
// }



// ### 14. Задача
// Выводить только нечётные числа в консоль из промежутка от 5 до 30 не вкл.

// for (let i = 5; i < 30; i++) {
//     if (i % 2 === 0) {
//         continue
//     } else {
//         console.log(i);
//     }
// }


// ### 14. Задача - номер задачи дубль
// Выводить только каждые 5 чисел из промежутка от 1 до 50 не вкл.

// for (let i = 1; i < 50; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     } else {
//         continue
//     }
// }



// ### 15. Задача
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
