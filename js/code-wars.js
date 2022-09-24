



// 6 kyu Who likes it?
// function likes(names) {
//     let count = 0

//     names.forEach(el => count++);

//     if (count === 0) {
//         return "no one likes this"
//     } else if (count === 1) {
//         return `${names[0]} likes this`
//     } else if (count === 2) {
//         return `${names[0]} and ${names[1]} like this`
//     } else if (count === 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`
//     } else if (count > 3) {
//         return `"${names[0]}, ${names[1]} and ${count - 2} others like this"`
//     }
// }



// 6 kyu Replace With Alphabet Position


// 6 kyu Zero-plentiful Array
function countZero(arr) {

    let count = 0

    for (let i = 0; i < arr.length; i++) {
        if (i % 5 === 0 && arr[i] !== 0) {
            count++
        }
    }

    return count
}








// function upperCase(str) {
//     if (str === str.toUpperCase()) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(upperCase('LS'));






// function numCount(num) {

//     let count = 1

//     for (let i = 0; i < num; i++) {
//         num % i === 0 && (count++)
//     }
//     return count
// }

// console.log(numCount(12));


// function countPositivesSumNegatives(input) {
//     let positive = 0
//     let negative = 0
//     if (!input) {
//         return []
//     }

//     for (let i = 0; i < input.length; i++) {
//         input[i] > 0 ? positive++ : negative += input[i]
//     }
//     if (positive === 0 && negative === 0) {
//         return []
//     }
//     return [positive, negative]
// }



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