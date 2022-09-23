


// function change(str) {
//     let arrStr = str.split('')
//     let newArr = []
//     for (let i = 0; i < arrStr.length; i++) {
//         if (arrStr[i] === 'a') {
//             newArr += 'b'
//         } else if (arrStr[i] === 'b') {
//             newArr += 'a'
//         } else if (arrStr[i] !== 'b' || arrStr[i] !== 'a') {
//             newArr += arrStr[i]
//         }
//     }
//     return newArr
// }

// console.log(change('abc'));

function dotCalculator(equation) {



    return '...';
}

console.log(change('abc'));


// вопрос саше
function countPositivesSumNegatives(input) {
    let positive = 0
    let negative = 0
    if (!input) {
        return []
    }

    for (let i = 0; i < input.length; i++) {
        input[i] > 0 ? positive++ : negative += input[i]
    }
    if (positive === 0 && negative === 0) {
        return []
    }
    return [positive, negative]
}


console.log(countPositivesSumNegatives());

// вопрос саше
function countPositivesSumNegatives(input) {
    let positive = 0
    let negative = 0


    for (let i = 0; i < input.length; i++) {
        input[i] > 0 ? positive++ : negative += input[i]
    }
    if (positive === 0 && negative === 0) {
        return []
    }
    return [positive, negative]
}

// TypeError: Cannot read property 'length' of null
//     at countPositivesSumNegatives (test.js:8:31)
//     at Context.<anonymous> (test.js:40:18)
//     at processImmediate (internal/timers.js:464:21)






// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

// console.log(countPositivesSumNegatives([0]));
// console.log(countPositivesSumNegatives([0, 0]));
console.log(countPositivesSumNegatives([null]));






        // function a2hex(str) {
        //     let arr = [];
        //     for (let i = 0; i < str.length; i++) {
        //         let hex = Number(str.charCodeAt(i)).toString(16);
        //         arr.push(hex);
        //     }

        //     let hex = arr.join('');
        //     let s = hex.split('')
        //     // let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        //     // let j = []
        //     // for (let i = 0; i < s.length; i++) {
        //     //     s[i] === nums[i] && (j.push(nums[i]))
        //     // }

        //     return s
        // }
        // ; //returns 32343630

        // // console.log(a2hex('Hello, World!'));






        // // Square Every Digit
        // function squareDigits(num) {
        //     const arrNum = String(num).split('')
        //     let stringNum = ''
        //     arrNum.forEach(el => stringNum += el * el);
        //     return Number(stringNum)
        // }

        // // palindrome
        // function palindrome(str) {
        //     const poli = str.split('').reverse().join('')
        //     let poliArr = poli.split('')
        //     let str2 = str.split('')
        //     console.log(poliArr);

        //     let s = []
        //     let t = []

        //     for (const el of poliArr) {
        //         el !== ' ' && s.push(el)
        //     }

        //     for (const el of str2) {
        //         el !== ' ' && t.push(el)
        //     }
        //     console.log(s);
        //     console.log(t);
        //     let g = s.join('').toLowerCase()
        //     let h = t.join('').toLowerCase()
        //     console.log(g);
        //     console.log(h);


        //     if (g.toLowerCase() === h.toLowerCase()) {
        //         return true
        //     } else {
        //         return false
        //     }
        // }