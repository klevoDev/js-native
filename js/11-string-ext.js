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

// 4. <string>.indexOf(value, index) - Возвращает индекс первого встречного значения value начиная с индекса index (по умолчанию 0)
// Если ничего не найдёт, то вернёт -1

console.log(strText.indexOf('mp')); // 2
console.log(strText.indexOf('mp', 3)); // 7
console.log(strText.indexOf('ap', 3)); // -1

// 5. <string>.includes(value, index) - проверят есть ли строка/часть строки value, начиная с индекса index (по умолчанию 0)
// Проверяет - значит возвращает true/false


// * ДОП: Для проверки в есть текст в начале строки или в конце есть методы:
// text.startsWidth(value)
// text.endsWIdth(value)


// 6. <string>.slice(start, end); // Возвращает новую строку, копируя в неё все символы с позиции start до позиции end НЕ ВКЛЮЧИТЕЛЬНО

console.log(strText.slice(0, 3));

const indexMp = strText.indexOf('mp', 3)
console.log(strText.slice(0, indexMp));

console.log(strText.slice(0, indexMp).length); // 7 с пробелом


// * === Array (методы массивов для строк) === * //
// Более подробно в 14 теме


