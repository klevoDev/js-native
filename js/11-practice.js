// Задачи по теме 11. String-ext

// 1. Задача +

// Создать любую переменную типа string. Вывести посимвольно в консоль двумя способами:

// for;
// for of;

// const str = "designer"
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// for (const el of str) {
//     console.log(el);
// }


// 2. Задача +

// Написать функцию, на вход которой подаётся строка, функция возвращает индекс последнего элемента не зависимо от количества символов.

// const string = "mobile"

// function getFirstLastEl(str) {
//     return str.length - 1
// }

// console.log(getFirstLastEl(string));



// 3. Задача +

// Написать функцию, на вход которого подаётся строка. Функция должна вернуть первый символ, предпоследний и последний.

// const string = "train"

// function getSimbol(str) {
//     let firstSimbol = str[0]
//     let penultimateSimbol = str[str.length - 2]
//     let lastSimbol = str[str.length - 1]
//     return `${firstSimbol}, ${penultimateSimbol}, ${lastSimbol}`
// }

// console.log(getSimbol(string));



// 4. Задача +

// Написать функцию, на вход которой подаётся две строки. Если первая строка длинее второй, то к первой доклеивается вторая, иначе - наоборот. Функция возвращает результирующую строку.

// const modelOne = "go";
// const modelTwo = "car";

// function glueLines(str1, str2) {
//     if (str1.length > str2.length) {
//         return str1 + str2
//     } else if (str1.length < str2.length) {
//         return str2 + str1
//     } else if (str1.length === str2.length) {
//         return `Строки равны`
//     }
// }

// console.log(glueLines(modelOne, modelTwo));



// 5. Задача + -

// Написать функцию, на вход которой подаётся строка, функция возвращает количество, встречающихся букв a незасивимо от того какой язык: русский или английский.

// const someString = "rвsfaваы";

// function getLetters(str) {
//     return str.length
// }
// console.log(getLetters(someString));



// 6. Задача +

// Написать функцию, на вход которой подаётся 2 параметра (1 параметр - строка, 2 параметр - символ). Функция возвращает число - количество встречающихся символов в строке.

// let someValue = "test"
// let someSymbol = "t"

// function getSumSymbol(value, symbol) {
//     let countSymbol = 0;
//     for (const el of value) {
//         el === symbol && (countSymbol += 1)
//     }
//     return countSymbol;
// }

// console.log(getSumSymbol(someValue, someSymbol));



// 7. Задача +

// Написать функцию, на вход которой подаётся 2 строки. Функция проверяет содержится ли вторая строка в первой.

// const day = "monday";
// const monday = "day";

// function checkStr(value1, value2) {
//     console.log(value1.indexOf(value2));
// };

// checkStr(day, monday)



// 8. Задача ----------

// Написать функцию, на вход которой подаётся 2 строки, которая проверяет есть вторая строка в первой




// 9. Задача -

// Написать функцию, на вход которой подаётся 3 строки, которая проверяет есть вторая или третья строка в первой. Функция может работать как с двумя переменными, так и стремя.

// const monday = "monday";
// const day = "days";
// const mon = "mon";



// 10. Задача +

// Написать функцию, на вход которой подаётся строка. Функция возвращает строку в нижнем регистре и убирает лишние пробелы по бокам.

// const monday = "     Monday  ";

// function getStr(str) {
//     return str.trim().toLowerCase();
// }

// console.log(getStr(monday));



// 11. Задача

// Написать функцию, на вход которой подаётся 2 строки. Функция проверяет начинается ли первая строка со второй строки или заканчивается ей?

// 12. Задача

// Написать функцию, на вход которой подаётся строка. Функция возвращает массив, состоящий из символов этой строки. Решить задачу двумя способами.

// 13. Задача

// Написать функцию, на вход которой подаётся 2 параметра (1 параметр - строка, 2 параметр - символ). Функция возвращает строку, состоящая без символа.

// 14. Задача

// Написать функцию функцию, которая обрезает

// 15. Задача

// Написать функцию cropString, на вход которой подаётся 3 параметра (1 параметр - строка, 2 - число (начало обрезки), 3 - число (конец обрезки)). Функция возвращает строку, состощая из символов, начиная от 2 параметра, заканчивая 3 вкл.

// Например:
// console.log(cropString("tester", 2, 4)); // "ste"
// 16. Задача

// Написать функцию generateLink, на вход которой подаётся 3 параметра: ссылка, текст, класс для тега a. Функция возвращает строку вида: 
// <a href="ссылка" class="класс">текст</a>.

// 17. Задача

// Написать функцию, на вход которой подаётся строка из функции generateLink 16 задачи. Функция возвращает объект, состоящий из свойств:

// link: адрес ссылки;
// content: содержимое тега a;
// className: имя класс;
// 18. Задача

// Написать функцию, на вход которой подаётся путь к файлу, например: C:\Program Files\project\test.js. Функция возвращает объект с двумя данными:

// Диск на котором лежит файл;
// Расширение файла;
// 19. Задача

// Написать функцию, на вход которой подаётся строка в kebab-case, функция возращает эту же строку в lowerCamelCase cssToJs("background-color") == 'backgroundColor'; cssToJs("list-style-image") == 'listStyleImage'; cssToJs("-webkit-transition") == 'webkitTransition';

// 20. Задача

// Написать функцию, на вход которой подаётся строка, содержащая класс по БЭМ, вида: class = "about__btn about__btn_disabled" В функцию подаётся строкал только вида, описанного сверху Вывести в консоль:

// Название блока;
// Название элемента;
// Название модифитора;
// 21. Задача

// Создать переменную: stringTask = "aaaccaaaccaacacaacc".

// Вывести в консоль количество "a";
// Вывести в консоль количество "с";
// Найти сколько % в строке символов "a" и "c";
// Программа должна работать с любым (в пределах разумного) количеством символов "a" и "с";
// 22. Задача

// Создать функцию, которая удаляет первый и последний символы строки, которая подаётся на вход в функцию. Функция возвращает новую строку. Если в строке меньше двух символов, то возвращать пустую строку.

// 23. Задача

// Написать функцию, которая возвращает перевёрнутую строку строку.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// 24. Задача

// Написать функцию, которая удаляет все пробелы из строки. Функция возвращает новую строку.

// 25. Задача

// Написать функцию, на вход которой подаётся 2 строки: имя и фамилия. Функция возвращает одну строку - инициалы через точки.

// Alexander Volkov --> A.V.
// 26. Задача

// Написать функцию, на вход которой подаётся строка с текстом. Функция переворачивает все слова в тексте наоборот.

// Example:
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
// 27. Задача

// Написать функцию, которая преобразует массив строк в массив чисел, где каждое число - количество символов в строке. Функция возвращает новый массив.

// Example: ['a', 'as', 'red', 'test'] --> [1, 2, 3, 4]
// 28. Задача

// Написать функцию, на вход которой подаётся массив с словами. Функция мутирует массив, переворачия все слова в массиве наоборот.

// 29. Задача

// Написать функцию, на вход которой подаётся строка. Функция возвращает объект, в котором есть 3 свойства:

// Количество заглавных букв;
// Количество строчных букв;
// Количество чисел;
// 30. Задача

// Написать функцию, на вход которой подаётся строка. Функция возвращает строку, удаляя оттуда все цифры

// Examples: 
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'
// 31. Задача

// Написать функцию, на вход которой подаётся строка. Функция возвращает строку, удаляя оттуда все сивмолы пробела

// '8 j 8   mBliB8g  imjB8B8  jl  B'               --> '8j8mBliB8gimjB8B8jlB'
// '8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'   --> '88Bifk8hB8BB8BBBB888chl8BhBfd'
// '8aaaaa dddd r     '                            --> '8aaaaaddddr'
// ★ Задачи повышенной сложности ★

// ★ 32. Задача (Продолжение 18 задачи)★

// Написать функцию, на вход которой подаётся путь к файлу, например: C:\Program Files\project\test.js. Функция возвращает объект с двумя данными:

// Диск на котором лежит файл;
// Папка, в которой лежит файл;
// Расширение файла;
// ★ 33. Задача ★

// Дан объект user, выполнить удаление свойств с помощью цикла, которые содержут слово delete в ключе.

// const user = {
//     name: "Lucas",
//     age: 29,
//     "delete me": 'text',
//     delete: 105,
//     'deleteProp': false
// };
// ★ 34. Задача ★

// Написать функцию stringClean, которая удаляет из строки все цифры.

// '8j8mBliB8gimjB8B8jlB' --> 'jmBliBgimjBBjlB'
// '97Bifk8hB65BB3BBBB8451chl0BhBfd' --> 'BifkhBBBBBBBchlBhBfd'
// '8aaaaa dd5dd 7r0' --> 'aaaaa dd5dd r'
// ★ 34. Задача ★

// Написать функцию lettersCount, которая принимает строку в качестве аргумента и возвращает объект, в котором ключами являются все буквы, которые есть в строке, а значениями - их количество в строке. Большая буква и маленькая должны считаться одинаковой буквой. Если строка пустая, то вернуть пустой объект.

// Пример:
// console.log(lettersCount('aAAbbccde'));

// output:
// {
//     a: 3,
//     b: 2,
//     c: 2,
//     d: 1,
//     e: 1,
// }
// ★ 35. Задача ★

// Написать функцию, на вход которой подаётся строка с простым матемтическим выражением: 11 + 3, или 7*9. Функция возвращает результат сложения/умножения/деления и т.п. Примечание: функцию eval() не использовать!

// ★ 36. Задача ★

// Даны переменные типа string. Написать функцию, которая преобразует эти переменные к типу number, убрав лишние знаки.

// const a = "1_234_567_890"; // 1234567890
// const b = "4_5435_6548_9430"; // 4543565489430
// const c = "1_"; // 1
// const d = "_2"; // 2
// ★ 37. Задача ★

// Написать функцию, на вход которой в функцию подаётся строка дата в формате: "ДД.ММ.ГГГГ" Функция возвращает true, если такая дата существует, иначе false.

// Необходимо учесть високосные года;
// Функция работает только с положительными годами (наша эра);
// Выполнить программу без использования Date();
// ★ 38. Задача ★

// Написать программу-кодировщик: s = 'aabbbсaaaa' преобразуется в 'a2b3с1a4', то есть группы одинаковых символов исходной строки заменяются на этот символ и количество его повторений в этой позиции строки. Кодировщик должен учитывать регистр:

// "aBc" -> "a1B1c1"