// ## Задачи по теме 5. Boolean ##

// ### 1. Задача +
// Не выполняя код, дать ответ: <br>
// Что выведется в консоль? Ответ записать в комментарий. 

// ```
// console.log(100 > 59); // true
// console.log(10 < 7); // false
// ```



// ### 2. Задача +
// Не выполняя код, дать ответ: <br>
// Что выведется в консоль? Ответ записать в комментарий.

// ```
// let num = "10"
// console.log(typeof num === "number");
// ```

// false



// ### 3. Задача +
// Не выполняя код, дать ответ: <br>
// Что выведется в консоль? Ответ записать в комментарий.

// ```
// let text = "Victor"
// console.log(typeof text === "string");
// ```

// console.log(typeof 18);
// console.log("number");

// true



// ### 4. Задача +
// Не выполняя код, дать ответ: <br>
// Что выведется в консоль? Ответ записать в комментарий.

// ```
// let a = 20;
// let b = "20"; 
// console.log(a === b);
// ```

// false



// ### 5. Задача +
// Не выполняя код, дать ответ: <br>
// Что выведется в консоль? Ответ записать в комментарий.

// ```
// let a = 10;
// let b = 20;
// console.log(a !== b);
// ```

// true



// ### 6. Задача +
// Не выполняя код, дать ответ: <br>
// Что выведется в консоль? Ответ записать в комментарий.

// ```
// let c = 55;
// let b = "55";
// console.log(c == b);
// ```

// true



// ### 7. Задача -
// Не выполняя код, дать ответ: <br>
// Что выведется в консоль? Ответ записать в комментарий.

// ```
// console.log(NaN == NaN); //false
// console.log(NaN === NaN); //false
// console.log(false == "false"); // false
// console.log(true == "true"); // true
// console.log(isNaN(10 + "5")); //false


// console.log(isNaN(10 - "5")); // false
// console.log(isNaN(false)); // false
// console.log("" == false); // true
// console.log("0" == false); // true
// console.log(10 == true); // true
// ```



// ### 8. Задача +
// Не выполняя код, дать ответ: <br>
// Что выведется в консоль? Ответ записать в комментарий.

// ```
// console.log(Boolean("")); // false
// console.log(Boolean("false")); // true
// console.log(Boolean(NaN)); // false
// console.log(Boolean(100)); // true
// console.log(Boolean(null)); // false

// console.log(Boolean(-1)); // true
// console.log(Boolean(undefined)); // false
// console.log(Boolean(0)); // false
// console.log(Boolean("0")); // true
// console.log(Boolean(" ")); //true
// ```


// ### 9. Задача +
// Не выполняя код, дать ответ: <br>
// Что выведется в консоль? Ответ записать в комментарий.

// ```
// console.log(null == undefined); // true
// console.log('Кит' < 'Киндер'); // false
// console.log(0 == ""); // true
// console.log('Я' > 'Ю'); // true
// console.log(null == false); // true

// console.log(isNaN(10 - "10") == 1); // false
// console.log("" == false); // true
// console.log(null === undefined); // false
// console.log(17 >= 17); // true
// console.log('U' > 'Z'); // false

// ```


// ### 10. Задача +
// Не выполняя код, дать ответ: <br>
// Что выведется в консоль? Ответ записать в комментарий.

// ```
// console.log(false == 0); // true
// console.log(15 + 5 === "20"); // false
// console.log(15 <= "15"); // true
// console.log("t" == 1); // false
// console.log('2' > 1); // true

// console.log(17 + 3 == 21 - "1"); // true
// console.log(" " == 0); // false
// console.log("05" > 4); // true - пришлось чекать в консоли что с 0
// console.log(100 - 47 == 40 + "13"); // false (склеивание)
// console.log(true == -1); // false
// ```

// ### 11. Задача
// Не выполняя код, дать ответ: <br>
// Что выведется в консоль? Ответ записать в комментарий.

// ```
// console.log(17 + 3 === 20 && 20 - 3 == "17"); // true
// console.log(50 + 50 == "100" || (!false && !NaN && !(27 + 3 === "30"))); // true 
// console.log(Number("100") === 100); // true
// console.log(typeof "" === "String"); // false
// console.log(Number(String(10) + 0) === 100); // true

// console.log(typeof false === "Boolean"); // false
// console.log(50 + String(Number(Boolean(null))) == 500 || false); // true
// console.log(!"" && !null && !(2 + 2 * 2 === 8)); // true
// console.log(5 > 3 && 7 < 10 && 5 == "5"); // true
// console.log(typeof true == "boolean"); // true
// ```

// ### 12. Задача
// Не выполняя код, дать ответ: <br>
// Что выведется в консоль? Ответ записать в комментарий.

// ```
// console.log(true || false); // true
// console.log(false && true); // false
// console.log(false || true && false); // true
// console.log(false && true || true); // true
// console.log(false && true || true && (false || true)); // true

// console.log(6 > 3 || 4 < 1); // true
// console.log(6 >= 6 && 10 < 15); // true 
// console.log(6 > 9 || 5 > 3 && 7 > 4); // true
// console.log(10 != 10 && 5 == 5 || -5 > -9); // true
// console.log(7 >= 9 && 5 == 5 || 7 > 3 && (14 < 10 || 10 > 9)); // true
// ```


// ### 13. Задача + -
// Измените приоритет действий, чтобы в консоль вывелась истина.

// ```
// console.log(72 / 12 + 6 * 4 === 48); // false
// console.log(72 / 12 + 6 * 4 === 30); // true
// console.log(72 / 12 + 6 * 4 === 16); // false
// console.log(72 / 12 + 6 * 4 === 2); // false
// console.log(120 - 40 / 5 - 2 === 224); // false

// console.log(120 - 40 / (5 * 2) === 116); //true
// console.log(120 - (40 / 5) * 2 === 104); //true
// console.log((120 - 40) / 5 * 2 === 32); // true
// console.log(72000 / 800 / (5 + 40) === 2); // true
// console.log(false == null || true == 1 && 0 === ""); // -
// ```

// ## ★ Задачи повышенной сложности ★ ##

// ### 14. ★ Задача ★
// Не выполняя код, дать ответ: <br>
// Что выведется в консоль? Ответ записать в комментарий.

// ```
// const serverLogin = '';
// const answer = serverLogin || 'default log';
// console.log(answer); // 'default log'
// ```

// ### 15. ★ Задача ★
// Не выполняя код, дать ответ: <br>
// Что выведется в консоль? Ответ записать в комментарий.

// ```
// console.log(5 > 3 && 7 < 10 && 5 == "5" || false && "1"); // true
// console.log(5 > 3 && 7 < 10 && 5 == "5" && false || "1"); // true
// console.log(3 && 5 && null && 4 ); // null
// console.log(1 && 0 && 10 && 3 ); // 0
// console.log(1 && 100 && 2 && 0 ); // 0
// console.log(1 && 100 && 2 && 50 ); // 50

// console.log(null || 0 || undefined); // undefined 
// console.log(1 || 0 || true || false); // 1

// console.log(0 || 0 || 0 || 0 || 1); // 1
// console.log((0 || 0 || 2) && ("" || NaN)); // ?
// console.log(null || 0 || false || undefined || "" || -1 || NaN || 1); // true
// ```

// 0 || 1 = 1
// false || true = true
// 5 > 10 || 7 < 10 = true
