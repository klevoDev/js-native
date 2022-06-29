// 1. Задача +
// Создать массив любой длины, состоящий из чисел. Вывести в консоль количество элементов в массиве.

// const numbers = [23, 2, 34, 234, 5, 6, 234];
// console.log(numbers.length);



// 2. Задача +
// Создать массив любой длины, состоящий из чисел. Вывести в консоль индекс последнего элемента. Код должен работать для массива любой длины.

// const numbers = [23, 2, 34, 234];
// console.log(numbers.length - 1);



// 3. Задача +
// Создать массив любой длины, состоящий из чисел. Вывести в консоль самый первый и последний элементы. Код должен работать для массива любой длины.

// const numbers = [1, 2, 3, 4, 5, 6];
// let firstElement = numbers[0];
// let lastElement = numbers[numbers.length - 1];
// console.log("Превый элемент массива = " + firstElement + ". Последний = " + lastElement + ".");



// 4. Задача +
// Создать массив любой длины, состоящий из чисел. Вывести значение предпоследнего элемента. Код должен работать для массива любой длины.

// const numbers = [1, 2, 3, 4, 5, 6, 23, 54];
// console.log(numbers[numbers.length - 2]);



// 5. Задача +
// Создать массив любой длины, состоящий из строк. Удалить последний элемент. А затем добавить 1 элемент в конец массива со значением new. Вывести в консоль получившийся массив.

// const stringArray = ["1", "2", "3", "4"];
// stringArray.pop();
// stringArray.push("new");
// console.log(stringArray);


// 6. Задача +
// Создать массив любой длины, состоящий из строк. Удалить последний элемент и вывести получившийся массив. Затем вывести значение удалённого элемента.

// const stringArray = ["1", "2", "3", "4", "5"];
// const test = stringArray.pop();
// console.log(stringArray);
// console.log(test);


// 7. Задача +
// Создать массив с любым количеством элементов и любым типом данных внутри. Если элементов больше 5, то вывести в консоль "окей" Иначе ничего не выводить.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// if (numbers.length > 5) { console.log('окей') };

// numbers.length > 5 ? console.log('okey') : null
// numbers.length > 5 && console.log('okey')



// 8. Задача +
// Создать массив любой длины, состоящий из чисел. Если последний элемент чётный, то удалить его из массива, а затем вывести в консоль. В противном случае просто вывести первый элемент массива.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// if (numbers[numbers.length - 1] % 2 === 0) {
//     const deleteItem = numbers.pop()
//     console.log(deleteItem);
// } else {
//     console.log(numbers[0]);
// }



// 9. Задача +
// Дан массив чисел. Вывести массив поэлементно в консоль.

// const numberList = [13, 54, 32];
// for (let i = 0; i < numberList.length; i++) {
//     console.log(numberList[i]);
// }



// 10. Задача +
// Создать массив любой длины, состоящий из чисел. Если значение первого элемента больше значения последнего элемента, то добавить в конец массива текст more, Иначе удалить последний элемент.

// const numberList = [12, 123, 23, 2, 1, 11];

// if (numberList[0] > numberList[numberList.length - 1]) {
//     numberList.push("more")
// } else {
//     numberList.pop()
// }
// console.log(numberList);




// 11. Задача -
// Создать массив любой длины, состоящий из чисел. Добавлять к каждому третьему элементу массива строку: =x3=. Вывести в консоль получившийся массив.

// const test = [23, 43, 54, 2, 5, 2, 3];

// for (let i = 0; i < test.length; i++) {
//     if ((i + 1) % 3 === 0 && i !== 0) {
//         test[i] += '=x3='
//     }
// }
// console.log(test);




// 12. Задача +
// Дан массив чисел. Вывести в консоль элементы массива в столбик в обратном порядке.

// const numberList = [99, 88, 77, 66, 55];
// numberList.reverse();
// for (let i = 0; i < numberList.length; i++) {
//     console.log(numberList[i]);
// }


// for (let i = numberList.length - 1; i >= 0; i--) {
//     console.log(numberList[i]);
// }



// 13. Задача +-
// Создать пустой массив. Заполнить его тремя элементами, которые введёт пользователь с клавиатуры. Вывести в консоль получившийся массив.

// const userArray = [];
// for (let i = 1; i <= 3; i++) {
//     userArray.push(prompt(`Write your number ${i}/3`));
// }
// console.log(userArray);


// 14. Задача + 
// Запросить у пользователя число - кол-во элементов будущего массива. И в зависимости от введённого числа пользователь заполняет с клавиатуры все элементы сам. Вывести в консоль получившийся массив.

// let arrayElements = Number(prompt('Write length array:'));
// const userArray = [];
// for (let i = 1; i <= arrayElements; i++) {
//     userArray.push(prompt(`Write your number ${i}/${arrayElements}`));
// }
// console.log(userArray);




// 15. Задача + -
// Дан массив чисел. Вывести в консоль только положительные значения.

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];
// for (let i = 0; i < numberArray.length; i++) {
//     if (numberArray[i] > 0) {
//         console.log(numberArray[i]);
//     }
// }
// console.log(numberArray);



// 16. Задача + -
// Вывести в консоль самое большое значение из массива.

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];

// let maxValue = numberArray[0];
// for (let i = 1; i < numberArray.length; i++) {
//     if (maxValue < numberArray[i]) {
//         maxValue = numberArray[i]
//     }
// }
// console.log(maxValue);



// console.log(Math.max(...numberArray));


// 17. Задача +
// Вывести в консоль сумму всех чисел массива.

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];
// let sum = 0;
// for (let i = 0; i < numberArray.length; i++) {
//     sum += numberArray[i]
// }
// console.log(sum);



// 18. Задача --
// Вывести в консоль индекс самого минимального значения из массива numberArray.

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];
// console.log(Math.min(...numberArray));


// 19. Задача +
// Вывести в консоль сумму всех чётных чисел массива numberArray.

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];
// let sumEvenNumbers = 0;
// for (let i = 0; i < numberArray.length; i++) {
//     if (numberArray[i] % 2 === 0) {
//         sumEvenNumbers += numberArray[i]
//     }
// }
// console.log(sumEvenNumbers);



// 20. Задача +
// Вывести в консоль сумму всех чисел кратных 3 массива numberArray.

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];
// let sumMultipleThree = 0;
// for (let i = 0; i < numberArray.length; i++) {
//     if (numberArray[i] % 3 === 0) {
//         sumMultipleThree += numberArray[i]
//     }
// }
// console.log(sumMultipleThree);



// 21. Задача +

// Перенести значения, кратные 3 из массива numberArray в массив newArr;

// const numberArray = [-13, 6, 12, -11, 5, 4, 19, 13, -1, 0, 5, -9];
// let newArr = [];

// for (let i = 0; i < numberArray.length; i++) {
//     numberArray[i] % 3 === 0 && numberArray[i] !== 0 ? newArr += numberArray[i] : null
// }
// console.log(newArr);



// 22. Задача +

// Написать программу, которая посчитает количество строк и чисел в массиве varArray. Результат вывести в консоль с подписью, где число строк, а где чисел.

// const varArray = [15, 12, 'text', true, 6, 7, 21, [], false, 0, 1, '', -1, 'world', 'piece'];

// let rowCount = 0;
// let numbersCount = 0;
// for (let i = 0; i < varArray.length; i++) {
//     typeof varArray[i] === "string" ? rowCount += 1 : null
//     typeof varArray[i] === "number" ? numbersCount += 1 : null
// }
// console.log(`В массиве находится ${rowCount} строк и ${numbersCount} чисел.`);



// 23. Задача +

// Написать программу, которая посчитает количество массивов внутри массива testArray.

// const testArray = [11, 17, [18, 10], -5, 7, [], 9, [-1], [4, 5]];
// let arraysCount = 0;
// for (let i = 0; i < testArray.length; i++) {
//     typeof testArray[i] === "object" ? arraysCount += 1 : null;
// }
// console.log(arraysCount);



// 24. Задача +

// Дан массив чисел. Вывести в консоль среднее арифметическое отрицательных элементов массива numberArray.

// const numberArray = [-13, 6, 12, -11, 5, -4, 19, 13, -1, 0, 5, -9];
// let sum = 0;

// for (let i = 0; i < numberArray.length; i++) {
//     numberArray[i] < 0 ? sum += numberArray[i] : null
// }

// console.log(Math.round(sum / numberArray.length));



// 25. Задача +

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// const arr = [3, 7, 4];
// const newArr = arr;
// newArr.push(7);
// console.log(arr); // ?

// [3, 7, 4, 7]

// так как это ссылка на область памяти где хранятся данные, мы не создали новый массив, а сделали новую ссылку для доступа в старый массив.



// 26. Задача

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// const arr = [2, 1, 5]; 

// const newArr = arr;
// arr.pop();

// console.log(newArr); // ?



// 27. Задача

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// const arr = [2, 1, 5]; 
// const newArr = arr;
// const antArr = newArr;

// antArr.unshift(5, 4);

// console.log(arr); // ?
// console.log(newArr); // ?
// console.log(antArr); // ?
// 28. Задача

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// const arr = [6, 9, 3]; 
// const list = arr;

// list[2] = 7;
// arr[4] = 12;

// console.log(arr); // ?
// console.log(list); // ?
// console.log(list.length); // ?
// 29. Задача

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// const arr = [1, 2]; 
// const copyArr = arr;
// const othArr = arr;

// copyArr.push(1, 2);
// othArr.shift();

// console.log(arr); // ?
// console.log(copyArr); // ?
// console.log(othArr); // ?
// 30. Задача

// Дан массив. Написать программу, которая скопирует массив targetList в другую переменную. При изменении скопированного массива (при добавлении, удалении) исходный массив не должен изменяться.

// const targetList = [4, 5, true, 3, 'text', 1, null];
// 31. Задача

// Даны 2 массива, перенести каждый третий элемент из массива basicList в массив everyThreeList. Программа должна работа для массива любой длины.

// const basicList = [-11, 3, 23, -14, 5, 43, 3, 14, -1, 65, 5, -9, 10, 11, 17, 2, 1];
// const everyThreeList = [];
// 32. Задача

// Дан массив чисел, вывести в консоль произведение всех нечётных положительных чисел.

// const numberArray = [-199, 6, 22, -31, 7, -6, 1, 11, -3, 0, 5, -99];
// 33. Задача

// Дан массив чисел, вывести в консоль количество отрицательных чисел.

// const numberList = [-199, 30, 10, 15, -1, -12, 43, 38, -7, 3, 5, -4, -99];
// 34. Задача

// Дан массив чисел, вывести в консоль количество массивов и null.

// const list = [[-199, 30, 10, 15], -1, null, '43', null, [-7, 3, 5], 'null', -99, [], 4, null];
// 35. Задача

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// const arr1 = [3, 4, 5];
// const arr2 = [3, 4, 5];
// console.log(arr1 === arr2); // ?

// const copyArr1 = arr1;
// console.log(copyArr1 === arr1); // ?
