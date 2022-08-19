// Создайте функцию calculate. Функция должна принимать арифметические операции двух чисел в виде строки и возвращать строку с результатом их выполнения.

// ? Функция принимает данные из аргумента и возвращает с помощью return. +

// Разбейте ваше решение на функции, отвечающие за разные области.

// Задача, которая состоит из одной функции – не засчитывается!

// ? •	Калькулятор умеет выполнять операции сложения, вычитания, умножения и деления с двумя числами: a + b, a - b, a * b, a / b. Данные передаются в виде одной строки! +

// ? •	Калькулятор умеет работать как с арабскими (1,2,3,4,5…), так и с римскими (I,II,III,IV,V…) числами.

// ? •	Калькулятор должен принимать на вход числа от 1 до 10 включительно, не более. На выходе числа не ограничиваются по величине и могут быть любыми. +

// •	Калькулятор умеет работать только с целыми числами. 

// ? •	Результат на выходе всегда строка с целым числом. В делении учитываем только целую часть. +

// •	Калькулятор умеет работать только с арабскими или римскими цифрами одновременно, при вводе пользователем строки вроде 3 + II калькулятор должен бросить error и прекратить свою работу.

// ? •	Т.к. в римской системе нет нуля и отрицательных чисел - возвращаем пустую строку. +

// •	При вводе пользователем неподходящих чисел калькулятор должен бросить error и завершить свою работу.

// •	При вводе пользователем строки, не соответствующей одной из вышеописанных арифметических операций приложение бросить error и завершает свою работу.




// Expression - выражение перевод


const mathExpression = "20 * 50"


function calculate(string) {

    let a = 0;
    let b = 0;
    let operator = "";

    let result = "";
    // делаем посимвольно

    let stringSplit = string.split(' ')


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





    // проверяем длину строки
    if (stringSplit.length === 4) {
        // проверяем на количество символов и присваиваем значения из строк
        if (stringSplit.length < 4) {
            a = stringSplit[0];
            b = stringSplit[2];
            operator = stringSplit[1];
        } else {
            throw new Error('Uncorrected action AAA');
        }
    } else {
        // присваиваем а

        for (const el of string) {
            if (el !== "+" && el !== "-" && el !== "/" && el !== "*") {
                a += el
            } else {
                break
            }
        }

        // присваиваем оператор
        for (const el of string) {
            if (el === "+" || el === "-" || el === "/" || el === "*") {
                operator += el
            }

            // теперь b присваиваем
            const arrEl = string.split('').reverse().join('');

            let elementReverse = ''

            for (const el of arrEl) {
                if (el !== "+" && el !== "-" && el !== "/" && el !== "*") {
                    elementReverse += el
                } else {
                    break
                }
            }

            b = elementReverse.split('').reverse().join('')
        }


        // считаем
        if (Number(a) && Number(b)) {
            const count = {
                '+': (a, b) => parseInt(a) + parseInt(b),
                '-': (a, b) => a - b,
                '*': (a, b) => a * b,
                '/': (a, b) => a / b,
            };
            result = count[operator](a, b);
        } else {
            throw new Error('Uncorrected action AAAA');
        }

        // для отладки сразу в консоль
        // return console.log(String(Math.round(result)));
        // в прод ;)
        return String(Math.round(result));
    }
}


const answer = calculate(mathExpression);
console.log(answer);
console.log(typeof answer);




//==========================




//===============================


const mathExpression1 = "V + V";
const mathExpression2 = "1.5 - 10";

function romanCalc(string) {

    let a = '';
    let b = '';
    let operator = "";
    let result = "";

    // делаем посимвольно
    let stringSplit = string.split(' ')


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
    for (const el of stringSplit) {
        if (el !== "+" && el !== "-" && el !== "/" && el !== "*") {
            a += el
        } else {
            break
        }
    }

    // присваиваем оператор
    for (const el of stringSplit) {
        if (el === "+" || el === "-" || el === "/" || el === "*") {
            operator += el
        }
    }

    //теперь b присваиваем
    const arrEl = string.split('').reverse().join('');
    let elementReverse = ''

    for (const el of arrEl) {
        if (el !== "+" && el !== "-" && el !== "/" && el !== "*") {
            elementReverse += el
        } else {
            break
        }
        b = elementReverse.split('').reverse().join('')
    }


    // проверка от 1 до 10 вкл int
    if (a > 10 || a < 1) {
        throw new Error('Uncorrected action BBB');
    }

    if (b > 10 || b < 1) {
        throw new Error('Uncorrected action BBB');
    }

    // // проверка на целое число
    // if (Number.isInteger(a) || Number.isInteger(b)) {
    //     console.log(Number.isInteger(a));
    //     throw new Error('Uncorrected action CCC');
    // }



    // удаляем пробелы, а то NAN на b
    b = b.trim()

    // проверяем на вывод в консоль
    if (isNaN(a) && isNaN(b)) {
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
        if (result < 1) {
            console.log('');
        }


        // теперь результат переводим в римские цифры
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

        if (Number(aInt) && Number(bInt)) {
            const count = {
                '+': (aInt, bInt) => parseInt(aInt) + parseInt(bInt),
                '-': (aInt, bInt) => aInt - bInt,
                '*': (aInt, bInt) => aInt * bInt,
                '/': (aInt, bInt) => aInt / bInt,
            };
            // округляем и приводим к стринг
            result = String(Math.round(count[operator](aInt, bInt)))
        }
    }
    return result
}


console.log(romanCalc(mathExpression1));
console.log(romanCalc(mathExpression2));





// calculate('1 + 2'); // '3' +
// calculate('1+2'); // '3' +
// calculate(' 1  +    2 '); // '3' +
// calculate('VI / III'); // 'II'
// calculate('VII / III'); // 'II'
// calculate('I + II'); // 'III'
// calculate('I - II'); // ''
// calculate('I + 1'); // throws Error
// calculate('I'); // throws Error
//calculate('1 + 1 + 1'); // throws Error +

// Процесс отладки и тестирования:
// Должен работать с десятичными числами (сложение)
// calculate('1 + 1')//.toBe('2'); +
// calculate('1 + 2')//.toBe('3'); +
// calculate('1+2')//.toBe('3'); +
// calculate('4 + 3')//.toBe('7'); +
// calculate('10 + 10')//.toBe('20'); +

// Должен работать с десятичными числами (вычитание)
//   calculator('10 - 1').toBe('9');
//   calculator('5-4').toBe('1');
//   calculator('4 - 4').toBe('0');
//   calculator('1 - 10').toBe('-9');
//   calculator('4 - 5').toBe('-1');

// Должен работать с десятичными числами (умножение)
// calculate('10 * 10').toBe('100');
// calculate('4*10').toBe('40');
// calculate('5 * 1').toBe('5');
// calculate('5 * 5').toBe('25');


// Должен работать с десятичными числами (деление)
//   calculator('10 / 1').toBe('10');
//   calculator('6/2').toBe('3');
//   calculator('5 / 4').toBe('1');
//   calculator('2 / 4').toBe('0');

// Должен работать с римскими числами (сложение)
//   calculator('I + I').toBe('II');
//   calculator('I + II').toBe('III');
//   calculator('IV + III').toBe('VII');
//   calculator('X+X').toBe('XX');
//   calculator('X + IX').toBe('XIX');

// Должен работать с римскими числами (вычитание)
//   calculator('X - I').toBe('IX');
//   calculator('V - IV').toBe('I');
//   calculator('IV - IV').toBe('');
//   calculator('I - X').toBe('');
//   calculator('IV - V').toBe('');

// Должен работать с римскими числами (умножение)
//   calculator('X * X').toBe('C');
//   calculator('IV * X').toBe('XL');
//   calculator('V * I').toBe('V');
//   calculator('V * V').toBe('XXV');

// Должен работать с римскими числами (деление)
//   calculator('X / I').toBe('X');
//   calculator('VI / II').toBe('III');
//   calculator('V / IV').toBe('I');
//   calculator('II / IV').toBe('');

//  Должен выбрасывать ошибку на некорректных данных
// calculator('').toThrowError();
// calculator(' ').toThrowError();
// calculator('     ').toThrowError();
// calculator('4').toThrowError();
// calculator('+').toThrowError();
// calculator('++1').toThrowError();
// calculator('V').toThrowError();
// calculator('3 % 4').toThrowError();
// calculator('1 + 1 + 1').toThrowError();
// calculator('11 + 1').toThrowError();
// calculator('1 + 11').toThrowError();
// calculator('XI + I').toThrowError();
// calculator('I + XI').toThrowError();
// calculator('1 + V').toThrowError();
// calculator('I + 1').toThrowError();
// calculator('5 / 0').toThrowError();
// calculator('0 + 1').toThrowError();
// calculator('1 + 0').toThrowError();

