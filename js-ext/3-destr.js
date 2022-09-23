// * ===== destructuring ===== * //

function useState(startValue) {
    return [
        startValue,
        (value) => {
            console.log('new Value:', value);
        }
    ]
}

// * вариант 1
// const list = useState(10)
// const value = list[0]
// const setValue = list[1]

// setValue(15)
// * вариант 2
// console.log(list[0]);
// list[1](15)


// * Решение ++++++++++++
const [value, setValue] = useState(1543)
// const list = useState(10)
// const value = list[0]
// const setValue = list[1]

console.log(value);
setValue(543534)







function calc(a, b) {
    return [
        a + b,
        a - b,
        a * b
    ]
}

// const res = calc(10, 5)
const [sum, sub, multi, test] = calc(10, 5)
console.log(sum);
console.log(sub);
console.log(multi);
console.log(test); // undefined

// Если другие параметры не нужны, то их писать не обязательно
const [summ] = calc(54353, 543543)
console.log(summ);


// Rest - оператор
const [summator, ...rest] = calc(13, 17)
console.log(summator); // 30
console.log(rest); // [-4, 221]



// Рабочий случай с объектом
// +++++++++
function obj() {
    return {
        name: 'Bob',
        age: 19,
        city: 'Moscow'
    }
}

// Та, которая нужна, ту и вытаскиваешь
const { city, ...restObj } = obj()

console.log(city);
console.log(restObj);








