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

// for (let i = 3; i <= 21; i++) {
//     console.log(i + " + 5 =");
// }



// ### 19. Задача
// Запросить у пользователя число, умножить его на 4, вывести выражение в красивом виде: <br>
// `10 x 4 = 40`

// let numUser = Number(prompt("Введите число:"))
// console.log(numUser + " x 4 = " + numUser * 4);



// ### 20. Задача
// Вывести столбик из таблицы умножения на число 5, диапазон столбика от 1 до 10 вкл.

// let numberUser = 5;
// for (let i = 1; i <= 10; i++) {
//     let result = numberUser * i;
//     console.log(numberUser + " x " + i + " = " + result);
// }



// ### 21. Задача
// Вывести часть столбика из таблицы умножения на число 6, диапазон столбика от 1 до 10 вкл. 
// При этом столбик должен состоять только из чётных чисел.

// ```
// # Результат должен получиться следующим:
// 2 x 6 = 12
// 4 x 6 = 24
// 6 x 6 = 36
// 8 x 6 = 48
// 10 x 6 = 60
// ```

// let numberUser = 6;
// for (let i = 1; i <= 10; i++) {
//     let result = 6 * i;
//     if (i % 2 === 0) console.log(i + " x " + numberUser + " = " + result);
// }



// ### 22. Задача
// Посчитать сумму всех чисел в диапазоне от 3 до 7 не вкл.

// let result = Number();
// for (let i = 3; i < 7; i++) {
//     result += i;
// }
// console.log(result);



// ### 23. Задача
// Посчитать сумму всех чисел в диапазоне от 5 до 15 не вкл.

// let result = Number();
// for (let i = 5; i < 15; i++) {
//     result += i;
// }
// console.log(result);



// ### 24. Задача
// Посчитать сумму только нечётных чисел в диапазоне от 4 до 12 вкл.

// let result = Number();
// for (let i = 4; i <= 12; i++) {
//     if (!(i % 2 === 0)) result += i;
// }
// console.log(result);



// ### 25. Задача
// Посчитать сумму чисел, кратных 4 в диапазоне от 2 до 26 не вкл.

// let result = Number();
// for (let i = 2; i < 26; i++) {
//     if (i % 4 === 0) result += i;
// }
// console.log(result);



// ### 26. Задача
// Посчитать сумму чисел, кратных 2 в диапазоне от 2 до 10 вкл.

// let result = Number();
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) result += i;
// }
// console.log(result);



// ### 27. Задача
// Посчитать сумму чисел, кратных 12 в диапазоне от 12 до того числа, который пользователь введёт с клавиатуры.

// let numUser = Number(prompt("Введите число:"));
// let result = Number();
// for (let i = 12; i < numUser; i++) {
//     if (i % 12 === 0) result += i;
// }
// console.log(result);



// ### ★ 28. Задача ★ +
// У пользователя запрашиваются числа по одному до тех пор, пока он не введёт ноль.
// Как только пользователь ввёл 0 в консоль выводится сумма квадратов всех считанных чисел.

// ```
// Пример:
// 1 
// -3 
// 5 
// -6 
// -10 
// 13
// Результат: 340
// ```



// решил с помощью блока break на https://learn.javascript.ru/while-for

// let total = 0;
// while (true) {
//     let userNum = +prompt("Введите число:");
//     if (userNum === 0) { break };
//     let squared = userNum * userNum;
//     total += squared
//     console.log(total);
// }



// ### ★ 29. Задача ★ + -
// Запросить у пользователя 2 числа - число a и число b
// Вывести в консоль среднее арифметическое всех чисел из этого от редка от a до b включительно, которые кратны 3.

// ```
// Пример:
// Ввели 2 числа: -5 и 12
// В этом отрезке 6 чисел, которые делятся на 3:
// -3 0 3 6 9 12. Их среднее арифметическое равно 4.5
// ```

// Примечание: <br>
// - Учесть случай, когда промежуток задан неверно (например: 12 и -5);
// - Учесть случай, когда чисел, делящихся на 3 - нет;

// let num1 = Number(prompt());
// let num2 = Number(prompt());
// let sum = Number();
// let count = Number();
// if (num1 > num2) { console.log("Промежуток не верен!") }
// for (let i = num1; i <= num2; i++) {
//     if (i % 3 === 0) {
//         sum += i;
//         count += 1;
//     }
// }
// console.log(sum / count);

// if (num1 > num2) {
//     console.log("Промежуток не верен!");
// } else if (num1 % 3 !== 0) {
//     console.log("Чисел делящихся на 3 - нет");
// } else {
//     console.log(sum / count);
// }



// ### ★★ 30. Задача ★★
// Напишите код, который выводит в консоль все простые числа из интервала от 2 до n (n - вводит пользователь).
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

// ```
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Для n = 10 результат должен быть 2,3,5,7.
// ```







// ### ★★ 31. Задача ★★
// Вывести таблицу умножения от 1 до 5 в таком же формате, как показано снизу.
// Количество пробелов должно соответствовать, чтобы таблицы выглядела красиво.

// ```
//    1  2  3  4  5

// 1  1  2  3  4  5

// 2  2  4  6  8  10

// 3  3  6  9  12 15

// 4  4  8  12 16 20

// 5  5  10 15 20 25
// ```



// ## ★ Задачи на вложенные циклы ★ ## +

// ### ★ 32. Задача ★
// С помощью вложенных циклов и символа `*` нарисуйте:

// ```
// const star = '*';
// ```

// ```
// *
// **
// ***
// ****
// ```

// let star = " ";
// for (let i = " "; i < 4; i++) {
//     star += "*";
//     console.log(star);
// }



// ### ★ 33. Задача ★ -
// С помощью вложенных циклов нарисуйте:

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// for (let n = 1; n < 6; n++) {
//     let s = " ";
//     for (let i = 0; i < n; i++) {
//         s += n + " ";
//     }
//     console.log(s);
// }



// ### ★ 35. Задача ★
// С помощью вложенных циклов и символа `*` нарисуйте:

// ```
// ****
// ***
// **
// *
// ```



// ### ★ 38. Задача ★
// С помощью вложенных циклов нарисуйте:

// ```
//         1
//       2 1
//     3 2 1
//   4 3 2 1
// 5 4 3 2 1 






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


// let s = "";
// let q = 1;
// for (let i = 1; i < 5; i++) {

//     s += i;
//     s += "\n";
//     for (let j = 2; j < 5; j++) {
//         if (i === j) {
//             s += j;
//         }
//     }

// }
// console.log(s);


// 1
// X X
// 3 3 3
// X X X X
// 5 5 5 5 5

// let n = 2;

