//## Задачи по теме 1. Variables ##

/*
1. Задача
Перевести название темы на русский язык и закомментировать.

Переменные
*/

/*
### 2. Задача
Создайте многострочный комментарий и поместите следующий текст:
*/
/*
`Тип number может принимать значения от -2e53-1 до 2e53-1 вкл`\
`При этом может иметь значения, как NaN (Not a Number),`\
`Так и бесконечность (Infinity / -Infinity)`
*/

/*
### 3. Задача
Выполнить задачу 1, пользуясь однострочным комментарием.
*/
//переменные

/*
### 4. Задача
Создайте переменную test, чему равно значение этой переменной? Ответ записать в комментарий.
*/

let test; // undefined

/*
### 5. Задача
Создайте переменную num и присвойте ей любое число.
*/

let num = 5;

/*
### 6. Задача
Создайте переменную text и присвойте ей любой текст.
*/

const text = "последняе дз по css очень тяжелое(";

/*
### 7. Задача
Создайте переменную типа boolean
is - ялвяется
has - имеет
*/

let isWheelRound = true;

/*
### 8. Задача
Создайте переменную с именем variable присвойте ей пустое значение.
*/

let variable = null;

/*
### 9. Задача
Создайте константную переменную, которая хранит число e (экспонента).
*/

const EXP = 2.718;
// 2e50 = 2 * 10 ** 50
// EXP - e - 2.718

/*
### 10. Задача
Создайте константную переменную, которая хранит чёрный цвет для css.
*/

const BLACK = "#000";

/*
### 11. Задача
Сделать рефакторинг кода:

```
// Variable declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Variable assignments
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;
```
*/

// Variable declarations
let studlyCapVar;
let properCamelCase;
let titleCaseOver;

// Variable assignments

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/*
### ★ 12. Задача ★
Не выполняя код скажите, что будет если выполнится этот код и почему:

```
var numTest = 10;
var numTest = 15;

let numberTest = 10;
let numberTest = 15;

*/
// присваиваем numTest 10, далее присваиваем 15. Все ок.
/*
var можем переопределять, используя имя уже существующей переменной, что ведет к проблемам в проектах, let же инициализировав один раз уже не можем создать с таким же именем, что защищает нас от ошибок.
*/

var test1 = 10;
var test1 = 17;

// let test2 = 10;
// let test2 = 99;

test2 = 99; // Переопределние


const test3 = 10;
// const test3 = 10;
// test3 = 99;



// 8 типов
// string, number, boolean, undefined, null, symbol, bigint - примитивы
// object - ссылочные типы [Array, Object, Argumnets, Function]
// console.log(typeof (null)); // "object"
// console.log(typeof (function test() {})); // "function"