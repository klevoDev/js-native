// * ===== string-extanded (строка-расширенная версия) ===== * //

const strText = 'Simple mp text'
// Строка - это массив символов 

console.log(strText[0]);
console.log(strText[strText.length - 1]);


//! В отличие от массивов - строка иммутабельная!
// Замена символов невозможна!
// strText[0] = 'D';
// console.log(strText);


// * Перебор -> for, !for-of!, forEach


// * Методы (функции) для строк - все методы иммутабельны

// * 0. Длина строки (свойство length)

// 1. <string>.toLowerCase() - Возвращает строк в нижнем регистре 
// 2. <string>.toUpperCase() - Возвращает строк в верхем регистре 
// 3. <string>.trim() - Удаляет пробелы слева и справа

// ? 4. <string>.indexOf(value, index) - Возвращает индекс первого встречного значения value начиная с индекса index (по умолчанию 0)
// Если ничего не найдёт, то вернёт -1

console.log(strText.indexOf('mp')); // 2
console.log(strText.indexOf('mp', 3)); // 7
console.log(strText.indexOf('ap', 3)); // -1

// 5. <string>.includes(value, index) - проверят есть ли строка/часть строки value, начиная с индекса index (по умолчанию 0)
// Проверяет - значит возвращает true/false

'gfdg'.

    // * ДОП: Для проверки в есть текст в начале строки или в конце есть методы:
    // text.startsWith(value)
    // text.endsWith(value)


    // ? 6. <string>.slice(start, end); // Возвращает новую строку, копируя в неё все символы с позиции start до позиции end НЕ ВКЛЮЧИТЕЛЬНО

    console.log(strText.slice(0, 3));

const indexMp = strText.indexOf('mp', 3)
console.log(strText.slice(0, indexMp));

console.log(strText.slice(0, indexMp).length); // 7 с пробелом


// * === Array (методы массивов для строк) === * //
// Более подробно в 14 теме


// 7. <string>.split(value) - преобразует строку в массив по разделителю value

const text = 'text'
const text2 = 't e x t'
const text3 = 't, ! e, x, t'
console.log(text.split(''));
console.log(text2.split(' '));
console.log(text3.split(', '));


// 8. <array>.join(value) - преобразует массив в строку, добавляя разделитель value

const arr = ['t', '! e', 'x', 't']
console.log(arr.join(', '));
console.log(arr.join(''));

// 9. <array>.reverse() - поменять местами элементы в массив
// ! Мутирует исходный массив!

// ? Best Practice - как перевернуть строку наоборот
console.log('snickers'.split('').reverse().join(''));



// 10. Array.from(str) - преобразует строку в массив посимвольно
// + На вход можно подать не только строчку, но и массиво-подобный объект
// + работает со смайликами, split рубит смайлик на 2 символа




// includes(включает), indexOf, slice - наизусть