// Задачи по теме 10. Object

// Дан объект user, выполнить задачи 1-6:

const user = {
    name: "Peter",
    age: 33,
    job: "Developer",

    "my address": {
        city: "Moscow",
        country: "Russia",
        abroad: ["Vienna", "Paris", "London", "Miami"]
    },
    item: ["bag", "book", "pencil"],
    more: null
};



// 1. Задача +

// Вывести в консоль свойство name;

// console.log(user.name);



// 2. Задача +

// Изменить возраст на 4 года меньше;

// user.age -= 4
// console.log(user.age);



// 3. Задача +

// Вывести в консоль все свойства объекта "my address";

// console.log(user["my address"]);



// 4. Задача +

// Вывести в консоль все свойства объекта user, кроме тех свойства, тип которых равен object;

// for (const key in user) {
//     if (typeof user[key] !== "object" || user[key] === null) {
//         console.log(`${key}: ${user[key]}`);
//     }
// }



// 5. Задача +

// Вывести в консоль последний город из заграничного массива в объекте "my address";


// const lastEl = user["my address"].abroad[user["my address"].abroad.length - 1]

// const lastAbroadIdx = user["my address"].abroad.length - 1
// const test = user["my address"].abroad[lastAbroadIdx]


// const abroadCityList = user["my address"].abroad
// const lastCityAbroad = abroadCityList[abroadCityList.length - 1]

// console.log(lastCityAbroad);


// console.log(lastEl);



// 6. Задача +

// Вывести в консоль в столбик все города из заграничного массива;

// for (const city of user["my address"].abroad) {
//     console.log(city);
// }



// 7. Задача +

// Дан объект person, выполнить копирование объекта:

// const person = {
//     name: "Bob",
//     age: 25,
//     job: "Developer",
//     "like language": "Java Script"
// };

// const copyPerson = {};

// for (const key in person) {
//     copyPerson[key] = person[key]
// }

// console.log(copyPerson);
// console.log(copyPerson === person); // +++ like, subcribe



// 8. Задача +

// Дан объект user, добавить объекту свойство с ключом, который находится в переменной prop со значением Manager.

// const prop = 'job';

// const user2 = {
//     name: "Lucas",
//     age: 29,
// };

// user2[prop] = "Manager"
// console.log(user2);


// ### 9. Задача +
// Дан объект user, выполнить удаление свойств, которые содержут слово delete в ключе.

// const user = {
//     name: "Lucas",
//     age: 29,
//     "delete me": 'text',
//     delete: 105,
//     'deleteProp': false
// };

// delete user.delete;
// delete user["delete me"];
// delete user.deleteProp;

// console.log(user);




// !!! 9. Задача lecture

// Написать функцию, на вход которой подаётся объект и ключ, функция возвращает значение из этого объекта с переданным ключом. Если такого ключа нет, то функция возвращает undefined.

// const user = {
//     name: "Peter",
//     age: 33,
//     job: "Developer",
// };
// // console.log(user.name);

// function getProprty(obj, key) {
//     // let obj = user; let key = "job"
//     return obj[key] // obj.job
// }


// console.log(getProprty(user, "job"));

// 10. Задача +

// Написать функция, которая удаляет свойство из объекта, если оно есть.

// const user = { name: "Lucas", test: 111 };

// function deleteProp(obj, key) {
//     delete obj[key]
//     // for (const key in obj) {
//     //     return delete obj[key]
//     // }
// }

// Скорость выполнения кода, n - 
// o(1)
// o(n)
// o(n^2) 


// -------------------------------


// console.log(deleteProp(user, 'test'));
// console.log(user);



// 11. Задача +

// Написать функцию, на вход которой подаётся 2 параметра. Функция вычисляет произведение двух чисел. Функция возвращает объект, в котором хранится 2 параметра и результат умножения.

// function getObject(num1, num2) {
//     const multiply = num1 * num2;
//     return {
//         num1: num1, // num1,
//         num2, // num2: num2
//         multiply, // multiply: multiply
//         // operand1: num1 // не упрощается
//     };
// }

// console.log(getObject(2, 6));




//  12. Задача +

// Написать функцию, на вход которой подаётся объект. Функция возвращает число - количество свйоств в объекте.

// const user = {
//     name: "Peter",
//     age: 33,
//     job: "Developer",
//     item: ["bag", "book", "pencil"],
//     null: null
// };

// function getSumProp(obj) {
//     let sumObj = 0;
//     for (const key in obj) {
//         sumObj += 1
//     }
//     console.log(sumObj);
// }

// console.log(getSumProp(user));



// 13. Задача +

// Написать функцию, на вход которой подаётся объект. Функция возвращает массив, состоящий из ключей переданного объекта

// function getKeys(obj) {
//     const keys = [];
//     for (const key in obj) {
//         keys.push(key)
//     }
//     return keys;
// }

// console.log(getKeys(user));



// 14. Задача +

// Написать функцию, на вход которой подаётся объект. Функция возвращает количество объектов внутри переданного объекта.

// function getSumObject(obj) {
//     let sum = 0;
//     for (const key in obj) {
//         if (typeof user[key] === "object" && user[key] !== null) {
//             sum += 1
//         }
//     }
//     return sum
// }

// console.log(getSumObject(user));



// 15. Задача +

// Написать функцию, на вход которой подаётся объект. Функция возвращает количество массивов внутри переданного объекта.

// function getSumObject(obj) {
//     let sum = 0;
//     for (const key in obj) {
//         if (Array.isArray(user[key])) { sum += 1 }
//     }
//     return sum
// }

// console.log(getSumObject(user));



// 16. Задача +

// Написать функцию, на вход которой подаётся объект. Функция возвращает массив, состоящий из значений переданного объекта.

// const user = {
//     name: "Lucas",
//     age: 29,
// };

// function getArray(object) {
//     let arr = [];
//     for (const key in object) {
//         arr.push(object[key])
//     }
//     return arr
// }

// console.log(getArray(user));



// 17. Задача +

// Написать функци, на вход которой подаётся массив. Функция возвращает объект с ключами типа данных и количеством, которые находятся в массиве.

// Например в массиве testArray:
// const testArray = ['headline', 7, 5, null, ['array'], true, null, -3, 4, 'false', 7, 8, 'link', 1, false, 0, -3, 'button', undefined, { name: 'Pavel' }];

// После вызова функции вернётся объект:
// {
//     string: 4,
//     number: 9,
//     null: 2,
//     undefined: 1,
//     boolean: 2,
//     object: 2
// };

// function getTypeObject(arr) {

//     let typeObj = {
//         string: 0,
//         number: 0,
//         null: 0,
//         undefined: 0,
//         boolean: 0,
//         object: 0
//     };

//     for (const el of arr) {
//         if (typeof el === "string") {
//             typeObj.string += 1
//         } else if (typeof el === "number") {
//             typeObj.number += 1
//         } else if (typeof el === 'undefined') {
//             typeObj.undefined += 1
//         } else if (el === null) {
//             typeObj.null += 1
//         } else if (typeof el === "boolean") {
//             typeObj.boolean += 1
//         } else if (typeof el === "object") {
//             typeObj.object += 1
//         }
//     }

//     // switch (obj.key) {
//     //     case typeof key === "string":
//     //         s.string += 1
//     //         break;
//     //     case typeof key === "number":
//     //         s.string += 1
//     //         break;
//     //     case typeof key === "string":
//     //         s.string += 1
//     //         break;
//     //     case typeof key === "undefined":
//     //         s.undefined += 1
//     //         break;
//     //     case key === null:
//     //         s.null += 1
//     //         break;

//     //     default:
//     //         break;
//     // }

//     return typeObj

// }

// console.log(getTypeObject(testArray));



// 18. Задача +

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// const user1 = { isAdmin: false };
// const user2 = { isAdmin: false };
// console.log(user1 === user2); // ? false

// const copyUser1 = user1;
// console.log(copyUser1 === user1); // ? true



// 19. Задача +

// Написать функци, на вход которой подаётся объект. Функция возвращает объект с ключами типа данных и количеством, которые находятся в объекте.

// Например в объекте person;
// const person = {
//     name: "Bob",
//     age: 25,
//     job: "Developer",
//     "like language": "Java Script",
//     test: undefined,
//     nuller: null,
//     isHuman: true,
//     item: ['bag', 'pen']
// };

// // После вызова функции вернётся объект:
// // {
// //     string: 3,
// //     number: 1,
// //     null: 1,
// //     undefined: 1,
// //     boolean: 1,
// //     object: 1
// // };

// function getTypeObject(obj) {

//     let typeObj = {
//         string: 0,
//         number: 0,
//         null: 0,
//         undefined: 0,
//         boolean: 0,
//         object: 0
//     };

//     for (const key in obj) {
//         if (typeof obj[key] === "string") {
//             typeObj.string += 1
//         } else if (typeof obj[key] === "number") {
//             typeObj.number += 1
//         } else if (typeof obj[key] === 'undefined') {
//             typeObj.undefined += 1
//         } else if (obj[key] === null) {
//             typeObj.null += 1
//         } else if (typeof obj[key] === "boolean") {
//             typeObj.boolean += 1
//         } else if (typeof obj[key] === "object") {
//             typeObj.object += 1
//         }
//     }

//     return typeObj
// }

// console.log(getTypeObject(person));


// 20. Задача +

// Дан объект bob, удалить у него свойства со знаечниями undefind и null.

// const bob = {
//     name: "Bob",
//     age: 25,
//     job: "Developer",
//     "like language": "Java Script",
//     test: undefined,
//     nuller: null,
//     isHuman: true,
//     item: ['bag', 'pen']
// };

// for (const key in bob) {
//     if (typeof bob[key] === "undefined") {
//         delete bob[key]
//     } else if (bob[key] === null) {
//         delete bob[key]
//     }
// }

// console.log(bob);




// 21. Задача +

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// const user = {
//     name: "Mark",
//     age: 35,
//     isAdmin: false
// };

// const copyUser = user;
// copyUser.name = "Lawlet";

// console.log(copyUser.name); // ? 
// console.log(user.name); // ? 

// обращаемся не к значению, а к ключу, то есть я подумал что тут поменяли ключ. То что тут одна ссылка это понял)

// почему так подумал:

// console.log(key); // key
// console.log(user); // object
// console.log(user.key); // ! undefined Обращаемся не к значению в этой переменной, а к ключу key
// console.log(user[key]);  // value



// 22. Задача + от сюда

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// const user = {
//     name: "Roger",
//     job: "Workman",
//     age: 33,
// };

// console.log(createCopy(user, "Ben")); // ? поменяется имя

// function createCopy(obj, newName) {
//     obj.name = newName;
//     return obj;
// }



// 23. Задача +

// Создать объект player со следующими полями:
// name = Vita;
// money = 1000;
// level = 1;

// const player = {
//     name: "Vita",
//     money: 1000,
//     level: 1
// };

// // К созданному объекту добавить следующие поля:
// // friendList = пустой массив;
// // likes fly = false;

// player.friendList = []; // ab102

// player["likes fly"] = false;

// // Создать переменную: propText и присвоить значение isBetaTester.

// const propText = "isBetaTester";

// // Добавить в объект ключ, название которого лежит в переменной propText, со значением true.

// player[propText] = true;

// // Добавить в массив friendList имя: Alph и Rich.
// player.friendList.push("Alph", "Rich"); // ab105

// // Вывести все свойства в консоль в виде: <ключ>: <значение>;.

// for (const key in player) {
//     console.log(`${key}: ${player[key]}; `);
// }



// 24. Задача +

// Написать функцию, на вход которой подаётся объект. Функция возвращает новый объект, состоящий только из текстовых свойств переданного объекта.

// function getStringObj(obj) {
//     let newObj = {};
//     for (const key in obj) {
//         // if (typeof obj[key] === "string") {
//         //     newObj[key] = obj[key]
//         // }
//         typeof obj[key] === "string" && (newObj[key] = obj[key])
//     }
//     return newObj
// }


// const bob = {
//     name: "Bob",
//     money: 1000,
//     level: 1
// };
// console.log(getStringObj(bob));


// 25. Задача -

// Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект: 
// Объект автомобиль: 

// Серийный номер;
// Марка машины;
// Год выпуска;
// Завод (адрес у завода, название);
// Владелец (имя, фамилия, дата рождения, пол);

// Вывести каждое свойство по отдельности через console.log()

const info = {
    "Серийный номер": 121212,
    "Марка машины": "Lada",
    "Год выпуска": 1974,
    завод: {
        "адрес у завода": "Ленина 4",
        название: "Сектор газа"
    },
    владелец: {
        имя: "Иван",
        фамилия: "Левченко",
        "дата рождения": 1952,
        пол: "муж",
    },
};
// console.log(info["Серийный номер"]);
// console.log(info.завод["адрес у завода"]);


// // ? Понял что надо вложенным делать но правильную запись так и не нашел, взял в инете

// for (let key in info) {
//     if (typeof (info[key]) === 'object') { // Если одно из свойств объекта options - это объект, то...

//         for (const i in info[key]) { // Выводим свойства вложенного объекта
//             console.log(`${i}: ${info[key][i]}`);
//         }
//     }
//     else {
//         console.log(`${key}: ${info[key]}`);
//     }
// }

// // // ? мой вариант

// for (const key in info) {
//     if (typeof info[key] === "object") {
//         // тут for in
//         console.log(console.log(`${info.key}: ${key};`));
//     } else {
//         console.log(`${key}: ${info[key]};`);
//     }

// }
// console.log(s);



// 26. Задача - 25 так же

// Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект: 
// Объект магазин: 

// Название магазина;
// Категории товаров (еда (список товаров 2-3), хозтовары (список товаров 2-3), косметика (список товаров 2-3));
// Есть ли зона для перекуса;
// Есть ли парковка;
// Количество этажей;
// Список партнёров (названия компаний, сайт партнёра);
// Вывести каждое свойство по отдельности через console.log()

// const miniMarket = {
//     food: ["potatoes", "orange", "tea"],
//     household: ["brush", "mop", "soap"],
//     cosmetic: ["powder", "lipstick"],
//     diningRoom: "yes",
//     parking: "yes",
//     floors: 5,
//     partners: {
//         list: [
//             { magnit: "https://magnit.ru/" },
//             { yandex: "https://yandex.ru/" }
//         ]
//     }
// };

// miniMarket.food[0]
// // miniMarket['food'][0]
// miniMarket.food[1]
// miniMarket.food[2]
// miniMarket.partners.magnit
//miniMarket.patners.list[0].magnit
//miniMarket.patners.list[1].yandex


// 27. Задача

// Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект: 
// Объект магазин: 

// Имя ученика;
// id ученика;
// Возраст;
// Активный ли ученик;
// Адрес (название улицы и город (название города и название страны, где город));
// Список технологий, который знает ученик (id технологии и название технологии);



// 28. Задача

// Придумайте на подобии 26-28 задачи похожие объекты и опишите их и выведите каждое свойство в консоль



// 29. Задача +

// Написать функцию, которая проверяет, является ли переданный параметр примитивом

function chekPrimitive(value) {
    // let check = Boolean();
    // if (typeof value === "string") {
    //     check = true
    // } else if (typeof value === "number") {
    //     check = true
    // } else if (value === undefined) {
    //     check = true
    // } else if (value === null) {
    //     check = true
    // } else if (value === true || value === false) {
    //     check = true
    // } else if (typeof value === "symbol") {
    //     check = true
    // } else if (typeof value === "bigint") {
    //     check = true
    // } else {
    //     check = false
    // }


    return typeof value !== 'object' && typeof value !== 'function' || value === null


    // 8 типов
    // string, number, boolean, undefined, null, symbol, bigint - примитивы
    // object - ссылочные типы [Array, Object, Argumnets, Function]

    // console.log(typeof (null)); // "object"
    // console.log(typeof (function test() {})); // "function"
}





// console.log(chekPrimitive(1));



// ★ Задачи повышенной сложности ★

// ★ 30. Задача ★

// Написать функцию, на вход которой подаётся массив объектов с сотрудниками, каждый сотрудник имеет имя и возраст [{name: 'Иван', age: 23}, {name: 'Илья', age: 27}, ..., {name: 'Ольга', age: 22}]). Фукция возвращает массив, где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23".

// const staff = [
//     { name: 'Иван', age: 23 },
//     { name: 'Илья', age: 27 },
//     { name: 'Ольга', age: 22 },
// ];

// function arrNameAge(arr) {
//     // let newStaff = [];
//     for (const key in arr) {
//         console.log(`${}: ${}`);
//     }
//     // return newStaff
// }

// console.log(arrNameAge(staff));



// ★ 31. Задача ★ +

// Напишите функцию isEmpty, которая проверяет есть ли у объекта свойства или нет.

// function isEmpty(obj) {
//     for (const key in obj) {
//         console.log(obj[key]);
//     }

// }

// const test = {};
// const test2 = { test: null };
// const test3 = { test: undefined };

// function isEmpty(obj) {
//     for (const key in obj) {
//         if (obj[key]) {
//             return false;
//         } else if (obj[key] === undefined) {
//             return false;
//         } else if (obj[key] === null) {
//             return false;
//         }
//     }
//     return true
// }

// // console.log(isEmpty(staff));
// console.log(isEmpty(user));
// console.log(isEmpty(test));
// console.log(isEmpty(test2));
// console.log(isEmpty(test3));


