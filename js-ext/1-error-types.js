// Error

// 1. SyntaxError - неверный синтаксис
// Проверяются все сразу. Если есть, то код не запустится вообще

// ==========================
// Если они есть, то программа всё равно запустится:
// (Для того, чтобы их можно было обработать, см. тему try-catch)
// 2. RefferenceError - ошибка в обращении к переменной
// Вызываем до объявления, или обращаемся к несуществующей

// 3. TypeError
// Обращаемся к примитивам, как в функиям
// Обращаемся к undeifned, как к объекту


let j = 10
// console.log(k);
let i = 10


console.log(j[0]);
// i()

console.log(i);

test()
function name(params) {
    params[0]
}
function test(params) {
    name(params)
}
