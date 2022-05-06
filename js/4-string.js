// 4 тема - js(Основы типа String)

// 1) Что такое escape - последовательности(\n \t  \\ ...) + -

// \n - символ перевода строки
// console.log("- Are you hungry?\n- Aaaarrrgh!");

// \t - знак табуляции
// console.log("- Are you hungry?\t- Aaaarrrgh!");

// \\ -  обратный слеш
// console.log("- Are you hungry?\\- Aaaarrrgh!")

// \'
// \"

// console.log("\"text\"");
// console.log('"text"');


// 2) Как узнать количество символов в строке ? +
// Узнать количество символов в строке можно через свойство length.

// let text = "JavaScript";
// text.length; // 10.



// 3) Преобразовать строку к верхнему / нижнему регистру +

// let down = "НИЖНИЙ РЕГИСТР";
// console.log(down.toLowerCase());

// let up = "Верхний регистр";
// console.log(up.toUpperCase());



// 4) Как преобразовать число к типу String +
// явно указать тип

// let num = String(10);
// console.log(typeof num);



// 5) 3 способа вывести в консоль: через запятую, через конкатенацию, через шаблонные литералы(заодно узнать что это)

// console.log(1, 2);
// console.log(1 + " + " + 2);

// console.log("string text line 1 \nstring text line 2");
// console.log(`string text line 1 
// string text line 2`);

// let km = 5;
// console.log("Через " + km + "км, a не " + (km + km) + " будет поворот.");
// console.log(`Через ${km} км, a не ${km + km} будет поворот.`);

// Шаблонными литералами называются строковые литералы, допускающие использование выражений внутри. 
// Строковые литералы – символы, заключенные в одинарные или двойные кавычки.
// Называют синтаксический сахар - это синтаксические возможности, применение которых не влияет на поведение программы, но делает использование языка более удобным для человека.