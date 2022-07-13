//3 тема - js(Числовой тип)



// 1. Математические действия: +
// Сложение / вычитание / умножение / деление /
//     деление по модулю / возведение в степень
let monday = 1 + 1;
let tuesday = 3 - 3;
let wednesday = 3 * 3;
let thursday = 60 / 5; //  12
let friday = 24 % 5; // 1
let saturday = 5 ** 3; // 125
console.log(monday, tuesday, wednesday, thursday, friday, saturday);



// 2. Как получить целое число при делении ? + 
// parseInt()
// ПОлучить целое при деления без этих функций


let s = Math.floor(7 / 3);
console.log(s);

//Метод Math.floor() возвращает наибольшее целое число.



// 3. Что такое(пост - /пре-)инкремент /// (пост-/пре-)декремент + - все равно запутался
// Пример

//инкремент++, декремент-- эти унарные операции увеличивают и уменьшают на единицу число, записанное в переменную.

// При использовании префиксной нотации сначала происходит изменение переменной, а потом возврат.

// При использовании постфиксной нотации — наоборот: можно считать, что сначала происходит возврат, а потом изменение переменной.

//инкремент и декремент не только возвращают значение, но и изменяют значение переменной

let day = 10;

console.log(++day); // 11
console.log(day);   // 11

console.log(day++); // 11
console.log(day);   // 12

// console.log(11++); // error





// 4. Как увеличить переменную в 2 раза ? (Есть ли короткая запись ?) +

let winTickets = 5;
winTickets *= 2; // *= короткая запись
console.log(winTickets);

// 5. Что такое += -= *= /= = %= и т.д. (помощь к 4 заданию =)) +

//совмещенные опреаторы сложения, вычитания, деления и тд



// 6. Какое действие имеет более сильный приоритет: % или **

// () ** */ +-
// **
// console.log(5 % 4 ** 2);

// 7. Как поменять приоритет действий в 6 задачи ? Более слабый сделать более сильным. +

// ставим в скобки приоритетное выражение

// 8. Неявное преобразование: 4 + "7" * 4 -> какой будет результат ? +

let firstResult = 4 + "7" * 4;
console.log(firstResult); //32



//     9. Неявное преобразование: "4" + "7" + 4 -> какой будет результат ? +

let secondResult = "4" + "7" + 4;
console.log(secondResult); //474

// если везде плюсы то конкатенация, в ином случае считается как обычное уравнение (приводится к числовому типу)

// Запросить число и добавить к нему 7 и вывести в красивом виде:
let num = 10
console.log(num + " + 7 = " + (num + 7));

// "10 + 7 = 17"



console.log(Number(undefined));
console.log(Number(11));
console.log(Number('11'));
console.log(Number(' 11 '));
console.log(Number(''));
console.log(Number(' '));
console.log(Number('     '));
console.log(Number('0'));
console.log(Number('  0  '));
console.log(Number('11'));
console.log(Number('11px'));
console.log(Number('-11'));
console.log(Number('+11'));
console.log(Number('/11'));
console.log(Number('*11'));
console.log(Number('10000_'));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(false));
console.log(Number(true));
console.log(Number([]));
console.log(Number([0]));
console.log(Number([1]));
console.log(Number([1, 1])); // '1, 1'