// Задачи по теме 15. Array methods. Part 2 (callback - HOF)##

// ? 1. Задача +

// Написать функцию, которая находит индекс первого числа в массиве, кратного 3.

// const someNumbers = [1, 2, 3, 4, 5]

// function getIndex(list) {
//     return list.findIndex((value) => value % 3 === 0)
// }

// console.log(getIndex(someNumbers));



// ? 2. Задача +

// Написать функцию, которая находит индекс первого имени в массиве, длина которого больше 5.

// const nameList = ["Sergo", "Max", "Alexander", "Dmitriy", "Tony"]

// function getIndexName(array) {
//     return array.findIndex((value) => value.length > 5)
// }

// console.log(getIndexName(nameList));



// ? 3. Задача почему не 0? -

// Написать функцию, которая находит индекс первого булевого true из массива любых типов данных.

// const arr = [null, 3, null, [0, 1], { r: 34, s: 5 }, [], true, [null], () => { }];

// function getIndex(array) {
//     return array.findIndex((v) => v === true)
// }

// // function getIndex(array) {
// //     return array.findIndex((v) => { return v === true })
// // }

// console.log(getIndex(arr));




// ? 4. Задача +

// Написать функцию, которая ищет среди массива чисел первое встречное отрицательное число.

// const someNumbers = [1, 2, 3, 4, 5, -3, 4, 4, 43, 6, 45, -7]

// function getNegativeNumber(array) {
//     return array.find(value => value < 0);
// }

// const result = getNegativeNumber(someNumbers);
// console.log(result);








// ? 5. Задача +

// Написать функцию, которая ищет среди массива имен первое встречное имя с длиной строки менее 4.

// const someNumbers = ["Sergo", "Max", "Alexander", "Dmitriy", "Tony"]

// function getIndexName(array) {
//     return array.find(el => el.length < 4);
// }

// console.log(getIndexName(someNumbers));




// ? 6. Задача +

// Написать функцию, которая мутирует массив, заменяя все чётные числа на 777.

// const someNumbers = [543, 2543, 3674, 432, 544, 543]

// function getArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] % 2 === 0 && (array[i] = 777)
//     }
// }

// function getArray(array) {
//     for (const el of array) {
//         el % 2 === 0 && (el = 777)
//     }
// }


// function getArray(array) {
//     array.forEach((el, i, array) => {
//         el % 2 === 0 && (array[i] = 777)
//     });
// }

// getArray(someNumbers);
// console.log(someNumbers);



// ? 7. Задача +

// Написать функцию, которая мутирует массив, заменяя все строки на число 0.

// const someNumbers = [1, 2, 3, 4, "test", 5, "go"]

// function getArray(array) {
//     array.forEach((el, index, array) => {
//         typeof el === "string" && (array[index] = 0)
//     });

// }

// getArray(someNumbers);
// console.log(someNumbers);


// ? 8. Задача +

// Написать функцию, которая возвращает массив с четными индексами.



// const userList = [
//     { age: 20, name: 'ALex' },
//     { age: 10, name: 'alex' },
//     { age: 110, name: 'Pavel' },
//     { age: 8, name: 'Oksana' },
//     { age: 15, name: 'Dima' },
//     { age: 45, name: 'Lexus' },
//     { age: 95, name: 'Deda' },
// ]

// function getArr(array) {
//     array.forEach((el, index) => { index % 2 === 0 && console.log(index) })
// }



// function getArr(array) {
//     array.forEach((el, index) => {
//         return index % 2 === 0 && console.log(index)
//     })
// }



// getArr(userList)



// ? 9. Задача +

// Написать функцию, которая возвращает из массива чисел массив со всеми чётными числами.

// const someNumbers = [1, 2, 3, 4, 5]

// function getEvenNumbers(array) {
//     return array.filter((numbers) => numbers % 2 === 0)
// }

// console.log(getEvenNumbers(someNumbers));



// ? 10. Задача +

// Написать функцию, которая возвращает из массива строк все строки, которые написаны строго в нижнем регистре (Если хотя бы одна буква большая, то такое слово не подходит).

// const arr = ["Rty", "test", "5", "Go"]

// function getArrayString(array) {
//     return array.filter(el => el === el.toLowerCase());
// }

// console.log(getArrayString(arr));



// ? 11. Задача +

// Дан массив пользователей. 
// а) Написать функцию, которая возвращает из массива пользователей всех, чьё имя длинее 6 символов; 
// и)
// б) Написать функцию, которая возвращает из массива пользователей всех, чей возраст выше 20;

// const userList = [
//     { age: 20, name: 'ALex' },
//     { age: 10, name: 'alex' },
//     { age: 110, name: 'Pavel' },
//     { age: 8, name: 'Oksana' },
//     { age: 15, name: 'Dima' },
//     { age: 45, name: 'Lexusss' },
//     { age: 95, name: 'Deda' },
// ]

//a)
// function getLongName(array) {
//     return array.filter((user) => user.name.length > 6)
// }

// console.log(getLongName(userList));

//б)
// function getLongName(object) {
//     return object.filter((el) => el.age > 20)
// }

// console.log(getLongName(userList));



// ? 12. Задача +

// Написать функцию, которая выводит переданный массив в консоль в красивой форме: 
// элемент №{} значение: {}

// const arr = ["Rty", "test", "5", "Go"];

// function getBeautifullArray(array) {
//     array.forEach((value, index) => { console.log(`элемент № ${index} значение: ${value}`) });
// }

// getBeautifullArray(arr);



// ? 13. Задача +

// Написать функцию, на вход которой подаётся массив чисел, функция возвращает другой массив с индексами всех чётных чисел.

// const someNumbers = [1, 2, 3, 4, 5]

// function getIndex(array) {
//     const arr = []
//     array.forEach((el, i) => {
//         el % 2 === 0 && arr.push(i)
//     })
//     return arr
// }


// console.log(getIndex(someNumbers));



// ? 14. Задача + от сюда

// Написать функцию, на вход которой подаётся массив, которая добавляет ко всем элементам массива префикс "ext-", не мутируя исходный, а возвращает новый массив.

// const someNumbers = [1, 2, 3, 4, 5]

// function getArr(array) {
//     return array.map((el, i, array) => array[i] + "ext-")
// }

// console.log(getArr(someNumbers));
// console.log(someNumbers);



// ? 15. Задача +

// Написать функцию, на вход которой подаётся массив, функция возвращает новый массив из чётных чисел, которые были во входном массиве.

// const someNumbers = [1, 2, 3, 4, 5];

// function getArr(array) {
//     return array.filter((el) => el % 2 === 0)
// }

// const evenArr = getArr(someNumbers);
// console.log(evenArr);



// ? 16. Задача

// Написать функцию, которая находит первое положительное число в переданном массиве.




// ? 17. Задача

// Написать функцию, на вход которой подаётся массив чисел, которая возвращает массив, в котором все числа уменьшаются в 2 раза.

// ? 18. Задача

// Написать функцию, на вход которой подаётся массив строк, функция возвращает массив чисел - длины строк каждого слова из исходного массива. Например:

// ['leg', 'pony', 'dog'] -> [3, 4, 3]
// ? 19. Задача

// Написать функцию, на вход которой подаётся массив чисел, функция увеличивает в 10 раз все числа в массиве, но не мутирует его, а возвращает новый.

// ? 20. Задача

// Написать функцию, которая считает количество нечётных чисел в массиве.

// ? 21. Задача

// Написать функцию, на вход которой подаётся массив чисел, функция возвращает истину, если все числа в массиве чётные.

// ? 22. Задача

// Написать функцию, которая считает сумму всех отрицательных чисел.

// ? 23. Задача

// Написать функцию, которая возвращает наибольшее и наименьшее число из переданного массива. (функция возвращает объект с двумя свойствами)

// ? 24. Задача

// Написать функцию, на вход которой подаётся массив чисел, функция возвращает true, если в массиве есть нашлось число, которое делится на 17.

// ? 25. Задача

// Написать функцию, на вход которой подаётся массив чисел, функция возвращает массив из отрицательных чисел.

// ? 26. Задача

// Написать функцию, которая принимает на вход массив чисел, функция мутирует исходный массив - сортируя его в порядке возрастания.

// ? 27. Задача

// Написать функцию, которая мутирует входный массив, заменяя всё чётные числа на слово 'even'.

// ? 28. Задача

// Написать функцию, которая возвращает индекс первого встречного отрицательного числа.

// ? 29. Задача

// Написать функцию, которая мутирует входной массив строк, заменяя все строки на их длину.

// ? 30. Задача

// Написать функцию, которая принимает на вход массив чисел, функция возвращает отсортированный массив чисел в порядке убывания. Но не мутирует исходный массив.