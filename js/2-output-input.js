/*
2 тема - js
0. Установить плагин: JavaScript Snippet Pack (Author: Mahmoud Ali) +
*/

// 1. Как вывести в консоль браузера строку, число, переменную?


console.log(100);
console.log("text");

let authorBook = "А.С. Пушкин";
console.log(authorBook);

let moscowRingRoad = 100;
console.log(moscowRingRoad);


/*
создаем файл .js, подключаем к html, работаем в файле js и через команду console.log выводим данные в консоль браузера
*/


/*
2. Что такое и чем отличается функция alert от console.log? +

alert выводит сообщение окошком и останавливает выполнение кода, пока не закроешь это окно. Так же пишут что это окно видно пользователям. 
console.log выводит сообщение консоль, не останавливая выполнения кода и не видно пользователям.
*/


/*
3. Что такое конкатенация строка? Как это делать? +

Вы можете объединить (или «конкатенировать») несколько строк, чтобы создать новую, используя символ +:
*/

let firstName = "Роман";
let secondName = "Лебедев";
console.log(firstName + " " + secondName);
// console.log(firstName, secondName);


/*
4. Где можно делать склеивание строк? + -

В разных примерах они делали склеивание в присвоении, в функциях, в выводе в консоль.
Предположу что где требуется, там и реализоваем этот функционал.
*/

/*
5. Что будет, если склеить число со строкой, а наоборот? А число с числом и т.д.? + -

Число с числом сложения не будет, просто два обьекта буду стоять рядом, так же и с другими переменными, только придется преобразовывать к общему типу.
*/

console.log(10 + 10); // 20

console.log(10 + '10'); // 1010
console.log('10' + 10); // 1010
console.log('10' + '10'); // 1010

console.log(10 + 10 + '10'); // 2010
console.log(10 + 10 * '10'); // 110



/*
6. Что делает функция prompt? +

Метод prompt() предназначен для вывода диалогового окна с сообщением, текстовым полем для ввода данных и кнопками «ОК» и «Отмена». Это окно предназначено для запроса данных, которые пользователю нужно ввести в текстовое поле.
*/

// let result = prompt("Представься:");
// console.log(result); // В переменой result всегда тип = string


//7. Как преобразовать строку к типу числа и зачем это нужно? (Намек в 5 вопросе) + -


let strTest = "7";
// console.log(typeof strTest);
// let numTest = Number(strTest);
console.log(Number(strTest) + 10); // 17

// что бы НЕ склеивать строки и числа :)


/*
8. Что такое оператор typeof? +

Оператор typeof возвращает строку, указывающую тип операнда.
*/
// 10 + 20
console.log(typeof 42);



//9. Как запросить у пользователя ввести с клавиатуры число, а как строку/символ/текст?+

/*
Предположу что делаем через prompt(скорее всего есть настройка внешнего вида). Потом приводим к нужному виду и работаем с данными. Ну или сразу работаем с тем что есть или вообще не работаем, так как пришел null.
*/

// let text = prompt('Введите текст/строку/символ ...');


// let number = Number(prompt('Введите число'));
// console.log(1 / number);
