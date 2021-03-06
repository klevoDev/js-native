// Задачи по теме 12. Number-ext

// 1. Задача

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(Number("0"));// ? 0
// console.log(Number("10"));// ? 10
// console.log(Number(""));// ? 0
// console.log(Number(null));// ? 0
// console.log(Number("  "));// ? 0
// console.log(Number(true));// ? 1
// console.log(Number("  10  "));// ? 10
// console.log(Number("+10"));// ? 10

// console.log(Number("20px"));// ? NaN
// console.log(Number(undefined));// ? NaN
// console.log(Number(false));// ? 0
//console.log(Number(" /10 "));// ? NaN
// console.log(Number("true"));// ? NaN
// console.log(Number("00100"));// ? 100
// console.log(Number(" "));// ? 0
// console.log(Number(" -10 "));// ? -10


// // Унарный
// console.log(+'10');
// console.log(-'10');

// // Бинарный
// console.log(10 + 5);

// // Тернарный
// console.log(10 > 5 ? 4 : 7);




// 2. Задача

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(parseInt("15.5px"));//? 15
// console.log(parseFloat("15.5px"));//? 15.5
// console.log(parseInt(""));//? NaN
// console.log(parseFloat(false));//? NaN
// console.log(parseInt("true"));//? NaN
// console.log(parseInt(null));//? NaN

// console.log(parseInt("0"));//? 0
// console.log(parseFloat("10"));//? 10
// console.log(parseInt(" "));//? NaN
// console.log(parseInt(undefined));//? NaN
// console.log(parseFloat("00200"));//? 200
// console.log(parseFloat("  "));//? NaN



// 3. Задача

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// * 

// console.log(isNaN("10"));//? false
// console.log(isNaN("15.5px"));//? true
// console.log(isNaN(""));//? false
// console.log(isNaN(undefined));//? true
// console.log(isNaN(true));//? false
// console.log(isNaN('22px' - '1px'));//? true

// console.log(isNaN(null));//? false
// console.log(isNaN(false));//? false
// console.log(isNaN(7));//? false
// console.log(isNaN(10 - '3'));//? false
// console.log(isNaN("   "));//? false
// console.log(isNaN("030"));//? false
// console.log(isNaN(94 + '6'));//? false



// 4. Задача

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// console.log((199).toFixed(2));//? "199.00"
// console.log(Math.floor(6.99999));//? 6
// console.log(Math.ceil(50.01));//? 51
// console.log(Math.round(99.9));//? 100
// console.log(Math.max(3, 67, -99, 30, 5));//? 67

// console.log(251.65474.toFixed(3));//? "251.655"
// console.log(Math.floor(33.333));//? 33
// console.log(Math.ceil(5.5));//? 6
// console.log(Math.round(0.0000001));//? 0
// console.log(Math.min(0, 437, -289, -421, 335));//? -421



// 5. Задача

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// console.log((181.12534).toFixed(3));//? "181.125"
// console.log(Math.floor(50.01));//? 50
// console.log(Math.ceil(0.0000001));//? 1
// console.log(Math.round(5.5));//? 6

// console.log(867.654745.toFixed(5));//? "867.65475"
// console.log(Math.floor(99.9));//? 99
// console.log(Math.round(50.01));//? 50
// console.log(Math.ceil(251.45));//? 252


// 6. Задача

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// console.log(.5);
// console.log(1.);

// console.log(300..toFixed(2));//? "300.00"
// console.log(Math.floor(251.655));//? 251
// console.log(Math.ceil(3.99999));//? 4
// console.log(Math.round(251.655));//? 252

// console.log(2351.65474.toFixed(2));//? "2351.65"
// console.log(Math.ceil(99.9));//? 100
// console.log(Math.round(3.99999));//? 4
// console.log(Math.floor(0.0000001));//? 0



// 7. Задача +

// Написать функцию которая возвращает целое случаное число от 0 до 2 не вкл.

// function getRandomInt() {
//     return Math.floor(Math.random() * 4 + 1);
// }

// console.log(getRandomInt());

// 0 ... 0.999999
// 0 ... 1.999999

// [0, 1)   // * 4
// [0, 4)   // + 3
// [3, 7)   // + 3 +

// [3, 6]



// 8. Задача +

// Написать функцию, на вход которой подаётся строка с размерностью (px, rem, em, cm, pt ...). Функция возвращает число, убирая размерность.

// function delDimension(someDdimension) {
//     return parseFloat(someDdimension)
// }

// console.log(delDimension(`12px`));



// 9. Задача +

// Написать функцию которая возвращает целое случаное число от 1 до 10 не вкл.

// 0 1) * (max - min)
// 0 8) + min
// 2 10) 



// function randIntOneToTen() {
//     const min = 1
//     const max = 10
//     return parseInt(Math.random() * (max - min) + min)
// }

// console.log(randIntOneToTen());
// console.log(randIntOneToTen());
// console.log(randIntOneToTen());
// console.log(randIntOneToTen());
// console.log(randIntOneToTen());
// console.log(randIntOneToTen());
// console.log(randIntOneToTen());
// console.log(randIntOneToTen());
// console.log(randIntOneToTen());
// console.log(randIntOneToTen());
// console.log(randIntOneToTen());


// FIXME:
// 10. Задача +

// Написать функцию которая возвращает целое случаное число от 1 до 10 вкл.

// const min = 2
// const max = 10

// function getRandomInt(minInt, maxInt) {
//     return parseInt(Math.random() * (maxInt - minInt + 1) + minInt)
// }
// function getRandomInt(minInt, maxInt) {
//     return parseInt(Math.random() * (max + 1 - min) + min)
// }

// console.log(getRandomInt(min, max));
// console.log(getRandomInt(min, max));
// console.log(getRandomInt(min, max));
// console.log(getRandomInt(min, max));
// console.log(getRandomInt(min, max));
// console.log(getRandomInt(min, max));
// console.log(getRandomInt(min, max));
// console.log(getRandomInt(min, max));
// console.log(getRandomInt(min, max));
// console.log(getRandomInt(min, max));
// console.log(getRandomInt(min, max));



// 11. Задача +

// Написать функцию, которая переводит метры с сантиметры. На вход в функцию подаётся строка с числом метров: 3.5m. Функция возвращает строку с количество сантиметров: 350cm.

// const roadLength = "3.5m";

// function getСentimeters(numberMeters) {
//     return `${parseFloat(numberMeters) * 100}cm.`
// }

// console.log(getСentimeters(roadLength));



// 12. Задача +

// Написать функцию которая возвращает целое случаное число в диапазоне от a, до b. Два числа подаются на вход в функцию. Где a < b. Если это условие не выполняется, то возвращается null.

// function getRandomInt(minInt, maxInt) {
//     return minInt < maxInt ? parseInt(Math.random() * (maxInt - minInt + 1) + minInt) : null
// }
// console.log(getRandomInt(1, 5));
// console.log(getRandomInt(1, 13));
// console.log(getRandomInt(1, 500));
// console.log(getRandomInt(10, 5));
// console.log(getRandomInt(112, 5));



// 13. Задача +

// ### 13. Задача
// Написать функцию, на вход которой подаётся нецелое число и строка (режим округления):
// - В большую сторону (more);
// - В меньшую сторону (less);
// - Как в математике (math);
// Функция возвращает округлённое число.


// const more = "more";
// const less = "less";
// const math = "math";

// function getInt(notInteger, roundMode) {
//     if (roundMode === more) {
//         return Math.ceil(notInteger)
//     } else if (roundMode === less) {
//         return Math.floor(notInteger)
//     } else if (roundMode === math) {
//         return Math.round(notInteger)
//     }
// }

// console.log(getInt(5.6, math));


// 14. Задача +

// Создать массив и заполнить его случайными числами (random) в диапазоне от 1 до 5 не вкл. Количество элементов в массиве - 10 шт. Далее выполнять задачи по очереди:

// const array = [];

// for (let i = 0; i < 10; i++) {
//     array.push(parseInt(Math.random() * (5 - 1) + 1))
// }
// console.log(array);
// console.log('\n');

// FIXME:
// // Вывести массив в терминал в строчку;

// for (const el of array) {
//     console.log(el);
// }
// console.log('\n');



// // Посчитать количество троек и вывести в консоль;

// let countThree = 0;
// for (const el of array) {
//     el === 3 && (countThree += 1);
// }

// console.log(countThree);
// console.log('\n');

// // Затем заменить все единицы на тройки, а 5 - на единицы; // ? ловушка с пятеркой?

// for (let i = 0; i < 10; i++) {
//     array[i] === 1 && (array[i] = 3)
// }



// console.log(array);
// // Посчитать кол-во единиц и вывести в консоль;

// let countUnits = 0;

// for (const el of array) {
//     el === 1 && (countThree += 1);
// }

// console.log(countUnits);



// 15. Задача +

// Написать функцию, которая создаёт массив из случайных чисел (random) в заданном (от a до b вкл) диапазоне и заданной длины (l) Если не передать ни один из трёх параметров, то создаётся массив из 10 элементов из случанйых чисел диапазона от 0 до 10 вкл.

// // Example:
// const newRandArr = createRandomArray(5, 0, 1);
// console.log(newRandArr); // Создаёт массив из 5 элементов, заполненных только 0 и 1: [0, 1, 1, 0, 1]


// первая версия была без maxValue = 10

function createRandomArray(arrayLenght = 10, minValue = 0, maxValue = 10) {
    let randomArr = [];
    // if (arrayLenght === undefined && minValue === undefined && maxValue === 10) {
    //     for (let i = 0; i < 10; i++) {
    //         randomArr.push(parseInt(Math.random() * (10 - 0 + 1) + 0))
    //     }
    // } else {
    for (let i = 0; i < arrayLenght; i++) {
        randomArr.push(parseInt(Math.random() * (maxValue - minValue + 1) + minValue))
    }
    // }

    return randomArr
}

// console.log(createRandomArray(5, 0, 5));
// console.log(createRandomArray(2, 1, 10));

// console.log(createRandomArray());




// ★ Задачи повышенной сложности ★

// ★ 16. Задача ★ + - 

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


// !ПОльзователь не видит условие игры
// ПОльзователь не видит подсказок
// Пользователь сразу видит ответ
// ? Возвращает undefined (пусть ничего не возвращает)
// alert()
// GПусть сообщает поражение или победа
// Если поражение, то сообщить. какое было число загадно

console.log(guessNumber(1, 7, 4, true));

function guessNumber(minNumber, maxNumber, lives, trueFalse) {

    let winNumber = 0;
    winNumber = parseInt(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    // console.log(winNumber);

    let countLives = lives;

    let userNumber = 0;
    let hints = "";

    if (trueFalse) {
        hints = "включены"
    } else {
        hints = "выключены"
    }

    console.log(`
    В диапазоне от ${minNumber} до ${maxNumber}; 
    Сколько есть попыток: ${lives}; 
    Включены ли подсказки: ${hints};`);


    if (trueFalse) {

        for (let i = 1; i <= lives; i++) {

            userNumber = Number(prompt(
                `Введите число:
                    \nОсталось жизней: ${countLives}
                    \nВсего попыток: ${lives}`
            ));
            countLives -= 1

            if (winNumber > userNumber) {
                console.log("Ваше число меньше загадонного");
            } else if (winNumber < userNumber) {
                console.log("Ваше число больше загадонного");
            } else if (winNumber === userNumber) {
                return "Победа";
            }

            if (countLives < 1) {
                return `Проигрыш, вы не угадали число: ${winNumber}`
            }
        }
    } else {
        for (let i = 1; i <= lives; i++) {

            userNumber = Number(prompt(
                `Введите число:
                \nОсталось жизней: ${countLives}
                \nВсего попыток: ${lives}`
            ));
            countLives -= 1
            if (winNumber === userNumber) {
                return "Победа";
            } else if (countLives < 2) {
                return `Проигрыш, вы не угадали число: ${winNumber}`
            }
        }
    }
}







