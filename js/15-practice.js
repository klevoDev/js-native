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



// ? 3. Задача почему не 0? +

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



// ? 14. Задача +

// Написать функцию, на вход которой подаётся массив, которая добавляет ко всем элементам массива префикс "ext-", не мутируя исходный, а возвращает новый массив.

// const someNumbers = [1, 2, 3, 4, 5]

// function getArr(array) {
//     return array.map((el) => el + "ext-")
//     // return array.map((el, i, array) => array[i] + "ext-")
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



// ? 16. Задача +

// Написать функцию, которая находит первое положительное число в переданном массиве.

// const someNumbers = [-1, -2, -3, 4, 5];

// function getNumber(array) {
//     return array.find((el) => el > 0)
// }

// console.log(getNumber(someNumbers));



// ? 17. Задача +

// Написать функцию, на вход которой подаётся массив чисел, которая возвращает массив, в котором все числа уменьшаются в 2 раза.

// const someNumbers = [1, 2, 3, 4, 5];

// function getArr(array) {
//     return array.map(el => el - 2)
// }

// console.log(getArr(someNumbers));



// ? 18. Задача +

// Написать функцию, на вход которой подаётся массив строк, функция возвращает массив чисел - длины строк каждого слова из исходного массива. Например:

// ['leg', 'pony', 'dog'] -> [3, 4, 3]

// const animals = ['leg', 'pony', 'dog'];

// function getElementLength(array) {
//     return array.map((el) => el.length)
// }

// console.log(getElementLength(animals));



// ? 19. Задача +

// Написать функцию, на вход которой подаётся массив чисел, функция увеличивает в 10 раз все числа в массиве, но не мутирует его, а возвращает новый.

// const someNumbers = [1, 2, 3, 4, 5];

// function getArr(array) {
//     return array.map((el) => el * 10)
// }

// console.log(getArr(someNumbers));



// ? 20. Задача +

// Написать функцию, которая считает количество нечётных чисел в массиве.

// const someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getOddNumbers(array) {
//     return array.reduce((prReturnValue, el) => {
//         return el % 2 !== 0 ? prReturnValue + 1 : prReturnValue
//     }, 0)

// }

// console.log(getOddNumbers(someNumbers));





// ? 21. Задача +

// Написать функцию, на вход которой подаётся массив чисел, функция возвращает истину, если все числа в массиве чётные.

// const someNumbers = [2, 4, 5];

// function chekEvenNumbers(array) {
//     return array.every(el => el % 2 === 0)
// }

// console.log(chekEvenNumbers(someNumbers));



// ? 22. Задача +

// Написать функцию, которая считает сумму всех отрицательных чисел.

// const someNumbers = [-1, 2, 3, 4, -5, -2];

// function getSumOddNumbers(array) {
//     return array.reduce((sum, el) => el < 0 ? sum += el : sum, 0);
// }

// console.log(getSumOddNumbers(someNumbers));



// ? 23. Задача +

// Написать функцию, которая возвращает наибольшее и наименьшее число из переданного массива. (функция возвращает объект с двумя свойствами)

// const someNumbers = [7, 2, 3, 4, 5];

// function gunMaxAndMinNumber(array) {

//     const maxValue = array.reduce((count, el) => {
//         return el > count ? el : count;
//     })

//     const minValue = array.reduce((count, el) => {
//         return el < count ? el : count;
//     })

//     return {
//         maxValue,
//         minValue
//     }
// }

// console.log(gunMaxAndMinNumber(someNumbers));



// ? 24. Задача +

// Написать функцию, на вход которой подаётся массив чисел, функция возвращает true, если в массиве есть число, которое делится на 17.

// const someNumbers = [1, 2, 3, 16, 4, 5];

// function getArray(array) {
//     return array.some(el => el % 17 === 0)
// }

// console.log(getArray(someNumbers));



// ? 25. Задача +

// Написать функцию, на вход которой подаётся массив чисел, функция возвращает массив из отрицательных чисел.

// const someNumbers = [1, 2, 3, -16, 4, -5];

// function getOddArray(array) {
//     return array.filter(el => el < 0)
// }

// console.log(getOddArray(someNumbers));



// ! 26. Задача +

// Написать функцию, которая принимает на вход массив чисел, функция мутирует исходный массив - сортируя его в порядке возрастания.

// const someNumbers = [543, 2543, 3674, 432, 544, 543];

// function getSortArr(array) {
//     return array.sort((a, b) => a - b)
// }

// console.log(getSortArr(someNumbers));


// ? 27. Задача +

// Написать функцию, которая мутирует входный массив, заменяя всё чётные числа на слово 'even'.

// const someNumbers = [543, 2543, 3674, 432, 544, 543]

// function getEvenArray(array) {
//     array.forEach((el, i, arr) => { el % 2 === 0 && (arr[i] = "even") });
// }

// console.log(getEvenArray(someNumbers));
// console.log(someNumbers);


// ? 28. Задача +

// Написать функцию, которая возвращает индекс первого встречного отрицательного числа.

// const someNumbers = [-543, 2543, 3674, 432, 544, 543]

// function getNegativeIndex(array) {
//     return array.findIndex(el => el < 0)
// }

// console.log(getNegativeIndex(someNumbers));



// ? 29. Задача +

// Написать функцию, которая мутирует входной массив строк, заменяя все строки на их длину.

// const someString = ["city", "even", "go", "test"];

// function getArr(array) {
//     array.forEach((el, i, arr) => { arr[i] = el.length });
// }

// getArr(someString);
// console.log(someString);



// ! 30. Задача +

// Написать функцию, которая принимает на вход массив чисел, функция возвращает отсортированный массив чисел в порядке убывания. Но не мутирует исходный массив.

// const someNumbers = [1, 4, 2, 3, 6, 5]

// function getSortArr(array) {
//     const newArr = array.concat([]);
//     newArr.sort((a, b) => b - a)
//     return newArr
// }


// console.log(getSortArr(someNumbers));
// console.log(someNumbers);



// ? 31. Задача +

// Написать функцию, на вход которой подаётся массив чисел, функция возвращает объект с тремя свойствами-массивами:

// массив чётных чисел
// массив отрицательных чисел
// массив чисел, больших 10
// Например:

// Input:
// [3, 6, 7, -43, 34, 6, -98, 45, 432, 65, 876, -76, -8, 56, -7, 76, 45, 6]

// Output:
// {
//     evenArray: [6, 34, 6, -98, 432, 876, -76, -8, 56, 76, 6]
//     negArray: [-43, -98, -76, -8, -7]
//     moreTenArray: [34, 45, 432, 65, 876, 56, 76, 45]
// }

// const arr = [3, 6, 7, -43, 34, 6, -98, 45, 432, 65, 876, -76, -8, 56, -7, 76, 45, 6];


// const getObject = (array) => ({
//     evenArray: array.filter(el => el % 2 === 0),
//     negArray: array.filter(el => el < 0),
//     moreTenArray: array.filter(el => el > 10)
// })

// console.log(getObject(arr));



// ★ Условие для следующих задач:

// Дан массив объектов, выполнить следующие задачи: 
// !Запрещено мутировать исходный массив во всех задачах!
// ! Объекты мутировать можно!

const users = [
    {
        id: 100,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 78
    },
    {
        id: 101,
        name: "Peter",
        age: 13,
        isMarried: false,
        scores: 311
    },
    {
        id: 102,
        name: "John",
        age: 33,
        isMarried: false,
        scores: 0
    },
    {
        id: 103,
        name: "Alex",
        age: 14,
        isMarried: true,
        scores: 121
    },
    {
        id: 104,
        name: "Lila",
        age: 18,
        isMarried: true,
        scores: 999
    },
]


// ? 32. Задача +

// Написать функцию, которая получает из массива объектов - массив имён пользователей.

// Функция возвращает новый массив, не мутируя исходный так, чтобы можно было использоваться этот же массив во всех следующих задачах.

// function getUserName(userList) {
//     return userList.map(el => el.name)
// }

// const userName = getUserName(users)
// console.log(userName);



// ? 33. Задача +

// Написать функцию, которая принимает на вход массив, функция возвращает массив строк вида:


// console.log(
//     `
//     <div>
//         <span>
//             Имя: <значение>
//         </span>
//         <span>
//             Возраст: <значение>
//         </span>
//         <span>
//             Семейное положение: <значение>
//         </span>
//     </div>
//     `
// );

// function getUserBio(array) {

//     array.forEach(el => {
//         userName = el.name
//         userAge = el.age
//         userIsMarried = el.isMarried
//     });

//     return {
//         name: userName,
//         age: userAge,
//         isMarried: userIsMarried
//     }
// }

// const user = getUserBio(users)


// console.log(
//     `
//     <div>
//         <span>
//             Имя: ${user.name}
//         </span>
//         <span>
//             Возраст: ${user.age}
//         </span>
//         <span>
//             Семейное положение: ${user.isMarried}
//         </span>
//     </div>
//     `
// );



// ? 34. Задача +

// Написать функцию, которая принимает на вход массив и имя, функция находит и возвращает объект по имени первого найденного в массиве.

// function getObject(array, name) {
//     return array.find(el => name === el.name && (el.name))
// }

// console.log(getObject(users, "Lila"));



// ? 35. Задача +

// Написать функцию, которая принимает на вход массив, функция возвращает массив пользователей, чьё количество очков выше или равно 100.

// function getLeaderPoint(array) {
//     return array.filter((el) => el.scores >= 100)
// }

// const leaderPoints = getLeaderPoint(users)
// console.log(leaderPoints);



// ? 36. Задача +

// Написать функцию, которая принимает на вход массив, имя, возраст и семейное положение, функция возвращает массив, в котором добавлен новый пользователь.

// Количество очков задать равным 0;
// id сделать случайным целым число в диапазоне от 1000 до 2000 не вкл;

// function getNewUser(array, name, age, isMarried) {

//     const id = parseInt(Math.random() * (2000 - 1000 + 1) + 1000);


//     // 1 скопировать исходный массив
//     // добавить к нему нового пользователя

//     const copyUserList = array.concat([{
//         id,
//         name,
//         age,
//         isMarried,
//         scores: 0
//     }])

//     return copyUserList
// }

// const result = getNewUser(users, "Max", 34, false)
// console.log(users === result);
// console.log(result);



// ? 37. Задача +

// Разрешаю мутировать :)

// Написать функцию, которая принимает на вход массив, функция возвращает массив, добавляя каждому пользователю новое свойство: isTest: true.

// function getObject(array) {
//     const newArr = []
//     array.forEach(el => el["isTest"] = true);
//     return newArr
// }

// getObject(users);
// console.log(users);



// ? 38. Задача +

// Написать функцию, которая принимает на вход массив и id пользователя и новое семейное положение, функция возвращает массив, в котором меняется свойство isMarried на переданное.


// function changeIsMarried(userList, id, isMarried) {

//     const copyUserList = userList.concat([])

//     const user = copyUserList.find((user) => user.id = id)
//     user.isMarried = !user.isMarried

//     return copyUserList

// }
// console.log(changeIsMarried(users, 100, true));



// ? 39. Задача +

// Написать функцию, которая принимает на вход массив и id пользователя, функция возвращает новый массив, удаляя пользователя с переданным id.

// function getDelUser(array, id) {
//     return array.filter(el => el.id !== id)
// }

// console.log(getDelUser(users, 100));


// ? 40. Задача +

// Написать функцию, которая принимает на вход массив, функция возвращает массив совершеннолетних пользователей.

// function getOldUser(array) {
//     return array.filter(el => el.age >= 18)
// }

// console.log(getOldUser(users));



// ! 41. Задача +

// Написать функцию, которая принимает на вход массив, функция возвращает новый массив объектов, отсортированный в порядке увеличения очков.

// function getSortScores(array) {
//     const sortScores = array.concat([]);
//     return sortScores.sort((a, b) => a.scores - b.scores)
// }


// const sortScoresUsers = getSortScores(users);
// console.log(sortScoresUsers === users);
// console.log(sortScoresUsers);



// ? 42. Задача +

// Написать функцию, которая принимает на вход массив, функция возвращает пользователя с самым большим количеством очков.

// function getLederScores(array) {
//     return array.reduce((count, el) => el.scores > count ? el.scores : count, 0)
// }

// console.log(getLederScores(users));




// ! 43. Задача + (еще раз проговорить)

// Написать функцию, которая принимает на вход массив, функция возвращает новый массив объектов, отсортированный в алфавитном порядке имён.

// function sortAlphabet(array) {
//     const newArr = array.concat([]);
//     return newArr.sort((a, b) => a.name > b.name ? 1 : -1)
// }
// console.log(sortAlphabet(users));





// ? 44. Задача +

// Написать функцию, которая принимает на вход массив, функция возвращает сумму всех очков у всех пользователей.

// function getSumScores(array) {
//     return array.reduce((count, el) => count + el.scores, 0)
// }

// console.log(getSumScores(users));



// ! 45. Задача +

// Написать функцию, которая принимает на вход массив, функция возвращает новый массив объектов, отсортированный от самого старшему к самому младшему.

// function getSortAge(array) {
//     return array.sort((a, b) => {
//         return b.age - a.age
//     })
// }

// console.log(getSortAge(users));

// ! 46. Задача +

// Написать функцию, которая принимает на вход массив, функция возвращает новый массив объектов, отсортированный так, что сначала в массиве все женатые/замужние, а все холостяки внизу списка.

// function sortIsMaried(array) {
//     return array.sort((a) => {
//         return a.isMarried ? -1 : 1
//     })
// }

// console.log(sortIsMaried(users));


// ! 47. Задача +

// Написать функцию, которая принимает на вход массив, функция возвращает массив лучших трёх по количеству очков.

// function getTopUsers(array) {
//     const sortArr = array.sort((a, b) => {
//         return b.scores - a.scores
//     })

//     return sortArr.filter((el, i) => i < 3)
// }

// function getTopUsers2(array) {
//     // return array.sort((a, b) => b.scores - a.scores).filter((el, i) => i < 3)
//     return array
//         .concat([])
//         .sort((a, b) => b.scores - a.scores)
//         .slice(0, 3)
// }


// console.log(getTopUsers(users));
// console.log(getTopUsers2(users));

//  48. Задача +

// Написать функцию, которая принимает на вход массив, функция возвращает массив пользователей, чья длина имени больше 4 символов.

// function getLongName(array) {
//     return array.filter(el => el.name.length > 4)
// }

// console.log(getLongName(users));



// ? 49. Задача +

// Написать функцию, которая принимает на вход массив, функция удаляет всех несовершеннолетних пользователей.

// function getOlderEighteen(array) {
//     return array.filter(el => el.age >= 18)
// }

// console.log(getOlderEighteen(users));



// ? 50. Задача +

// Написать функцию, на вход которой подаётся 2 массива пользователей, функция возвращает новый массив, состоящий из всех пользователей двух массивов.

// function concatArrays(arr1, arr2) {
//     return arr1.concat(arr2);
// }

// console.log(concatArrays(users, users));



// ★ Задачи повышенной сложности ★

// ? ★ 51. Задача ★ +

// Написать функцию, которая принимает на вход массив, функция возвращает сумму всех очков у всех пользователей, которые женаты.

// function getSumScoresMarried(array) {
//     return array.reduce((count, el) => el.isMarried ? count + el.scores : count, 0)
// }

// console.log(getSumScoresMarried(users));





// ? ★ 52. Задача ★ +

// Написать функцию, которая принимает на вход массив, функция возвращает сумму всех очков у всех совершеннолетних пользователей.

// function getSumScoresOld(array) {
//     return array.reduce((count, el) => el.age >= 18 ? count + el.scores : count, 0)
// }

// console.log(getSumScoresOld(users));



// ? ★ 53. Задача ★ -

// Написать функцию, которая возвращает первое встречное слово, в котором хотя бы 2 буквы заглавные

// const someString = ["test", "aPple", "OnE", "TEster", "mouse", "1"]

// function getString(array) {
//     let count = 0
//     array.forEach((el, i) => {
//         el[i] === el[i].toUpperCase() && (count += 1)
//         if (count === 2 && el !== el.toLowerCase()) {
//             console.log(el);
//         }
//     });

// }


// console.log(getString(someString));

// ? ★ 54. Задача ★ -

// Написать в функцию, на вход которой подаётся массив чисел Функция должна для каждого элемента этого массива вывести сумму двух его соседей и вернуть этот новый массив. Для элемента массива, являющихся крайними, одним из соседей считается элемент, находящийся на противоположном конце этого массива. Например, если на вход подаётся массив: 1 3 5 6 10, то на выход ожидается новый массив: 13 6 9 15 7 Если на вход пришло одно число, то вывести его же


// ? ★ 55. Задача ★

// Реализовать свои варианты функции hof:


// ? find;
// 

// const someNumbers = [-1, 6, 2, 3, 4, -5, -2];

// function findEven(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             return array[i]
//         }
//     }
// }

// console.log(find(someNumbers, () => {}));




// ? findIndex;

// const someNumbers = [-1, 6, 2, 3, 4, -5, -2];

// function find(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 1) {
//             return array[i]
//         } else {
//             return -1
//         }
//     }
// }

// console.log(find(someNumbers));



// ? map;

// const someNumbers = [-1, 2, 3, 4, -5, -2];

// function getMap(array) {
//     const map = array.concat([]);
//     // тут работем с map, в зависимости от задачи
//     // возвращаем новый массив увеличивая на 10 каждый элемент
//     for (let i = 0; i < map.length; i++) {
//         map[i] += 10;
//     }
//     return map
// }

// const newArr = getMap(someNumbers)
// console.log(newArr);


// ? filter;

// если условие тру, то его и возвращаем в новом массиве

// const someNumbers = [-1, 2, 3, 4, -5, -2];

// function getFilterArr(array) {
//     const filter = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//             filter.push(array[i])
//         }
//     }
//     return filter
// }

// const newArr = getFilterArr(someNumbers)
// console.log(newArr);


// some;
// every;
// reduce;


// 26, 30, 41, 43, 42 из восьмой темы, 45, 46, 47


// ★ 42. Задача ★

// Выполнить сортировку массива array. Четные элементы отправьте в массив arrayEven, а нечетные - в arrayOdd. А если встречается значение 0, то проигнорировать его (Переносить в arrayEven не нужно).

// array = [0, 9, 2, 7, -2, 4, 34, -7, 0, -12, 28, 14, 0, 0, 15, 22, 0];
// const arrayEven = [];
// const arrayOdd = [];

// function scatterArr(array) {
//     array.forEach(el => {
//         el % 2 === 0 && el !== 0 ? arrayEven.push(el) : arrayOdd.push(el)
//     });
// }

// scatterArr(array);
// console.log(arrayEven);
// console.log(arrayOdd);








// calculate('4 + 5') // 9

// console.log('error');
// return 'error'
throw new Error('Uncorrected action');// Бросить ошибку с надписью и программа прекращает работу после этой строчки