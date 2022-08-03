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

// function getBaseSymbols(str) {
//     return {
//         first: str[0],
//         penult: str[str.length - 2],
//         last: str[str.length - 1]
//     }
// }

// console.log(getBaseSymbols(string));



// 4. Задача +

// Написать функцию, на вход которой подаётся две строки. Если первая строка длинее второй, то к первой доклеивается вторая, иначе - наоборот. Функция возвращает результирующую строку.

// const modelOne = "go";
// const modelTwo = "car";

// function glueLines(str1, str2) {
//     return str1.length > str2.length ? str1 + str2 : str2 + str1;
// }

// console.log(glueLines(modelOne, modelTwo));



// 5. Задача +

// Написать функцию, на вход которой подаётся строка, функция возвращает количество, встречающихся букв a незасивимо от того какой язык: русский или английский.

// const someString = "rвsfaваыаfaaа аа aa";

// function getLetters(str) {
//     let s = 0;
//     for (const el of str) {
//         if (el === "а" || el === "a") {
//             s++
//         }
//     }
//     return s
// }
// console.log(getLetters(someString));



// 6. Задача +

// Написать функцию, на вход которой подаётся 2 параметра (1 параметр - строка, 2 параметр - символ). Функция возвращает число - количество встречающихся символов в строке.

// let someValue = "test"
// let someSymbol = "t"

// function getSumSymbol(value, symbol) {
//     let countSymbol = 0;
//     for (const el of value) {
//         el === symbol && countSymbol++
//     }
//     return countSymbol;
// }

// console.log(getSumSymbol(someValue, someSymbol));



// 7. Задача +

// Написать функцию, на вход которой подаётся 2 строки. Функция проверяет содержится ли вторая строка в первой.

// const day = "monday";
// const monday = "day";

// function checkStr(value1, value2) {
//     return value1.includes(value2);
// };

// console.log(checkStr(day, monday));


// 8. Задача ---------- дубль

// Написать функцию, на вход которой подаётся 2 строки. Функция проверяет равны ли эти строки независимо от регистра.

// function checkStr(str1, str2) {
//     return str1.toLowerCase() === str2.toLowerCase()
// }

// console.log(checkStr('Roman', 'roman'));


// 9. Задача +

// Написать функцию, на вход которой подаётся 3 строки, которая проверяет есть вторая или третья строка в первой. Функция может работать как с двумя переменными, так и стремя.

// const monday = "null";
// const day = "days";
// // const mon = "mon";

// function checkStr(str1, str2, str3) {
//     // когда 2 параметра, задача решается не ок
//     // если 2 параметра
//     // !undefined = !false -> true

//     // str3 === undefined
//     if (!str3) {
//         return str1.includes(str2)
//     } else {
//         // Когда 3 параметра задача решается ок
//         // если три параметра:
//         return str1.includes(str2) || str1.includes(str3)
//     }
// }

// console.log(!false); // true
// console.log(!''); // true
// console.log(!'fds'); // false
// console.log(!null); // true

// console.log(!!'gfdgdf'); // !! === Boolean()

// console.log(checkStr(monday, day, ""));



// 10. Задача +

// Написать функцию, на вход которой подаётся строка. Функция возвращает строку в нижнем регистре и убирает лишние пробелы по бокам.

// const monday = "     Monday  ";

// function getStr(str) {
//     return str.trim().toLowerCase();
// }

// console.log(getStr(monday));



// 11. +

// Написать функцию, на вход которой подаётся 2 строки. Функция проверяет начинается ли первая строка со второй строки или заканчивается ей?

// const monday = "monday";
// const day = "on";

// function checkStr(value1, value2) {
//     return value1.startsWith(value2) || value1.endsWith(value2);

// }

// console.log(checkStr(monday, day));
// console.log(checkStr(monday, day));



// 12. Задача +

// Написать функцию, на вход которой подаётся строка. Функция возвращает массив, состоящий из символов этой строки. Решить задачу двумя способами.

// const monday = "Monday";

// function getArray(string) {
//     const newArr = [];
//     for (const el of string) {
//         newArr.push(el)
//     }
//     return newArr
// };

// console.log(getArray(monday));

// или

// function getArray2(string) {
//     const newArr = [];
//     for (let i = 0; i < string.length; i++) {
//         newArr.push(string[i])
//     }
//     return newArr
// };

// console.log(getArray2(monday));



// 13. Задача +

// Написать функцию, на вход которой подаётся 2 параметра (1 параметр - строка, 2 параметр - символ). Функция возвращает строку, состоящая без символа.

// const monday = "Monday";
// const del = "o";

// function delSymbol(str, sym) {
//     let newString = "";
//     for (const el of str) {
//         if (el !== sym) {
//             newString += el
//         }
//     }
//     return newString
// }
// console.log(delSymbol(monday, del));




// 14. Задача +

// Написать функцию функцию, которая обрезает со второго символа до предпоследнего включительно переданное слово.

// const monday = "Monday";

// function delSymbol(value) {
//     console.log(value.slice(1, value.length - 1));
// };

// delSymbol(monday);



// 15. Задача +

// Написать функцию cropString, на вход которой подаётся 3 параметра (1 параметр - строка, 2 - число (начало обрезки), 3 - число (конец обрезки)). Функция возвращает строку, состощая из символов, начиная от 2 параметра, заканчивая 3 вкл.

// Например:
// console.log(cropString("tester", 2, 4)); // "ste"

// const monday = "Monday";

// function cropString(string, start, end) {
//     return string.slice(start, end + 1);
// }

// console.log(cropString(monday, 1, 2));



// 16. Задача +

// Написать функцию generateLink, на вход которой подаётся 3 параметра: ссылка, текст, класс для тега a. Функция возвращает строку вида: 
// <a href="ссылка" class="класс">текст</a>.

// const test1 = "www.leningrad.ru";
// const test2 = "Какой-то текст тут";
// const test3 = "start__link";

// function generateLink(link, text, classLink) {
//     return `<a href="${link}" class="${classLink}">${text}</a>`
// };

// console.log(generateLink(test1, test2, test3));



// 17. Задача

// Написать функцию, на вход которой подаётся строка из функции generateLink 16 задачи. Функция возвращает объект, состоящий из свойств:

// const link = 'адрес ссылки';
// const content = "содержимое тега a";
// const className = "имя класс";

// const string = `<a href="${link}" class="${className}">${content}</a>.`

// function generateLink(link, content, className) {
//     return {
//         link: `${link}`,
//         content: `${content}`,
//         className: `${className}`
//     }
// };

// console.log(generateLink(link, content, className));



// 18. Задача +

// Написать функцию, на вход которой подаётся путь к файлу, например: C:\Program Files\project\test.js. Функция возвращает объект с двумя данными:

// Диск на котором лежит файл;
// Расширение файла;

// const path = "C:\Program Files\project.fufo\test.js";


// function reverseString(str) {
//     return str.split('').reverse().join('')
// }

// function pathToExtDisk(ref) {
// const disk = ref.slice(0, ref.indexOf(':'))

// 1 вариант
// const refReverse = reverseString(ref)
// const ext = reverseString(refReverse.slice(0, refReverse.indexOf('.')))

// 2 вариант
// const splitArray = ref.split('.')
// const ext = splitArray[splitArray.length - 1]

// 3 вариант
// const ext = ref.slice(ref.lastIndexOf('.') + 1)


// * доп
// -1 - индекс последнего элемента
// -2 - индекс предпоследнего и т.д.


//     return {
//         disk,
//         ext
//     }
// }

// console.log(pathToExtDisk(path));


// function getData(value) {
//     let disc = "";
//     let expReverse = "";
//     let test = value.split('').reverse().join('');

//     for (const el of value) {
//         if (el !== ":") {
//             disc += el
//         } else {
//             break
//         }
//     }

//     for (const el of test) {
//         if (el !== ".") {
//             expReverse += el
//         } else {
//             break
//         }
//     }

//     const expansion = expReverse.split('').reverse().join('');

//     return {
//         disc: `${disc}`,
//         exp: `${expansion}`
//     }
// }

// console.log(getData(place));



// FIXME: 19. Задача -

// Написать функцию, на вход которой подаётся строка в kebab-case, функция возращает эту же строку в lowerCamelCase cssToJs("background-color") == 'backgroundColor'; cssToJs("list-style-image") == 'listStyleImage'; cssToJs("-webkit-transition") == 'webkitTransition';

// const cssStyle = "background-color";

// function getCamelCase(kebabCase) {
//     let s = '';
//     for (const el of kebabCase) {
//         if (el === kebabCase.indexOf('-') + 1) {
//             s = el.toUpperCase()
//         }
//     }
//     return s

// }

// console.log(getCamelCase(cssStyle));

// страрое решение
// const cssStyleList = cssStyle.split('-');
// for (let i = 1; i < cssStyleList.length; i++) {
//     cssStyleList[i] = cssStyleList[i][0].toUpperCase();
// }

// console.log(cssStyleList);

// let g = ''
// // g = cssStyle[0].toUpperCase()
// let newStr = " ";
// newStrSplit = cssStyle.split('-');
// console.log(newStrSplit);

// for (const el of cssStyle) {
//     if (el !== el[0]) {
//         g = cssStyle.toUpperCase()
//     }
// }

// console.log(cssStyle);



// function cssToJs(value) {
//     let newStr = " ";
//     let newStrSplit = value.split('-');
//     // newStrSplit = value.split('-')
//     console.log(newStrSplit);
//     let upperSym = " ";
//     upperSym = newStrSplit[1].toUpperCase()
//     console.log(upperSym);



//     for (const el of newStrSplit.slice(1, newStrSplit.length)) {




//         if (el !== "-") {
//             newStr += el
//         }
//     }
//     return newStr
// }

// let s = '';
// s = cssStyle.split('-')
// console.log(s);

// s[1].toUpperCase()
// console.log(s);

// console.log(cssToJs(cssStyle));



// 20. Задача ++

// Написать функцию, на вход которой подаётся строка, содержащая класс по БЭМ, вида: class = "about__btn about__btn_disabled" В функцию подаётся строкал только вида, описанного сверху Вывести в консоль:

// Название блока;
// Название элемента;
// Название модифитора;

// const classBam = "about__btn about__btn_disabled";

// function getBam(value) {

//     const block = value.slice(0, value.indexOf('_'));
//     const element = value.slice(0, value.indexOf(' '));
//     const mod = value.slice(value.indexOf(' ') + 1)

//     return {
//         "Название блока": `${block}`,
//         "Название элемента": `${element}`,
//         "Название модифитора": `${mod}`
//     }
// }

// console.log(getBam(classBam));



// 21. Задача +

// Создать переменную: stringTask = "aaaccaaaccaacacaacc".

// Вывести в консоль количество "a";
// Вывести в консоль количество "с";
// Найти сколько % в строке символов "a" и "c";
// Программа должна работать с любым (в пределах разумного) количеством символов "a" и "с";

// const stringTask = "aaaccaaaccaacacaaccaс";

// function getAC(value) {
//     let countA = 0;
//     let countC = 0;

//     for (const el of value) {
//         if (el === "a" || el === "а") {
//             countA += 1;
//         }
//     }

//     for (const el of value) {
//         if (el === "c" || el === "с") {
//             countC += 1;
//         }
//     }

//     let countAll = countA + countC;
//     let percentA = countA / countAll * 100;
//     let percentC = countC / countAll * 100;

//     console.log(
//         `Количество "a" = ${countA}
//         \nКоличество "c" = ${countC}
//         \nПроцентов "a" в строке ${value} = ${Math.round(percentA)}%
//         \nПроцентов "с" в строке ${value} = ${Math.round(percentC)}%`
//     );
// }

// getAC(stringTask)



// 22. Задача +

// Создать функцию, которая удаляет первый и последний символы строки, которая подаётся на вход в функцию. Функция возвращает новую строку. Если в строке меньше двух символов, то возвращать пустую строку.

// const someStr = "train";

// function delSymbol(value) {
//     let newString = value.slice(1, value.length - 1);

//     if (newString.length < 2) {
//         return " ";
//     } else {
//         return newString;
//     }
// };

// console.log(delSymbol(someStr));



// 23. Задача +

// Написать функцию, которая возвращает перевёрнутую строку строку.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// const someStr = "train";

// function reverseString(str) {
//     return str.split('').reverse().join('')
// };

// console.log(reverseString(someStr));



// 24. Задача +

// Написать функцию, которая удаляет все пробелы из строки. Функция возвращает новую строку.

// const someStr = " t r a i n ";

// function delSpaces(value) {
//     let newStr = ""
//     for (const el of value) {
//         if (el !== " ") {
//             newStr += el
//         }
//     }
//     return newStr
// }
// console.log(delSpaces(someStr));



// 25. Задача +

// Написать функцию, на вход которой подаётся 2 строки: имя и фамилия. Функция возвращает одну строку - инициалы через точки.

// Alexander Volkov --> A.V.

// let firstName = "Alexander";
// let secondName = "Volkov";

// function getInitials(val1, val2) {
//     return `${val1[0]}.${val2[0]}.`
// }

// console.log(getInitials(firstName, secondName));



// 26. Задача ++

// Написать функцию, на вход которой подаётся строка с текстом. Функция переворачивает все символы в слове наоборот, оставляя порядок слов тем же самым.

// Example:
// "The greatest victory is that which requires no battle" 
// "ehT testaerg yrotciv si taht hcihw seriuqer on elttab"

// let text = "The greatest victory is that which requires no battle";

// //старое
// // function getTextReverse(value) {
// //     const textReverse = value.split(' ').reverse();
// //     console.log(value);
// //     let stringReverse = "";
// //     for (const el of textReverse) {
// //         stringReverse += el + " "
// //     }
// //     return stringReverse
// // };


// //новое
// function getTextReverse(reverseWord) {
//     let reverseText = reverseWord.split('').reverse().join('');
//     return reverseText.split(' ').reverse().join(' ');
// };

// console.log(getTextReverse(text));



// 27. Задача +

// Написать функцию, которая преобразует массив строк в массив чисел, где каждое число - количество символов в строке. Функция возвращает новый массив.

// Example: ['a', 'as', 'red', 'test'] --> [1, 2, 3, 4]

// let someArray = ['asf3', 'as', 'red', 'test'];

// function getArrNumber(arr) {
//     const countArr = [];
//     for (const el of someArray) {
//         countArr.push(el.length)
//     }
//     return countArr
// };

// console.log(getArrNumber(someArray));



// 28. Задача +

// Написать функцию, на вход которой подаётся массив с словами. Функция мутирует массив, переворачия все слова в массиве наоборот.

// const text = ["The", "greatest", "victory", "is", "that", "which", "requires", "no", "battle"];

// function reverseAordArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i]
//             .split('')
//             .reverse()
//             .join('');
//     }
// }
// // let texter = 'text'
// // texter[0] = 'T' // X
// // texter = 'Text' // V

// reverseAordArr(text);
// console.log(text);


// 29. Задача + - (isNan увел)

// Написать функцию, на вход которой подаётся строка. Функция возвращает объект, в котором есть 3 свойства:

// Количество заглавных букв;
// Количество строчных букв;
// Количество чисел;




// function getCountSymbols(string) {
//     let lowers = 0;
//     let uppers = 0;
//     let numbers = 0;

//     for (const el of string) {
//         if (el !== " ") {
//             if (!isNaN(el)) {
//                 numbers++
//             } else if (el === el.toLowerCase()) {
//                 lowers++
//             } else if (el === el.toUpperCase()) {
//                 uppers++
//             }
//         }
//     }

//     return {
//         uppers,
//         lowers,
//         numbers
//     }
// };

// const someText = "dddd G 12344";
// console.log(getCountSymbols(someText));



// 30. Задача + - сначала использовал isNan, потом подглядел .replace

// Написать функцию, на вход которой подаётся строка. Функция возвращает строку, удаляя оттуда все цифры

// Examples: 
// '! !'                 -> '! !'
// '123456789'           -> ''
// 'This looks5 grea8t!' -> 'This looks great!'

// const someText = 'This looks5 grea8t!';

// // ? isNaN но тут склейка происходит

// function getOnlyText(text) {
//     let newText = "";
//     for (const el of text) {
//         if (isNaN(el) || el === " ") {
//             newText += el
//         }
//     }
//     return newText
// };

// console.log(getOnlyText(someText));

// ? .replace
// const someText = 'This looks5 grea8t!';

// function getOnlyText(text) {
//     let newText = "";
//     for (const el of text) {
//         if (el === el.replace(/[0-9]/g, "")) {
//             newText += el
//         }
//     }
//     return newText
// };

// console.log(getOnlyText(someText));




// 31. Задача +

// Написать функцию, на вход которой подаётся строка. Функция возвращает строку, удаляя оттуда все сивмолы пробела

// '8 j 8   mBliB8g  imjB8B8  jl  B'               --> '8j8mBliB8gimjB8B8jlB'
// '8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'   --> '88Bifk8hB8BB8BBBB888chl8BhBfd'
// '8aaaaa dddd r     '                            --> '8aaaaaddddr'

// const someText = ' 8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd';

// function getOnlyText(text) {
//     let newText = "";
//     for (const el of text) {
//         if (el !== " ") {
//             newText = `${newText}${el}`
//             // newText += el
//         }
//     }
//     return newText
// };


// console.log(getOnlyText(someText));



// ?★ Задачи повышенной сложности ★

// FIXME: 
// ★ 32. Задача (Продолжение 18 задачи)★ + -

// Написать функцию, на вход которой подаётся путь к файлу, например: C:\Program Files\project\test.js. Функция возвращает объект с двумя данными:

// Диск на котором лежит файл;
// Папка, в которой лежит файл;
// Расширение файла;

// const place = "C:\Program Files\roject\test.js";

// function getData(value) {
//     let disc = "";
//     let expReverse = "";
//     let folder = "";

//     let test = value.split('').reverse().join('');

//     for (const el of value) {
//         if (el !== ":") {
//             disc += el
//         } else {
//             break
//         }
//     }

//     for (const el of test) {
//         if (el !== ".") {
//             expReverse += el
//         } else {
//             break
//         }
//     }

//     const expansion = expReverse.split('').reverse().join('');

//     // путь к папке
//     folder = value.slice(disc.length + 1, -Math.abs(expansion.length + 1))



//     return {
//         disc: `${disc}`,
//         exp: `${expansion}`,
//         folder: `${folder}`
//     }
// }

// console.log(getData(place));




// ★ 33. Задача ★ +++

// Дан объект user, выполнить удаление свойств с помощью цикла, которые содержут слово delete в ключе.

// const user = {
//     name: "Lucas",
//     age: 29,
//     "delete me": 'text',
//     delete: 105,
//     'deleteProp': false
// };

// for (const key in user) {
//     if (key.includes('delete')) {
//         delete user[key]
//     }
// }
// console.log(user);



// ★ 34. Задача ★ +

// Написать функцию stringClean, которая удаляет из строки все цифры.

// '8j8mBliB8gimjB8B8jlB' --> 'jmBliBgimjBBjlB'
// '97Bifk8hB65BB3BBBB8451chl0BhBfd' --> 'BifkhBBBBBBBchlBhBfd'
// '8aaaaa dd5dd 7r0' --> 'aaaaa dd5dd r'

// const someValue = '8aaaaa dd5dd 7r0';

// function stringClean(value) {
//     let string = '';
//     for (const el of value) {
//         if (isNaN(el) || el === " ") {
//             string += el
//         }
//     }
//     return string
// }
// console.log(stringClean(someValue))





// ★ 35. Задача ★ -

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

// let str = "aAAbbccde"

// const getObject = string => {
//     let newObj = {};
//     for (const el of string) {
//         newObj += el
        
//     }
//     return newObj
// }

// console.log(getObject(str));



// ★ 36. Задача ★

// Написать функцию, на вход которой подаётся строка с простым матемтическим выражением: 11 + 3, или 7*9. Функция возвращает результат сложения/умножения/деления и т.п. Примечание: функцию eval() не использовать!



// ★ 37. Задача ★

// Даны переменные типа string. Написать функцию, которая преобразует эти переменные к типу number, убрав лишние знаки.

// const a = "1_234_567_890"; // 1234567890
// const b = "4_5435_6548_9430"; // 4543565489430
// const c = "1_"; // 1
// const d = "_2"; // 2


// ★ 38. Задача ★

// Написать функцию, на вход которой в функцию подаётся строка дата в формате: "ДД.ММ.ГГГГ" Функция возвращает true, если такая дата существует, иначе false.

// Необходимо учесть високосные года;
// Функция работает только с положительными годами (наша эра);
// Выполнить программу без использования Date();



// ★ 39. Задача ★

// Написать программу-кодировщик: s = 'aabbbсaaaa' преобразуется в 'a2b3с1a4', то есть группы одинаковых символов исходной строки заменяются на этот символ и количество его повторений в этой позиции строки. Кодировщик должен учитывать регистр:

// "aBc" -> "a1B1c1"