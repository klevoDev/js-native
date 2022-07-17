// Number, String, Boolean
// null, undefined

// symbol, bigInt
// object [array, function, arguments, object]

console.log(typeof ''); // "string"
console.log(typeof NaN); // "number"
console.log(typeof undefined); // "undefined"
console.log(typeof 'false'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof -Infinity); // "number"
console.log(typeof null); // "object" - JS Error
console.log(typeof (typeof 77)); // "string"

function test() { return 0 }
console.log(typeof test); // "function"
console.log(typeof []); // "object"
console.log(typeof {}); // "object"

// * ===== Object ===== * //

const objTest = {}; // Пустой объект

const array = [
    10,
    4,
    7,
    9,
    3
]
console.log(array);



const user = {
    // Поля (Свойства) состоят из
    // key: value
    name: 'Bob',
    age: 33,
    'test': 108,
    'likes cat': true,

    // * Ключ имеет тип string, но когда мы создаём объект, мы можем не писать кавычки
}
console.log(user);


// * Действия над объектами
// CRUD: Create Read Update Delete

// * === Read (Прочитать значение)
// let copyAge = user.age

console.log(user.age); // 33
console.log(user['age']); // 33

console.log(user["likes cat"]); // true (состовное свойство можно вызвать только через [])

console.log(user.pupa); // undefined - свойства нету

// ? Вычисляемое свойство объекта
const query = 'test'
console.log(user[query]); // 108
// ! Так мы работаем в циклах



// * === Update
user.name = 'Gale'
user['likes cat'] = false

console.log(user);

// Если пытаемся обновить свойство, которого нет, то мы его создаём
// * === Create

user['likes cats'] = true
user.hasMonster = true

console.log(user);

// * === Delete
delete user['likes cats']
delete user.hasMonster

console.log(user);


// * ===  Как обратиться ко всем свйоствам сразу? === * //
// Перебор объекта

// array -> for, for-of (forEach)
// object -> for-in


for (const el of array) {
    console.log(el); // value
    console.log(array); // array
}

for (const key in user) {
    // console.log(key); // key
    // console.log(user); // object
    // console.log(user.key); // ! undefined Обращаемся не к значению в этой переменной, а к ключу key
    // console.log(user[key]);  // value

    console.log(`${key}: ${user[key]}`);
}


// * === Как проверить существует ли ключ (свойство)
// object.hasOwnProperty()

console.log(user.hasOwnProperty('name')); // true
console.log(user.hasOwnProperty('age')); // true
console.log(user.hasOwnProperty('likes cat')); // true
console.log(user.hasOwnProperty('likes cats')); // false


// * === Копирование объектов

const man1 = {
    name: 'Paul',
    address: {
        city: 'Moscow'
    }
};
const man2 = {
    name: 'Paul',
    address: {
        city: 'Moscow'
    }

};

const copyMan1 = man1
console.log(copyMan1 === man1); // true
console.log(man1.address === copyMan1.address); // true

console.log(man2 === man1); // false


// Обращение к большой вложенности
console.log(man1.address.city); // 'Moscow' VV
console.log(man1['address'].city); // 'Moscow'
console.log(man1['address']['city']); // 'Moscow'



// * Дополнительная информация
// Также, как и в массивах
// Благодаря объектам, функция может вернуть более одного параметра
// Функция может мутировать исходный объект
// Функция может возвращать новый объект

// Свойства, в отличии от переменных могут называться даже: if, for, return, цифрами



















