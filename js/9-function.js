// * ===== Function ===== * //
// * Function Declaration


// Написать функцию, которая здоровается с тем человеком, которого мы передали на вход в функцию
// Сообщение выводится в консоль


// Имя функции - глагол
// Требования к названию функции такие же, как к переменным

// 1 пример (не возвращает)
function showHelloMes(name) {
    console.log('Hi ' + name + "!");
}
console.log(showHelloMes('Pavel')); // undefined
showHelloMes('Michaelvel')
showHelloMes('Alex')

// 2 пример (функция возващает)
const result = parseInt(3.5);
console.log(result);

const res = parseInt2(3.5)
console.log(res);

function parseInt2(num) {
    return Math.floor(num)
}

// 3 пример (Вычесть 2 числа из первого)

function test(num1, num2, num3 = 0) {
    // let num1 = 10; let num2 = 3; let num3;
    return num1 - num2 - num3
}
console.log(test(10, 3));


// Как написать функцию
// 1. Имя функции (что она делает?)
// show, get, calc, create, change, check(is, has)
// 2. Сколько параметров на вход?
// 3. Есть ли параметр по умолчанию?
// 4. Что функция возвращает? (return - после него функция завершает работу)
// ======================
// 5. Проверка
// 6. Попробовать упростить функцию



const arr = [3, 5, 6]


// Написать функцию, которая добавляет в переданный массив, переданное число


// * 1. Мутриуем исходный массив 
function pushValue(array, value) {
    // Невяно: array = arr, value = 10
    array.push(value)
}

pushValue(arr, 10);

console.log(arr);


// * 2. Создать новый массив (не му)
// Написать функцию, которая вовзаращает массив из чётных чисел
// Числа берутся из переданного массива

function getEvenArr(array) {
    const newArr = [];

    for (const el of array) {
        el % 2 === 0 && newArr.push(el)
    }

    return newArr
}


const evenArray = getEvenArr(arr)
console.log(evenArray);
console.log(arr);



