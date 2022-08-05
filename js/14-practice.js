// Задачи по теме 14. Array methods. Part 1

// 1. Задача +

// Написать функцию, которая проверяет является ли переданная переменная массивом.

// const chekArray = array => Array.isArray(array)

// console.log(chekArray([3]));



// 2. Задача +

// Написать функцию, которая проверяет является ли переданная перемнная объектом.



// const chekObject = object => typeof object === "object" && object !== null



// function chekObject(object) {
//     return typeof object === "object" && object !== null
// }

// const test = { s: 5 }
// console.log(chekObject(test));


// 3. Задача +

// Написать функцию, на вход которой подаётся массив и любое количество переменных любого типа. Функция возвращает переданный массив, добавляя в него остальные переданные параметры.

// let s = [1, 2]

// let d = 5
// let y = 9

// const newArray = (array, ...variable) => array.push(...variable) && array

// console.log(newArray(s, d, y, "sfd", 45));

// const newArr = function (array, ...variable) {
//     return array.push(...variable) && array
// }


// 4. Задача -
// Написать функцию, на вход которой подаётся любое количество переменных любого типа. Функция возвращает массив, неповторяющихся элементов. Значение элемента не должен встретиться более 1 раза в вернувшимся массиве.

// const test = 4
// let s = 5
// let f = 6
// let q = 5
// let w = 1



// const uniqueArray = (...params) => {
//     const arr = []

//     for (const el of params) {
//         !arr.includes(el, 0) && arr.push(el)
//     }
//     // Если элемент встретился

//     return arr
// }

// console.log(uniqueArray(test, s, f, q, w));



// function includes2(params) {

// }

// const uniqueArray = (...params) => {
//     let s = []
//     let d = []
//     const arr = []

//     for (let i = 0; i < params.length; i++) {
//         arr.push(params[i])
//     }

//     return arr

// }
// console.log(uniqueArray(test, s, f, q, w));



// TODO: * Если нету функции includes? Реализовать программу



// 5. Задача +

// Написать функцию, на вход которой подаётся 2 массива, функция возвращает новый массив, в котором все элементы двух других массивов.

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const concatArray = (...arrays) => {
//     const newArr = [];
//     return newArr.concat(...arrays)
// }


// console.log(concatArray(arr1, arr2));



// 6. Задача +

// Написать функцию, на вход которой подаётся массив. В массиве могут быть любые типы данных. Функция возвращает число - количество ссылочных типов данных.

// const arr = [2, 3, null, [0, 1], { r: 34, s: 5 }, [], [null], () => { }];

// const countReferenceType = array => {
//     let countRefType = 0;
//     for (const el of array) {
//         if (el !== null && typeof el === "object" || typeof el === 'function') {
//             countRefType += 1
//         }
//     }
//     return countRefType
// }

// console.log(countReferenceType(arr));



// 7. Задача +

// Написать функцию, на вход которой подаётся массив. В массиве могут быть любые типы данных. Функция возвращает число - количество массивов.\


// const arr = [2, 3, null, [0, 1], { r: 34, s: 5 }, [], [null]];

// const countArrays = array => {
//     let countArr = 0;
//     for (const el of array) {
//         Array.isArray(el) && (countArr += 1)
//     }
//     return countArr
// }

// console.log(countArrays(arr));



// 8. Задача +
// FIXME:
// Написать функцию, на вход которой подаётся массив, функция удаляет средний / средние элементы. 
// Например: [3, 4, 7] -> [3, 7] 
// Например: [1, 4, 6, 5] -> [1, 5]
// Например: [1, 4, 7, 6, 5] -> [1, 4, 6, 5]
// Например: [1, 4, 7, 9, 1, 6, 7, 6, 5] -> [1, 4, 7, 9, 6, 7, 6, 5]

// const arr = [1, 4, 7, 9, 1, 6, 7, 6, 5];
// const arrMini = [1, 4, 7, 9, 6, 5];

// const deleteMiddleEl = array => {

//     const middleEl = Math.floor(array.length / 2)
//     const newArr = []

//     // splice
//     if (middleEl % 2 === 0) {
//         for (let i = 0; i < array.length; i++) {
//             i !== middleEl && newArr.push(array[i])
//         }
//     } else {
//         for (let i = 0; i < array.length; i++) {
//             if (i !== middleEl && i !== middleEl - 1) {
//                 newArr.push(array[i])
//             }
//         }
//     }

//     return newArr
// }

// console.log(deleteMiddleEl(arrMini));
// console.log(deleteMiddleEl(arr));


// 9. Задача +

// Написать функцию, которая принимает на вход 2 параметра: массив чисел и 1 числовой пареметр. Если в массиве не содержится значение параметра, то проверка успешна.

// const someNumbers = [3, 4, 6, 1];

// const checkNumInArray = (array, number) => array.includes(number)

// console.log(checkNumInArray(someNumbers, 1));



// 10. Задача +

// Написать функцию, которая принимает на вход 3 параметра.

// Первый параметр - искомый массив;
// Второй параметр значение, которое ищем;
// Третий - слово 'end' или 'start'; Функция возвращает индекс первого встречного значения. Если такого значения не нашлось, то функция возвращает null.

// const numbers = [3, 4, 6, 1, 1];

// const getFirstIndex = (array, searchVallue, endOrStart) => {
//     let countIndex = 0;
//     if (endOrStart === "end") {
//         countIndex = array.lastIndexOf(searchVallue)
//     } else if (endOrStart === "start") {
//         countIndex = array.indexOf(searchVallue, 0)
//     }

//     return countIndex === -1 ? null : countIndex
// }

// console.log(getFirstIndex(numbers, 1, "start"));
// console.log(getFirstIndex(numbers, 1, "end"));



// 11. Задача - + решил 18 задачу и решение от туда пришло сюда, сначала эту не смог сделать

// Написать функцию, которая принимает на вход параметр и массив. Функция удаляет элемент из массива под этим индексом. Функция мутирует переданный массив. Если такого индекса нет, то функция выводит в консоль: Undefined delete item.

// const numbers = [1, 2, 53, 3, 4, 5];

// const deleteElementArr = (array, index) => {
//     array.length <= index ? console.warn('Undefined delete item.') : array.splice(index, 1);
// }


// deleteElementArr(numbers, 6);
// console.log(numbers); // Отладка



// 12. Задача +

// Написать функцию, которая принимает на вход 2 параметра: 1 - массив. 2 - слово 'end' или 'start'. Функция мутирует исходный массив, удаляя либо первый элемент, либо последний.

// const numbers = [1, 2, 53, 3, 4, 5];

// const deleteFirstOrLastEl = (array, startEnd) => {
//     startEnd === "start" && array.splice(0, 1)
//     startEnd === "end" && array.splice(array.length - 1, 1)
//     return array
// }

// console.log(deleteFirstOrLastEl(numbers, "start"));
// console.log(deleteFirstOrLastEl(numbers, "end"));
// console.log(numbers);



// 13. Задача +

// Написать функцию, которая принимает на вход строку. Функция возвращает строку задом наперёд.

// Пример: 
// Jack -> kcaJ
// Memory -> yromeM
// Snickers -> srekcins

// const getReverseString = string => string.split('').reverse().join('')

// console.log(getReverseString("Memory"));



// 14. Задача +

// Написать функцию, на вход которой подаётся строка. Функция возвращает ту же строчку, но удаляя оттуда все знаки восклицания.

// const deletePoint = string => {
//     let newString = "";
//     for (const el of string) {
//         el !== "!" && (newString += el)
//     }
//     return newString
// }

// console.log(deletePoint("Go! and Go!!!"));



// 15. Задача +


// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// const testStr = 'Test string for 15 task!'

// console.log(Array.from(testStr)); // ? новый массив посимвольно
// console.log(testStr.split('')); // ? ничего - не угодал)



// 16. Задача - 

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// const testString = 'Nice... Hello world.'

// console.log(testString.split('.').join('!'));

// // ['Nice', '', '', '  Hello world', '']

// const test1 = 'test er st pr e klmn'

// console.log(test1.split('e')); // ['t', 'st ', 'r st pr ', ' klmn']
// console.log('carrot, milk, bread, eggs, water'.split(', '));




// 17. Задача +

// Написать функцию, на вход можно подать много параметров. Функция из всех этих параметров отбирает только массива и склеивает их в один единый. Функция возвращает получившийся массив. Если нету в переданных параметрах массива, то вернуть null.




// // TODO:
// // ! Concat +
// // ! null



// const getArray = (...rest) => {
//     let newArr = [];
//     for (const el of rest) {
//         if (Array.isArray(el)) {
//             for (const value of el) {
//                 newArr.push(value)
//             }
//         }
//     }
//     return newArr
// }


// const getArray = (...rest) => {
//     let newArr = [];
//     for (const el of rest) {
//         if (Array.isArray(el)) {
//             newArr = newArr.concat(el)
//             console.log(newArr);
//         }
//     }
//     return newArr.length ? newArr : null
// }
// console.log(getArray(120, "string"));



// 18. Задача +

// Написать функцию, на которой подаётся массив и число. Функция возвращает новый обрезанный массив, начиная с элемента под тем номером, который передали в функцию и заканчивая всегда последним элементом. Если указали некорректный номер элемента, то вернуть null.

// const numbers = [1, 2, 53, 3, 4, 5];

// const getArr = (array, number) => {
//     return array.length <= number ? null : array.splice(number, array.length);
// }

// console.log(getArr(numbers, 6));



// ★ Задачи повышенной сложности ★

// ★ 19. Задача ★ + -

// Написать функцию, которая принимает на вход параметры: массив чисел и числовые пареметры. Если в массиве не содержится значения параметров, то проверка успешна.

// const numbers = [1, 2, 3];

// const checkNumberInArray = (array, number) => array.includes(number, 0)

// console.log(checkNumberInArray(numbers, 0));






// ★ 20. Задача ★ +

// Написать функцию, на вход которой подаётся массив и много параметров. Функция возвращает новый массив, скопировав туда все параметры переданного, добавляя по очереди сначала в начало массива элемент, затем в конец, затем снова в начало и т.д. пока не закончатся перадаваемые параметры.

// ПРимер 
// [1]

// [5, 4, 2, 65, 76,]

// [76, 2, 5, 1, 4, 65]

// const numbers = [1];

// const getArray = (array, ...rest) => {
//     const newArr = [];

//     for (const el of array) {
//         newArr.push(el)
//     }

//     for (const key in rest) {
//         if (key % 2 === 0) {
//             for (const el of rest) {
//                 newArr.push(el)
//             }
//         } else {
//             for (const el of rest) {
//                 newArr.unshift(el)
//             }
//         }
//     }
//     return newArr
// }

// console.log(getArray(numbers, 4, 5, 6));



// ★ 21. Задача ★ +

// Написать функцию, на вход которой подаётся строка. Функция возвращает ту же строчку, но удаляя оттуда все перечисленные знаки: .,!?:;

// let s = "sdfsd = .,!?:;";




// const delSymbol = string => {
//     let symbol = ".,!?:;";

//     let newString = "";

//     for (const el of symbol) {
//         if (el !== string) {
//             newString += el
//         }
//     }

//     return newString
// }

// console.log(delSymbol(s));


// (el !== "." && el !== "," && el !== "!" && el !== "?" && el !== ":" && el !== ";"

// ★★ 22. Задача ★★

// Написать функцию, на вход которой подаётся массив и любое количество переменных любого типа. Функция возвращает переданный массив, удаляя из него остальные переданные параметры.




// TODO: *  12-practice: 16 +, 17 +- null не вернул, 8+



// ★ 16. Задача ★ + 

// Написать функцию: (консольная игра "угадай число"). На вход в функцию идёт несколько параметров:

// Диапазон загадываемого числа от до вкл;
// Кол-во попыток;
// Наличие подсказок: true или false;
// Перед тем, как игрок приступает к угадыванию ему сообщается в консоле:

// В каком диапазоне загадано число;
// Сколько есть попыток;
// Включены ли подсказки;
// Механика:

// Число генерируется с помощью метода Math.random(); +

// Пользователя запрашивают через числа prompt(); +

// Подсказки: Если мы не угадали число, то нам подсказывают - загаданное число больше или меньше того, что мы ввели; +

// Кол-во оставшихся попыток выводить в консоль каждый раз, когда мы не угадываем число; +

// После того, как мы угадали число, в консоль выводится: Победа, вы угадали число: <число> и функция прекращает работу;

// После того, как расходуются все попытки, в консоль выводится: Проигрыш, вы не угадали число: <число>;


// !ПОльзователь не видит условие игры +
// ПОльзователь не видит подсказок +
// Пользователь сразу видит ответ +
// ? Возвращает undefined (пусть ничего не возвращает) -
// alert() +
// GПусть сообщает поражение или победа +
// Если поражение, то сообщить. какое было число загадно +

// const fromNumber = 1;
// const upNumber = 6;
// const userLives = 4;
// const help = true;

// guessNumber(fromNumber, upNumber, userLives, help);


// // !TODO: Попробуй сделать в один цикл
// function guessNumber(minNumber, maxNumber, lives, hasHints) {
//     const winNumber = parseInt(Math.random() * (maxNumber - minNumber + 1) + minNumber);
//     const hints = hasHints ? "включены" : "выключены"

//     let countLives = lives;
//     let tip = '';

//     // включены подсказки или нет


//     // сама программа жесть)
//     if (hints) {
//         for (let i = 1; i <= lives; i++) {
//             const userNumber = Number(prompt(`
//                 Введите число в диапазоне от ${minNumber} до ${maxNumber}
//                 Включены ли подсказки: ${hints}
//                 ${tip} 
//                 Сколько есть попыток: ${lives} 
//                 Осталось: ${countLives}`
//             ));
//             countLives -= 1
//             if (winNumber > userNumber) {
//                 tip = "Ваше число меньше загадонного";
//             } else if (winNumber < userNumber) {
//                 tip = "Ваше число больше загадонного";
//             } else if (winNumber === userNumber) {
//                 alert("Победа");
//             }

//             // алерт проигрыша
//             countLives < 1 && alert(`Проигрыш, вы не угадали число: ${winNumber}`)
//         }
//     } else {
//         for (let i = 1; i <= lives; i++) {

//             const userNumber = Number(prompt(
//                 `Введите число:
//                 \nОсталось жизней: ${countLives}
//                 \nВсего попыток: ${lives}`
//             ));

//             countLives -= 1

//             if (winNumber === userNumber) {
//                 alert("Победа");
//             } else if (countLives < 2) {
//                 alert(`Проигрыш, вы не угадали число: ${winNumber}`)
//             }
//         }
//     }
// }