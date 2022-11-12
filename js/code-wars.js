












// ======================>


// 7 kyu Small enough? - Beginner +

// function smallEnough(a, limit) {
//     const value = a.find(el => el > limit)
//     return value > limit ? false : true
// }


// ======================>


// 6 kyu Break camelCase +

// const sort = (str) => {
//     let newArr = []
//     for (const el of str) {
//         if (el !== el.toUpperCase()) {
//             newArr.push(el)
//         } else {
//             newArr.push(' ')
//             newArr.push(el)
//         }
//     }

//     return newArr.join('')
// }

// console.log(sort("idenTifier"));


// ======================>


// 6 kyu Find the unique number

// const test = (arr) => {
//     let num = []
//     for (const el of arr) {
//         if (arr[0] === arr[1]) {
//             el !== arr[0] && num.push(el)
//         } else {
//             if (arr[0] === arr[2]) {
//                 return arr[1]
//             } else {
//                 return arr[0]
//             }
//         }
//     }
//     return Number(num)
// }


// console.log(test([1, 0, 0]));
// console.log(test([0, 1, 0]));
// console.log(test([0, 0, 1]));


// ======================>


// 6 kyu Does my number look big in this?

// const numbers = (num) => {
//     const arrNum = String(num).split('')
//     const multiplier = arrNum.length
//     let sum = 0
//     for (const el of arrNum) {
//         sum += el ** multiplier
//     }

//     return sum === num ? true : false
// }


// console.log(numbers(1533));


// ======================>


// 6 kyu Find The Parity Outlier +

// function findOutlier(i) {

//     let odd = []
//     let even = []

//     for (const el of i) {
//         el % 2 === 0 ? even.push(el) : odd.push(el)
//     }

//     if (odd.length > 1) {
//         return Number(even.join(''))
//     } else {
//         return Number(odd.join(''))
//     }
// }


// console.log(findOutlier([1, 1, 0, 1, 1]));


// ======================>


// 6 kyu Bit Counting +

// var countBits = function (n) {
//     let nBin = n.toString(2)
//     let total = ''
//     for (const el of nBin) {
//         el === '1' && total++
//     }
//     return total
// };

// console.log(countBits(8784356007));


// ======================>


// 6 kyu Create Phone Number +

// function createPhoneNumber(numbers) {
//     let codeCountry = []
//     let codeCity = []
//     let homePhone = []

//     for (let i = 0; i < numbers.length; i++) {
//         if (i < 3) {
//             codeCountry.push(numbers[i])
//         } else if (i > 2 && i < 6) {
//             codeCity.push(numbers[i])
//         } else if (i > 5) {
//             homePhone.push(numbers[i])
//         }
//     }
//     return `(${codeCountry.join('')}) ${codeCity.join('')}-${homePhone.join('')}`
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


// ======================>


// 8 kyu Even or Odd +

// function evenOrOdd(number) {
//     return number % 2 === 0 ? "Even" : "Odd";
// }


// ======================>


// 6 kyu Multiples of 3 or 5 +

// function solution(number) {
//     let sum = 0
//     for (let i = 0; i < number; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i
//         }
//     }
//     return sum;
// }
// console.log(solution(15));


// ======================>


// 7 kyu Highest and Lowest +

// function highAndLow(numbers) {
//     const arrNumbers = numbers.split(' ')
//     return `${Math.max(...arrNumbers)} ${Math.min(...arrNumbers)}`
// }

// console.log(highAndLow('1 2 -3 4 5'));


// ======================>


// 7 kyu Vowel Count +

// function getCount(str) {
//     let count = 0
//     for (let i = 0; i < str.length; i++) {

//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//             count++
//         }
//     }
//     return count;
// }
// console.log(getCount('abracadabra'));


// ======================>


// 6 kyu Who likes it? +

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


// ======================>


// 6 kyu Zero-plentiful Array +

// function countZero(arr) {

//     let count = 0

//     for (let i = 0; i < arr.length; i++) {
//         if (i % 5 === 0 && arr[i] !== 0) {
//             count++
//         }
//     }

//     return count
// }





