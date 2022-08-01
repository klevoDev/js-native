// Задачи по теме 14. Array methods. Part 1

// 1. Задача +

// Написать функцию, которая проверяет является ли переданная переменная массивом.

// const chekArray = array => Array.isArray(array)

// console.log(techekArrayst(3));



// 2. Задача +

// Написать функцию, которая проверяет является ли переданная перемнная объектом.

// let test = { s: 5 }

// const chekObject = object => typeof object === "object" && object !== null

// console.log(chekObject(test));



// 3. Задача +

// Написать функцию, на вход которой подаётся массив и любое количество переменных любого типа. Функция возвращает переданный массив, добавляя в него остальные переданные параметры.

// let s = [1, 2]

// let d = 5
// let y = 9

// const newArray = (array, ...variable) => array.push(...variable) && array

// console.log(newArray(s, d, y, "sfd", 45));



// 4. Задача -
// Написать функцию, на вход которой подаётся любое количество переменных любого типа. Функция возвращает массив, неповторяющихся элементов. Значение элемента не должен встретиться более 1 раза в вернувшимся массиве.

// const test = 4
// let s = 5
// let f = 6
// let q = 5
// let w = 1

// const uniqueArray = (...property) => {
//     const uniqueArr = property;
//     console.log(uniqueArr);

//     for (const el of property) {
//         if (el !== property) {
//             uniqueArr.push(el)
//         }
//     }

//     return uniqueArr
// }

// console.log(uniqueArray(test, s, f, q, w));


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

// const arr = [2, 3, null, [0, 1], { r: 34, s: 5 }, [], [null]];

// const countReferenceType = array => {
//     let countRefType = 0;
//     for (const el of array) {
//         if (el !== null && typeof el === "object" || typeof value === 'function') {
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

// Написать функцию, на вход которой подаётся массив, функция удаляет средний / средние элементы. Например: [3, 4, 7] -> [3, 7] Например: [1, 4, 6, 5] -> [1, 5]


// const arr = [2, 3, null, [0, 1], { r: 34, s: 5 }, [], [null], 6, 8];

// const deleteMiddleEl = array => array.splice(1, array.length - 2) && array

// console.log(deleteMiddleEl(arr));



// 9. Задача +

// Написать функцию, которая принимает на вход 2 параметра: массив чисел и 1 числовой пареметр. Если в массиве не содержится значение параметра, то проверка успешна.

// const someNumbers = [3, 4, 6, 1];

// const checkNumInArray = (array, number) => array.includes(number, 0)

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

//     countIndex === -1 && (countIndex = null)
//     return countIndex
// }

// console.log(getFirstIndex(numbers, 1, "start"));
// console.log(getFirstIndex(numbers, 1, "end"));



// 11. Задача - + решил 18 задачу и решение от туда пришло сюда, сначала эту не смог сделать

// Написать функцию, которая принимает на вход параметр и массив. Функция удаляет элемент из массива под этим индексом. Функция мутирует переданный массив. Если такого индекса нет, то функция выводит в консоль: Undefined delete item.

// const numbers = [1, 2, 53, 3, 4, 5];

// const deleteElementArr = (array, index) => {
//     return array.length <= index ? console.log('Undefined delete item.') : array.splice(index, 1);
// }


// deleteElementArr(numbers, 0);
// console.log(numbers);



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
// console.log(testStr.split('')); // ? ничего - угодал)



// 16. Задача - 

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// const testString = 'Nice... Hello world.'

// console.log(testString.split('.').join('!'));



// 17. Задача +

// Написать функцию, на вход можно подать много параметров. Функция из всех этих параметров отбирает только массива и склеивает их в один единый. Функция возвращает получившийся массив. Если нету в переданных параметрах массива, то вернуть null.

// const numbers = [1, 2, 3];
// const test = [4, 5];
// const test2 = 120;
// const test3 = "string";


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

// console.log(getArray(numbers, test, test2, test3));



// 18. Задача +

// Написать функцию, на которой подаётся массив и число. Функция возвращает новый обрезанный массив, начиная с элемента под тем номером, который передали в функцию и заканчивая всегда последним элементом. Если указали некорректный номер элемента, то вернуть null.

// const numbers = [1, 2, 53, 3, 4, 5];

// const getArr = (array, number) => {
//     return array.length <= number ? null : array.splice(number, array.length);
// }

// console.log(getArr(numbers, 3));



// ★ Задачи повышенной сложности ★

// ★ 19. Задача ★

// Написать функцию, которая принимает на вход параметры: массив чисел и числовые пареметры. Если в массиве не содержится значения параметров, то проверка успешна.

// ★ 20. Задача ★

// Написать функцию, на вход которой подаётся массив и много параметров. Функция возвращает новый массив, скопировав туда все параметры переданного, добавляя по очереди сначала в начало массива элемент, затем в конец, затем снова в начало и т.д. пока не закончатся перадаваемые параметры.

// ★ 21. Задача ★

// Написать функцию, на вход которой подаётся строка. Функция возвращает ту же строчку, но удаляя оттуда все перечисленные знаки: .,!?:;