// 5 тема - js (Основы типа Boolean)



// 1. Какие есть операторы сравнения? (8 шт) +

// Равно(==)
// Не равно(!=)
// Строго равно(===) - Возвращает true, если операнды строго равны, без преобразования типов.
// Строго не равно(!==)

// Больше(>)
// Больше или равно(>=)
// Меньше(<)
// Меньше или равно(<=)


// console.log(null === undefined);
// console.log(10 === "10");
// console.log(Boolean(undefined));



// 2. К какому типу данных неявно приводятся переменные при сравнении с числом? +
// Ответ: число.

// console.log(10 == '10');
// console.log("10" == 10);
// console.log(null >= '0');
// console.log('0' == false); // true
// console.log(Boolean('0') === false); // false

// Если два операнда не одного типа, javascript преобразовывает типы и сравнивает строго. 



// 3. Какие есть логические операторы? + -

// В JavaScript есть четыре логических оператора: || (ИЛИ), && (И) и ! (НЕ), {?? (Оператор нулевого слияния)}.

//Оператор нулевого слияния(??) — это логический оператор, возвращающий значение правого операнда, если значение левого операнда содержит null или undefined, в противном случае возвращается значение левого операнда.

// console.log(true || false); // true
// console.log(7 > 5 || 5 < 3); // true


// console.log(5 > 3 && 5 > 4); // true
// console.log(5 > 3 && 5 > 10); // false
// console.log(5 > 10 && 5 > 10); // false
// console.log(5 > 10 && 5 > 3); // false

// console.log(5 > 3 || 5 > 4); // true
// console.log(5 > 3 || 5 > 10); // true
// console.log(5 > 10 || 5 > 10); // false
// console.log(5 > 10 || 5 > 3); // true

// console.log(!false); // true
// console.log(!true); // false


// console.log(!(5 > 10 || 5 > 10)); // true
// console.log(null && 5); // null




// 4. К какому типу данных неявно приводятся переменные при работе с логическими операторами? + 

// Boolean (true или false)



// 5. Таблица истинности всех логических операторов (понимать/знать, как работает) ----------

// https://dorey.github.io/JavaScript-Equality-Table/ топ таблица
// где === все понятно
// где == есть еще вопросы + -





// 6. Как проверить число на NaN? +

// Функция «isNaN()» при проверке вернет «true» в двух случаях: если при проверке значение уже NaN и если оно станет NaN после попытки преобразования его в число;
// метод «Number.isNaN()» вернет «true» только если значение при проверке уже является NaN.
// console.log(NaN === NaN); // false
// // console.log(Number('54789gdf') == Number('fdkhgdf53'));
// console.log(null === null); // true


// 7. Что будет в переменной, если сравнить: ('Я' > 'А') Почему? +

// let test = 'Я' >= 'А'; //   (a > b || a == b)

// console.log('A'.charCodeAt());
// console.log('a'.charCodeAt());

// console.log(test);
// console.log('f' === 'f');
// console.log('f' === 'a'); 

// 



// 8. Чем отличается == от ===? +

// Оператор == сравнивает на равенство, а вот === — на идентичность. Плюс оператора === состоит в том, что он не приводит два значения к одному типу. Именно из-за этого он обычно и используется.



// 9. +

// == двойное может неявно приводить к нужному типу и сравнивать, поэтому true.
// === нет приведения, точное сравненение поэтому false

//console.log(false == 0)? true
//console.log("0" == false)? true
// console.log(null == undefined)? true
// console.log(null === undefined)? false



// 10. C помощью какой функции можно явно преобразовать к типу boolean? +

// Boolean()



// 11. Что будет, если явно преобразовать к типу boolean следующие значения: +
// если есть есть значение то покажет true, если его нет то false. 

// * String
// "" - пустая строка
// "0" - строка с числом
// " " - строка с одним пробелом
// "t" - строка с текстом

// console.log(Boolean("")); //false тут пустая строка
// console.log(Boolean("0")); //true
// console.log(Boolean(" ")); //true тут пробел
// console.log(Boolean("t")); //true

// * Number
// NaN
// 0
// 1
// 3
// -3

// console.log(Boolean(NaN)); // false
// console.log(Boolean(0)); //false
// console.log(Boolean(1)); //true
// console.log(Boolean(3)); //true
// console.log(Boolean(-3)); //true

// * null & undefined

// undefined
// null

// console.log(Boolean(null)); // false 
// console.log(Boolean(undefined)); // false 
