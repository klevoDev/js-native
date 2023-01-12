




















function betterThanAverage(classPoints, yourPoints) {
   return Math.max.apply(null, classPoints) < yourPoints
  }

console.log(betterThanAverage([1, 2], 4));
// ======================>


// 8 kyu Sum Arrays


// function sum (numbers) {
//     if (numbers === []) {
//         return 0
//     } else {
//         let result = numbers.reduce((increase, num) =>  increase + num, 0);
//         return result
//     } 
// };


// ======================>


// 8 kyu Beginner - Reduce but Grow


// function grow(x){
//     let result = x.reduce((increase, num) =>  increase * num, 1);
//       return result
// }

// console.log(grow([1,2,3]));


// ======================>


// 8 kyu Reversed sequence


// const reverseSeq = n => {
//     let arr = []
//     for (let i = 1; i <= n; i++) {
//         arr.push(i)
//     }
//     return arr.reverse()
//   };


// ======================>


// 8 kyu Calculate BMI


// function bmi(weight, height) {
//     if(weight / height ** 2 <= 18.5) {
//         return "Underweight"
//     } else if (weight / height ** 2 <= 25.0) {
//         return "Normal"
//     } else if(weight / height ** 2 <= 30.0) {
//         return "Overweight"
//     } else if (weight / height ** 2 > 30) {
//         return "Obese"
//     }
//   }


// ======================>


// 8 kyu MakeUpperCase


// function makeUpperCase(str) {
//     return str.toUpperCase()
//   }


// ======================>


// 8 kyu Will you make it?

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return fuelLeft * mpg >= distanceToPump ? true : false
//   };


// ======================>


// 8 kyu A Needle in the Haystack


//     function findNeedle(haystack) {
//         return `found the needle at position ${haystack.indexOf('needle')}`
//       }

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));


// ======================>


// 8 kyu Beginner - Lost Without a Map


// function maps(x){
//         return x.map(value => value * 2)
// }


// ======================>


// 8 kyu Convert number to reversed array of digits

// function digitize(n) {
//     return Array.from(String(n), Number).reverse();
   
//   }

//   console.log(digitize(35231));


// ======================>


// function isDivisible(n, x, y) {
//     return n % x === 0 && n % y === 0 ? true : false
//   }


// ======================>


// 8 kyu Keep Hydrated!

// function litres(time) {
//     return Math.floor(itme * 0.5);
//   }

// ======================>


// 8 kyu Localize The Barycenter of a Triangle

// function barTriang(p1, p2, p3) {

    // let sumZeroEl = []
    // let sumSecondEl = []
    // let result = []

    // sumZeroEl.push(p1[0], p2[0], p3[0])
    // sumSecondEl.push(p1[1], p2[1], p3[1])

    // result.push(sumZeroEl.reduce((partialSum, a) => partialSum + a, 0) / 3).toFixed(2)

    // result.push(sumSecondEl.reduce((partialSum, a) => partialSum + a, 0) / 3)

    // return result.map(el => Number(el.toFixed(4)))
// }

// console.log(barTriang([4, 6], [12, 4], [10, 10]));


// ======================>


// 8 kyu Basic Mathematical Operation

// function basicOp(operation, value1, value2) {
//     return eval(value1 + operation + value2)
// }

// console.log(basicOp('+', 4, 7));
// console.log(basicOp('+', 4, 7));
// console.log(basicOp('*', 5, 5));


// ======================>


// 8 kyu Century From Year

// function century(year) {
//     return Math.ceil(year / 100)
// }

// console.log(century(1900));


// ======================>


// 5 kyu Moving Zeros To The End

// function moveZeros(arr) {
//     let newArr = []
//     let countZero = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             newArr.push(arr[i])
//         } else {
//             countZero++
//         }
//     }

//     for (let i = 0; i < countZero; i++) {
//         newArr.push(0)
//     }

//     return newArr
// }

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));


// ======================>


// 8 kyu Counting sheep...


// function countSheeps(arrayOfSheep) {
//     let totalSheep = 0
//     for (const el of arrayOfSheep) {
//         el === true && totalSheep++
//     }
//     return totalSheep
// }

// console.log(countSheeps([true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true]));


// ======================>


// 8 kyu Find the smallest integer in the array

// function s(args) {
//     return Math.min(...args)
// }

// console.log(s([34, 15, 88, 2]));


// ======================>


// 8 kyu Square(n) Sum

// function squareSum(numbers) {
//     let result = 0
//     for (const el of numbers) {
//         result += el * el
//     }
//     return result
// }

// console.log(squareSum([1, 2, 2]));


// ======================>


// 8 kyu Sum of positive

// function positiveSum(arr) {
//     let result = 0
//     for (const el of arr) {
//         el > 0 && (result += el)
//     }
//     return result
// }

// console.log(positiveSum([1, -4, 7, 12]));
// console.log(positiveSum([]));


// ======================>


// 6 kyu Stop gninnipS My sdroW!

// const s = (str) => {
//     let arrStr = str.split(' ')

//     return arrStr.map(el => {
//         if (el.split('').length >= 5) {
//             return el.split('').reverse().join('')
//         } else {
//             return el
//         }
//     }).join('')
// }

// console.log(s("Welcome"));


// ======================>


// 7 kyu You're a square!

// function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0
// }
// console.log(isSquare(4));


// ======================>


// 7 kyu Disemvowel Troll +

// function disemvowel(str) {
//     const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

//     return str
//         .split('')
//         .filter(char => !vowels.includes(char))
//         .join('');
// }

// console.log(disemvowel("This website is for losers LOL!"));


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





