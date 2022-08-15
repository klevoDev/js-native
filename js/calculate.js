// Задача (hard-level)

// ? Создайте функцию calculate. Функция должна принимать арифметические операции двух чисел в виде строки и возвращать строку с результатом их выполнения.

// ? Функция принимает данные из аргумента и возвращает с помощью return. +

// Разбейте ваше решение на функции, отвечающие за разные области.


// Задача, которая состоит из одной функции – не засчитывается!


// ? •	Калькулятор умеет выполнять операции сложения, вычитания, умножения и деления с двумя числами: a + b, a - b, a * b, a / b. Данные передаются в виде одной строки! +


// ? •	Калькулятор умеет работать только с целыми числами.

// ?•	Результат на выходе всегда строка с целым числом. В делении учитываем только целую часть. +

//  ?•	При вводе пользователем неподходящих чисел калькулятор должен бросить error и завершить свою работу. +

// + -•	При вводе пользователем строки, не соответствующей одной из вышеописанных арифметических операций приложение бросить error и завершает свою работу.



// Expression - выражение перевод


const mathExpression = "2 / 50"
// console.log(Number.isInteger(21));

// console.log(mathExpression.split(' ').reverse());

function calculate(string) {

    let a = 0;
    let b = 0;
    let operator = "";

    let result = "";
    // делаем посимвольно
    let stringSplit = string.split(' ')


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

