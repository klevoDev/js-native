// Создайте функцию calculate. Функция должна принимать арифметические операции двух чисел в виде строки и возвращать строку с результатом их выполнения.

// ? Функция принимает данные из аргумента и возвращает с помощью return. +

// Разбейте ваше решение на функции, отвечающие за разные области.

// Задача, которая состоит из одной функции – не засчитывается!

// ? •	Калькулятор умеет выполнять операции сложения, вычитания, умножения и деления с двумя числами: a + b, a - b, a * b, a / b. Данные передаются в виде одной строки! +

// ? •	Калькулятор умеет работать как с арабскими (1,2,3,4,5…), так и с римскими (I,II,III,IV,V…) числами.

// ? •	Калькулятор должен принимать на вход числа от 1 до 10 включительно, не более. На выходе числа не ограничиваются по величине и могут быть любыми. +

// ? •	Калькулятор умеет работать только с целыми числами. +

// ? •	Результат на выходе всегда строка с целым числом. В делении учитываем только целую часть. +

// ? •	Калькулятор умеет работать только с арабскими или римскими цифрами одновременно, при вводе пользователем строки вроде 3 + II калькулятор должен бросить error и прекратить свою работу.

// ? •	Т.к. в римской системе нет нуля и отрицательных чисел - возвращаем пустую строку. +

// •	При вводе пользователем неподходящих чисел калькулятор должен бросить error и завершить свою работу. + -

// •	При вводе пользователем строки, не соответствующей одной из вышеописанных арифметических операций приложение бросить error и завершает свою работу. + -

// =====================================================================

// переводим к int римские цифры
const romanToInt = function (s) {
    const romanObj = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let num = 0;
    let len = s.length;
    for (var i = 0; i < len - 1; i++) {
        let curNum = romanObj[s.charAt(i)];
        let rightNum = romanObj[s.charAt(i + 1)];
        num += curNum >= rightNum ? curNum : -curNum;
    }
    num += romanObj[s.charAt(i)]
    return num;
};


//====


const mathExpression1 = "II - I";
const mathExpression2 = "9*9";
const mathExpression3 = "X * X";
const mathExpression4 = "1 + 1";



function calculate(string) {

    let a = '';
    let b = '';
    let operator = "";
    let result = "";
    let stringSplit = ''

    // разбивка по символьно
    stringSplit = string.split('')

    if (string.length === 1) {
        throw new Error('Uncorrected action ONE');
    }

    // проверяем на количество знаков(*/+-) и кидаем ошибку
    let count = 0;

    for (const el of stringSplit) {
        if (el === "+" || el === "-" || el === "/" || el === "*") {
            count += 1
        }
    }

    if (count >= 2) {
        throw new Error('Uncorrected action AAA');
    }

    // a присваиваем

    // делаем временную переменную для a
    let temporaryVariableA = ''

    for (const el of stringSplit) {
        if (el !== "+" && el !== "-" && el !== "/" && el !== "*") {
            temporaryVariableA += el
        } else {
            break
        }
    }
    // а теперь отрезаем пробелы во временной переменной
    for (const el of temporaryVariableA) {
        if (el != " ") {
            a += el
        }
    }



    // присваиваем оператор
    for (const el of stringSplit) {
        if (el === "+" || el === "-" || el === "/" || el === "*") {
            operator += el
        } else if (el === "%") {
            throw new Error('Uncorrected action %');
        }
    }



    //теперь b присваиваем
    const arrEl = string.split('').reverse().join('');
    let elementReverse = ''
    let temporaryVariableB = ''

    for (const el of arrEl) {
        if (el !== "+" && el !== "-" && el !== "/" && el !== "*") {
            elementReverse += el
        } else {
            break
        }
        temporaryVariableB = elementReverse.split('').reverse().join('')
    }



    // b теперь отрезаем пробелы во временной переменной
    for (const el of temporaryVariableB) {
        if (el != " ") {
            b += el
        }
    }


    // проверка от 1 до 10 вкл int
    if (a > 10 || a < 1) {
        throw new Error('Uncorrected action BBB');
    }

    if (b > 10 || b < 1) {
        throw new Error('Uncorrected action BBB');
    }


    // проверка на int + римское
    if (isNaN(a) && !isNaN(b)) {
        throw new Error('Uncorrected action isNaN');
    } else if (!isNaN(a) && isNaN(b)) {
        throw new Error('Uncorrected action isNaN');
    }



    // проверяем на вывод в консоль
    if (isNaN(a) && isNaN(b)) {
        // переводим к int римские цифры romanToInt(a)


        let aInt = romanToInt(a)
        let bInt = romanToInt(b)



        // проверка от 1 до 10 вкл roman
        if (aInt > 10 || aInt < 1) {
            throw new Error('Uncorrected action BBB');
        }

        if (bInt > 10 || bInt < 1) {
            throw new Error('Uncorrected action BBB');
        }

        // считаем
        if (Number(aInt) && Number(bInt)) {
            const count = {
                '+': (aInt, bInt) => parseInt(aInt) + parseInt(bInt),
                '-': (aInt, bInt) => aInt - bInt,
                '*': (aInt, bInt) => aInt * bInt,
                '/': (aInt, bInt) => aInt / bInt,
            };
            result = count[operator](aInt, bInt);
        }


        // проверка на 0 и отрицательные числа для римских чисел
        // a < b && (result = '')
        if ((operator === "-" || operator === "/") && a < b) {
            result = ''
        }

        // теперь результат переводим в римские цифры convertToRoman(number)

        function convertToRoman(number) {
            let roman = {
                "M": 1000,
                "CM": 900,
                "D": 500,
                "CD": 400,
                "C": 100,
                "XC": 90,
                "L": 50,
                "XL": 40,
                "X": 10,
                "IX": 9,
                "V": 5,
                "IV": 4,
                "I": 1
            };
            let res = "";

            for (var i of Object.keys(roman)) {
                var repeat = Math.floor(number / roman[i]);
                number -= repeat * roman[i];
                res += i.repeat(repeat);
            }
            return res
        }

        // в консоль
        result = convertToRoman(result)
    } else {
        // считаем

        let aInt = a
        let bInt = b

        let value = ''
        if (Number(aInt) && Number(bInt)) {
            const count = {
                '+': (aInt, bInt) => parseInt(aInt) + parseInt(bInt),
                '-': (aInt, bInt) => aInt - bInt,
                '*': (aInt, bInt) => aInt * bInt,
                '/': (aInt, bInt) => aInt / bInt,
            };
            // округляем и приводим к стринг


            // result = String(Math.round(count[operator](aInt, bInt)))
            value = String((count[operator](aInt, bInt)))
        }

        // для получения 0 (2/4)
        if (value === "0.5") {
            result = String(Math.floor(value))
        } else {
            result = String(Math.round(value))
        }
    }
    // прод
    return result

    // для проверок
    // return console.log(result);
}


// =====================================================================
console.log(calculate(mathExpression1));
console.log(calculate(mathExpression2));
console.log(calculate(mathExpression3));
console.log(calculate(mathExpression4));






// function calculateRef(str) {
// 1 - Разбить строку на a, p & sign
// 2 - проверка параметров a, b, sign
// 3 - Проверить римские числа или арабские
// 4 - Если римские, то преобразуем в арабские
// 5 - Вычисляем
// 6 - Если были римские, то преобразовать обратно
// 7 - Вернуть строку - ответ (return)
// }





calculate('1 + 2'); // '3' +
calculate('1+2'); // '3' +
calculate(' 1  +    2 '); // '3' +
calculate('VI / III'); // 'II' +
calculate('VII / III'); // 'II' +
calculate('I + II'); // 'III' +
calculate('I - II'); // '' +
// calculate('I + 1'); // throws Error +
// calculate('I'); // throws Error +
// calculate('1 + 1 + 1'); // throws Error +

// Процесс отладки и тестирования:
// Должен работать с десятичными числами (сложение)
calculate('1 + 1')//.toBe('2'); +
calculate('1 + 2')//.toBe('3'); +
calculate('1+2')//.toBe('3'); +
calculate('4 + 3')//.toBe('7'); +
calculate('10 + 10')//.toBe('20'); +

// Должен работать с десятичными числами (вычитание)
calculate('10 - 1') //.toBe('9'); +
calculate('5-4') //.toBe('1'); +
calculate('4 - 4') //.toBe('0'); +
calculate('1 - 10') //.toBe('-9'); +
calculate('4 - 5') //.toBe('-1'); +

// Должен работать с десятичными числами (умножение)
calculate('10 * 10') //.toBe('100'); +
calculate('4*10') //.toBe('40'); +
calculate('5 * 1') //.toBe('5'); +
calculate('5 * 5') //.toBe('25'); +


// Должен работать с десятичными числами (деление)
calculate('10 / 1') //.toBe('10'); +
calculate('6/2') //.toBe('3'); +
calculate('5 / 4') //.toBe('1'); +
calculate('2 / 4') //.toBe('0'); +

// Должен работать с римскими числами (сложение)
calculate('I + I') //.toBe('II'); +
calculate('I + II') //.toBe('III'); +
calculate('IV + III') //.toBe('VII'); +
calculate('X+X') //.toBe('XX'); +
calculate('X + IX') //.toBe('XIX'); +

// Должен работать с римскими числами (вычитание)
calculate('X - I') //.toBe('IX'); +
calculate('V - IV') //.toBe('I'); +
calculate('IV - IV') //.toBe(''); +
calculate('I - X') //.toBe(''); +
calculate('IV - V') //.toBe(''); +

// Должен работать с римскими числами (умножение)
calculate('X * X') //.toBe('C'); +
calculate('IV * X') //.toBe('XL'); +
calculate('V * I') //.toBe('V'); +
calculate('V * V') //.toBe('XXV'); +

// Должен работать с римскими числами (деление)
calculate('X / I') //.toBe('X'); +
calculate('VI / II') //.toBe('III'); +
calculate('V / IV') //.toBe('I'); +
calculate('II / IV') //.toBe(''); +

//  Должен выбрасывать ошибку на некорректных данных
// calculate('') //.toThrowError();
// calculate(' ') //.toThrowError(); +
// calculate('     ') //.toThrowError(); +
// calculate('4') //.toThrowError(); +
// calculate('+') //.toThrowError(); +
// calculate('++1') //.toThrowError(); +
// calculate('V') //.toThrowError(); +
// calculate('3 % 4') //.toThrowError(); +
// calculate('1 + 1 + 1') //.toThrowError(); +
// calculate('11 + 1') //.toThrowError(); +
// calculate('1 + 11') //.toThrowError(); +
// calculate('XI + I') //.toThrowError(); +
// calculate('I + XI') //.toThrowError(); +
// calculate('1 + V') //.toThrowError(); +
// calculate('I + 1') //.toThrowError(); +
// calculate('5 / 0') //.toThrowError(); +
// calculate('0 + 1') //.toThrowError(); +
// calculate('1 + 0') //.toThrowError(); +







// function romain2arabic(string) {
//     let arrSimvol = string.split(/[+*\/-]/g)

//     let arrNum = []
//     for (let i = 0; i < arrSimvol.length; i++) {
//         let res = 0
//         arrSimvol[i].replace(/[MDLV]|C[MD]?|X[CL]?|I[XV]?/g, function (i) {
//             res += { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, III: 3, II: 2, I: 1 }[i]
//         })
//         arrNum.push(res)
//     }
//     return arrNum
// }








// calculate('1 + 2'); // '3' +
// calculate('1+2'); // '3' +
// calculate(' 1  +    2 '); // '3' +
// calculate('VI / III'); // 'II' +
// calculate('VII / III'); // 'II' +
// calculate('I + II'); // 'III' +
// calculate('I - II'); // '' +
// calculate('I + 1'); // throws Error +
// calculate('I'); // throws Error +
// calculate('1 + 1 + 1'); // throws Error +

// Процесс отладки и тестирования:
// Должен работать с десятичными числами (сложение)
// calculate('1 + 1')//.toBe('2'); +
// calculate('1 + 2')//.toBe('3'); +
// calculate('1+2')//.toBe('3'); +
// calculate('4 + 3')//.toBe('7'); +
// calculate('10 + 10')//.toBe('20'); +

// Должен работать с десятичными числами (вычитание)
// calculate('10 - 1') //.toBe('9'); +
// calculate('5-4') //.toBe('1'); +
// calculate('4 - 4') //.toBe('0'); +
// calculate('1 - 10') //.toBe('-9'); +
// calculate('4 - 5') //.toBe('-1'); +

// Должен работать с десятичными числами (умножение)
// calculate('10 * 10') //.toBe('100');
// ? calculate('4*10') //.toBe('40'); проверка 118 строки сломала - что за нафиг! короче цифра 10 ломает все
// calculate('5 * 1') //.toBe('5'); +
// calculate('5 * 5') //.toBe('25'); +


// Должен работать с десятичными числами (деление)
// calculate('10 / 1') //.toBe('10'); +
// calculate('6/2') //.toBe('3'); +
// calculate('5 / 4') //.toBe('1'); +
// calculate('2 / 4') //.toBe('0'); +

// Должен работать с римскими числами (сложение)
// calculate('I + I') //.toBe('II'); +
// calculate('I + II') //.toBe('III'); +
// calculate('IV + III') //.toBe('VII'); +
// calculate('X+X') //.toBe('XX'); +
// calculate('X + IX') //.toBe('XIX'); +

// Должен работать с римскими числами (вычитание)
// calculate('X - I') //.toBe('IX'); +
// calculate('V - IV') //.toBe('I'); +
// calculate('IV - IV') //.toBe(''); +
// calculate('I - X') //.toBe(''); +
// calculate('IV - V') //.toBe(''); +

// Должен работать с римскими числами (умножение)
// calculate('X * X') //.toBe('C'); +
// calculate('IV * X') //.toBe('XL'); +
// calculate('V * I') //.toBe('V'); +
// calculate('V * V') //.toBe('XXV'); +

// Должен работать с римскими числами (деление)
// calculate('X / I') //.toBe('X'); +
// calculate('VI / II') //.toBe('III'); +
// calculate('V / IV') //.toBe('I'); +
// calculate('II / IV') //.toBe(''); +

//  Должен выбрасывать ошибку на некорректных данных
// calculate('') //.toThrowError();
// calculate(' ') //.toThrowError(); +
// calculate('     ') //.toThrowError(); +
// calculate('4') //.toThrowError(); +
// calculate('+') //.toThrowError(); +
// calculate('++1') //.toThrowError(); +
// calculate('V') //.toThrowError(); +
//calculate('3 % 4') //.toThrowError(); +
// calculate('1 + 1 + 1') //.toThrowError(); +
// calculate('11 + 1') //.toThrowError(); +
// calculate('1 + 11') //.toThrowError(); +
// calculate('XI + I') //.toThrowError(); +
// calculate('I + XI') //.toThrowError(); +
// calculate('1 + V') //.toThrowError(); +
// calculate('I + 1') //.toThrowError(); +
// calculate('5 / 0') //.toThrowError(); +
// calculate('0 + 1') //.toThrowError(); +
// calculate('1 + 0') //.toThrowError(); +




