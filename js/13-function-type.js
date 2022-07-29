// * ===== Function Type ===== * //

// * Function Declaration (FD)

console.log(sum(10, 5));

function sum(a, b) {
    return a + b;
}

console.log(sum(10, 5));



// * Function Expression (FE)
// console.log(sum2(17, 3)); // Refference Error

const sum2 = function (a, b) {
    // console.log(arguments);
    return a + b;
};


console.log(sum2(17, 3));


// * Arrow Function (AF)
// console.log(sum3(20, 30)); // Refference Error

const sum3 = (a, b) => {
    return a + b
}

console.log(sum3(20, 30));

// * Only AF
// Написать функцию, которая првоеряет число на чётность

const isEven1 = (num) => {
    return num % 2 === 0
}
const isEven2 = num => {
    return num % 2 === 0
}
const isEven = num => num % 2 === 0

console.log(isEven(11));


const sum4 = (a, b) => a + b

// 1. Если один параметр, то скобки входные писать необязательно
// 2. Если возвращаемое выражение могу записать в одну строчку, то писать фигурные скобки и return необязательно

// * argumnets отсутствует у стрелочной функции, используется rest-оператор
// rest-оператор - остаточный оператор

// Написать функцию, которая считает сумму всех чисел

const summer = (str, ...rest) => {
    // Внутри функции относимся к rest, как к массиву
    console.log(rest);
    console.log(str);

    let sum = 0
    for (const el of rest) {
        sum += el
    }
    return sum
}

console.log(summer('test', 10, 5, 5, 7546, 765, 7, 657, 5));


// РЕКЛАМА
const summer2 = (...rest) => rest.reduce((prV, v) => prV + v)

console.log(summer2(10, 5, 5, 7546, 765, 7, 657, 5));











// * Дополние, если хочешь вернуть объект, то оберни в круглые скобки