














// Square Every Digit
function squareDigits(num) {
    const arrNum = String(num).split('')
    let stringNum = ''
    arrNum.forEach(el => stringNum += el * el);
    return Number(stringNum)
}

// palindrome
function palindrome(str) {
    const poli = str.split('').reverse().join('')
    let poliArr = poli.split('')
    let str2 = str.split('')
    console.log(poliArr);

    let s = []
    let t = []

    for (const el of poliArr) {
        el !== ' ' && s.push(el)
    }

    for (const el of str2) {
        el !== ' ' && t.push(el)
    }
    console.log(s);
    console.log(t);
    let g = s.join('').toLowerCase()
    let h = t.join('').toLowerCase()
    console.log(g);
    console.log(h);


    if (g.toLowerCase() === h.toLowerCase()) {
        return true
    } else {
        return false
    }
}





