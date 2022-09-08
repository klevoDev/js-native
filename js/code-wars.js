// function removeUrlAnchor(url) {
//     let s = ''
//     for (const el of url) {
//         el !== '#' && (s += el)
//     }
//     return s
// }







// function removeUrlAnchor(url) {
//     const justUrl = Array.from('www.codewars.com')
//     let newUrl = ''

//     justUrl.forEach(el => el !== justUrl && (newUrl += el));

//     return newUrl
// }


// function removeUrlAnchor(url) {
//     const index = url.indexOf('#')
//     const newUrl = url.slice(0, index)

//     return newUrl
// }


function removeUrlAnchor(url) {

    const index = url.indexOf('#')

    return index !== -1 ? url.slice(0, index) : url




}

console.log(removeUrlAnchor('www.codewars.co#m'));
console.log(removeUrlAnchor('www.codewars.com?page=1'));


