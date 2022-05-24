// ## Задачи по теме 7. Cycle ##

// ### 1. Задача
// Вывести 5 раз любую фразу в консоль, пользуясь циклами.
// Сделать эту задачу 3 способами:
// - цикл for;
// - цикл while;
// - цикл do-while;

// let offer = "";
// for (let i = 0; i < 5; i++) {
//     offer = "Повтроим?)"
//     console.log(offer);
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
// Вывести в консоль, пользуйтесь переменной star:

// ```
// const star = '*';
// ```

// ```
// O
// OOO
// OOOOO
// OOOOOOO
// ```


// const star = "0";
// let result = "";
// for (let i = 0; i < 7; i++) {
//     result += star;
//     if (result === "00") {
//         continue
//     } else if (result === "0000") {
//         continue
//     } else if (result === "000000") {
//         continue
//     }
//     result += star; // тут поставил склеивание, но только до двух доходил 00?
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