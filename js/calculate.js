// Создайте функцию calculate. Функция должна принимать арифметические операции двух чисел в виде строки и возвращать строку с результатом их выполнения.

// ? Функция принимает данные из аргумента и возвращает с помощью return. +

// Разбейте ваше решение на функции, отвечающие за разные области.

// Задача, которая состоит из одной функции – не засчитывается!

// •	Калькулятор умеет выполнять операции сложения, вычитания, умножения и деления с двумя числами: a + b, a - b, a * b, a / b. Данные передаются в виде одной строки!
// •	Калькулятор умеет работать как с арабскими (1,2,3,4,5…), так и с римскими (I,II,III,IV,V…) числами.
// •	Калькулятор должен принимать на вход числа от 1 до 10 включительно, не более. На выходе числа не ограничиваются по величине и могут быть любыми.
// •	Калькулятор умеет работать только с целыми числами.
// •	Результат на выходе всегда строка с целым числом. В делении учитываем только целую часть.
// •	Калькулятор умеет работать только с арабскими или римскими цифрами одновременно, при вводе пользователем строки вроде 3 + II калькулятор должен бросить error и прекратить свою работу.
// •	Т.к. в римской системе нет нуля и отрицательных чисел - возвращаем пустую строку.
// •	При вводе пользователем неподходящих чисел калькулятор должен бросить error и завершить свою работу.
// •	При вводе пользователем строки, не соответствующей одной из вышеописанных арифметических операций приложение бросить error и завершает свою работу.


// if (stringSplit !== 3) {
//     a = parseInt(stringSplit)
//     // console.log(stringSplit.split(' '))
// }


// Expression - выражение перевод


const mathExpression = "20 + 50"
// console.log(Number.isInteger(21));

// console.log(mathExpression.split(' ').reverse());

function calculate(string) {

    let a = 0;
    let b = 0;
    let operator = "";

    let result = "";
    // делаем посимвольно

    let stringSplit = string.split(' ')

    if (stringSplit !== 3) {
        a = parseInt(stringSplit)

    }


    // проверяем на количество символов и присваиваем значения из строк
    if (stringSplit.length < 4) {
        a = stringSplit[0];
        b = stringSplit[2];
        operator = stringSplit[1];
    } else {
        throw new Error('Uncorrected action');
    }

    // считаем
    if (Number(a) && Number(b)) {
        const count = {
            '+': (a, b) => parseInt(a) + parseInt(b),
            '-': (a, b) => a - b,
            '*': (a, b) => a * b,
            '/': (a, b) => a / b,
        };
        result = count[operator](a, b);
    } else {
        throw new Error('Uncorrected action AAAA');
    }





    return String(Math.round(result))
}


const answer = calculate(mathExpression);
console.log(answer);
console.log(typeof answer);









// 8 тема 45 задача,






const math = "20+50"

let s = math.split('')

console.log(s);

let number2 = 0;

for (let i = 0; i < s.length; i++) {

    g = s.slice(!isNaN)
}


// Возвращает новую строку, копируя в неё все символы с позиции start до позиции end НЕ ВКЛЮЧИТЕЛЬНО
console.log(g);