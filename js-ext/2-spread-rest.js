// * ===== spread - оператор (оператор расширения) ===== * //

// * array *
// 1 задача
const arrayNum = [20, 55, 42, 543, 56, 476, 5]
// [20, 55, 42, 543, 56, 476, 5] -> 20, 55, 42, 543, 56, 476, 5
console.log(Math.max(...arrayNum));
// console.log(Math.max(20, 55, 42, 543, 56, 476, 5));
// console.log(...arrayNum);



// 2 задача - быстрое приведение к типу / Поверхностное копирование
// Array.from()
const divList = document.querySelectorAll('div');
console.log(divList);

console.log(Array.from(divList));
console.log([...divList]); // + Поверхностное копирование]

// 3 задача - склеивание
// ! concat - работает быстрее spread

console.log(arrayNum.concat([3, 5, 6]));
console.log(arrayNum.concat(3, 5, 6));
console.log([...arrayNum, 3, 5, 6, ...[6, 7, 8, 8, 8, 8, 8]]);


// * object *
const user = {
    name: 'Pavel',
    age: 30,
    isAdmin: false
}

// typeError
// console.log(...user); // console.log(name: 'Pavel', age: 30);

// 1 задача
// Быстрое поверхностное копирование
console.log({ ...user });

// 2 задача 
// склеивание объектов
console.log({ isAdmin: true, ...user, });

// ** Нюанс
// Если свойства совпадают, то записывается то, что новее
// То что правее, считается новым


// * ===== rest - оператор (остаточный оператор) ===== * //
// В функциях и деструкторизации

function sum(a, ...params) {
    console.log(a);
    console.log(params);
}

sum(356, 45, 765, 756, 756)



