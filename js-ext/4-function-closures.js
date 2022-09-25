// * Чистая функции - Pure Function


// 1. Иммутабельность (не мутируем входные переменные, глобальные)
// 2. Детерминирванность (При одних и тех же входных параметров всегда получаем один и тот же результат)
// 3. Отсутствие побочных эффектов (SideEffect)
// - Обращение к глобальным переменным (const объекты тоже считаются глобальными перменными), а const примитивы нету. (например console.log - обращаемся к глобальному объекту console)
// - DOM - обращение
// - Запись в КЭШ -> локальное хранилище (localStorage) / indexDB
// - Использование setTimeout, setInterval / обращение к севреру или любой другой асинхронный код

// Не чистая функция

const person = {
    age: 22
}
function testPure(obj) {
    obj.name = 'Pavel'

    return obj
}
function happyBirthday() {
    person.age++
}


let ager = 1
// Чистая функция
function happyBirthday(obj) {
    console.log(1);
    return {
        ...obj,
        age: obj.age + 1
    }
}

happyBirthday(person)


// * Closures 

{
    let index = 1

    if (true) {
        let test = 'test'
        index++
    }
    // console.log(test); // Error
    console.log(index);
}


function wrapCounter(name) {
    let count = 0

    return () => {
        count++
        console.log(name);
        return count
    }
}

const counter = wrapCounter()

console.log(counter());
console.log(counter());
console.log(counter());





const counter2 = wrapCounter()
console.log(counter2());









