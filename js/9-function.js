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
// 4. Что функция возвращает? (return)
// ======================
// 5. Проверка
// 6. Попробовать упростить функцию




