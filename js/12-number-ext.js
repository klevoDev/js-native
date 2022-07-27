// * ===== number ===== * //

// Методы и функции чисел

// * Функции
// 1. Number(<any>); // Приводит к типу Number

// 2. parseInt(19.5); // 19 - отбросить дробную часть, а также откинуть текст справа
// console.log(parseInt('19px')); // 19

// 3. parseFloat('19.5px'); // 19.5

// 4. isNaN(<any>); // Проверка на NaN (под капотом приводит сначала к типу Number, а затем проверят на NaN)

// * Методы Number
// 5. <number>.toFixed(n) // округляет число до n знаков после запятой и ВОЗВРАЩАЕТ строку

// console.log(15.645645.toFixed(2));

// * Статические методы Math
console.log(Math);

// 6. Math.floor(<number>) // Округление до целого в меньшую сторону
// 7. Math.ceil(<number>) // Округление до целого в большую сторону
// 8. Math.round(<number>) // Округление до целого в ближайшую сторону (как в математике)

// 9. Math.max(a, b, c, ..., z) // Возвращает наибольшее число
// 10. Math.min(a, b, c, ..., z) // Возвращает наименьшее число

// 11. Math.random() // * Возвращает нецелое псевдослучайное число от 0 вкл до 1 НЕ вкл [0, 1)


// Написать функцию, которая возвращает целое число от min, до max вкл

function randInt(min, max) {
    // const step1 = Math.random(); // [0, 1)
    // const step2 = step1 * (max - min + 1); // [0, max - min + 1)
    // const step3 = step2 + min; // [0 + min, max + min - min + 1) // [min, max + 1)

    // return Math.floor(step3)

    return parseInt(Math.random() * (max - min + 1) + min)
}

console.log(randInt(3, 7));
console.log(randInt(3, 7));
console.log(randInt(3, 7));
console.log(randInt(3, 7));
console.log(randInt(3, 7));
console.log(randInt(3, 7));
console.log(randInt(3, 7));
console.log(randInt(3, 7));
console.log(randInt(3, 7));
console.log(randInt(3, 7));


