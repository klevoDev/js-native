// Задачи по теме 10. Object

// Дан объект user, выполнить задачи 1-6:

// const user = {
//     name: "Peter",
//     age: 33,
//     job: "Developer",

//     "my address": {
//         city: "Moscow",
//         country: "Russia",
//         abroad: ["Vienna", "Paris", "London", "Miami"]
//     },
//     item: ["bag", "book", "pencil"],
//     more: null,
//     key: "Aha-ha-ha-ha"
// };



// 1. Задача +

// Вывести в консоль свойство name.

// console.log(user.name);



// 2. Задача +

// Изменить возраст на 4 года меньше.

// user.age -= 4
// console.log(user.age);



// 3. Задача +

// Вывести в консоль последний город из заграничного массива в объекте "my address".

// const lastEl = user["my address"].abroad[user["my address"].abroad.length - 1]



// 4. Задача +

// Вывести в консоль в столбик все города из заграничного массива.

// for (const city of user["my address"].abroad) {
//     console.log(city);
// }



// 5. Задача +

// Удалить свойство more из объекта user

// delete user.more
// console.log(user);



// 6. Задача +

// Переименуйте Питера на Паркера.

// user.name = "James";
// console.log(user);



// 7. Задача +

// Поменйяте место жительство ("my address")

// user["my address"].city = "Vilnus";
// user["my address"].country = "Lithuania";
// user["my address"].abroad[0] = "Moscow";
// user["my address"].abroad[1] = "Rostov";
// user["my address"].abroad[2] = "Minsk";
// user["my address"].abroad[3] = "Kiev";

// console.log(user);



// 8. Задача +

// Вывести в консоль с помощью цикла все свойства объекта "my address".

// console.log(user["my address"]);




// 9. Задача +

// Вывести в консоль все свойства объекта user, кроме тех свойства, тип которых равен object.

// for (const key in user) {
//     if (typeof user[key] !== "object" || user[key] === null) {
//         console.log(`${key}: ${user[key]}`);
//     }
// }


// 10. Задача +

// Дан объект user, добавить объекту свойство с ключом, который находится в переменной prop со значением Manager.

// const prop = 'job';

// const user = {
//     name: "Lucas",
//     age: 29,
// };

// const prop = 'job';

// const user2 = {
//     name: "Lucas",
//     age: 29,
// };

// user2[prop] = "Manager"
// console.log(user2);



// 11. Задача +

// Дан объект user, выполнить удаление свойств, которые содержут слово delete в ключе.

// Циклом пользоваться не нужно, просто удалить.
// const user = {
//     name: "Lucas",
//     age: 29,
//     "delete me": 'text',
//     delete: 105,
//     'deleteProp': false
// };


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



// 12. Задача + // ? lecture

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



// 13. Задача +

// Написать функцию, которая удаляет свойство из объекта, если оно есть.

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



// 14. Задача +

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



// 15. Задача +

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



// 16. Задача +

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



// 17. Задача +

// Написать функцию, на вход которой подаётся объект. Функция возвращает массив, состоящий из ключей переданного объекта

// function getKeys(obj) {
//     const keys = [];
//     for (const key in obj) {
//         keys.push(key)
//     }
//     return keys;
// }

// console.log(getKeys(user));



// 18. Задача +

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



// 19. Задача +

// Написать функцию, на вход которой подаётся объект. Функция возвращает количество массивов внутри переданного объекта.

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



// 20. Задача +

// Написать функцию, на вход которой подаётся объект. Функция возвращает массив, состоящий из значений переданного объекта.

// function getValueObj(obj) {
//     let arr = [];
//     for (const key in obj) {
//         arr.push(obj[key])
//     }
//     return arr
// }

// console.log(getValueObj(user));



// 21. Задача +

// Написать функци, на вход которой подаётся массив. Функция возвращает объект с ключами типа данных и количеством, которые находятся в массиве.

// // Например в массиве testArray:
// const testArray = ['headline', 7, 5, null, ['array'], true, null, -3, 4 'false', 7, 8, 'link', 1, false, 0, -3 'button', undefined, {name: 'Pavel'}];

// // После вызова функции вернётся объект:
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

//     return typeObj

// }

// console.log(getTypeObject(testArray));



// 22. Задача +

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// const user1 = { isAdmin: false };
// const user2 = { isAdmin: false };
// console.log(user1 === user2); // ? false

// const copyUser1 = user1;
// console.log(copyUser1 === user1); // ? true



// 23. Задача +

// Написать функцию, на вход которой подаётся объект. Функция возвращает объект с ключами типа данных и количеством, которые находятся в объекте.

// Например в объекте person;
// const person = {
//     name: "Bob",
//     age: 25,
//     job: "Developer",
//     "like language": "Java Script"
//     test: undefined,
//     nuller: null,
//     isHuman: true,
//     item: ['bag', 'pen']
// };

// После вызова функции вернётся объект:
// {
//     string: 3,
//     number: 1,
//     null: 1,
//     undefined: 1,
//     boolean: 1,
//     object: 1
// };

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



// 24. Задача +

// Дан объект bob, удалить у него свойства со знаечниями undefind и null.

// const bob = {
//     name: "Bob",
//     age: 25,
//     job: "Developer",
//     "like language": "Java Script"
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



// 25. Задача +

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// const user = { 
//     name: "Mark", 
//     age: 35,
//     isAdmin: false
// };

// const copyUser = user;
// copyUser.name = "Lawlet";

// console.log(copyUser.name); // ? name: "Lawlet"
// console.log(user.name); // ? name: "Lawlet"



// 26. Задача +

// Не выполняя код, дать ответ: 
// Что выведется в консоль? Ответ записать в комментарий.

// const user = { 
//     name: "Roger", 
//     job: "Workman",
//     age: 33,
// };

// console.log(createCopy(user, "Ben")); // ? меняем имя

// function createCopy(obj, newName) {
//     obj.name = newName;
//     return obj;
// }



// 27. Задача +

// Создать объект player со следующими полями:
// name = Vita;
// money = 1000;
// level = 1;
// К созданному объекту добавить следующие поля:
// friendList = пустой массив;
// likes fly = false;
// Создать переменную: propText и присвоить значение isBetaTester.
// Добавить в объект ключ, название которого лежит в переменной propText, со значением true.
// Добавить в массив friendList имя: Alph и Rich.
// Вывести все свойства в консоль в виде: <ключ>: <значение>;.

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



// 28. Задача +

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



// 29. Задача +

// Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект: 


// Серийный номер;
// Марка машины;
// Год выпуска;
// Завод (адрес у завода, название);
// Владелец (имя, фамилия, дата рождения, пол);
// Вывести каждое значение всех свойств по отдельности через console.log()

// const info = {
//     serialNumber: 121212,
//     carBrand: "Lada",
//     yearRelease: 1974,
//     factory: {
//         factoryAddress: "Ленина 4",
//         nameFactory: "Сектор газа",
//     },
//     own: {
//         firstName: "Иван",
//         secondName: "Левченко",
//         dateBirth: 1952,
//         gender: "муж",
//     },
// };

// console.log(info.serialNumber);
// console.log(info.carBrand);
// console.log(info.yearRelease);
// console.log(info.factory.factoryAddress);
// console.log(info.factory.nameFactory);
// console.log(info.own.firstName);
// console.log(info.own.secondName);
// console.log(info.own.dateBirth);
// console.log(info.own.gender);


// 30. Задача +

// Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект: 
// Объект магазин: 

// Название магазина;
// Категории товаров (еда (список товаров 2-3), хозтовары (список товаров 2-3), косметика (список товаров 2-3));
// Есть ли зона для перекуса;
// Есть ли парковка;
// Количество этажей;
// Список партнёров (названия компаний, сайт партнёра);
// Вывести каждое значение всех свойств по отдельности через console.log()

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

// console.log(miniMarket.food[0]);
// console.log(miniMarket.food[1]);
// console.log(miniMarket.food[2]);
// console.log(miniMarket.cosmetic[0]);
// console.log(miniMarket.cosmetic[1]);
// console.log(miniMarket.diningRoom);
// console.log(miniMarket.floors);
// console.log(miniMarket.partners.list[0].magnit);
// console.log(miniMarket.partners.list[1].yandex);



// 31. Задача +

// Создать объект и заполнить выдуманными данными, используя где нужно, вложенный массив или объект: 
// Объект профайл ученика: 

// Имя ученика;
// id ученика;
// Возраст;
// Активный ли ученик;
// Адрес (название улицы и город (название города и название страны, где город));
// Список технологий, который знает ученик (id технологии и название технологии);
// Вывести каждое значение всех свойств по отдельности через console.log()

// const student = {
//     name: "Max",
//     "id student": 123,
//     age: 16,
//     proactive: true,
//     addres: {
//         street: "4-ya Novokyzminskay",
//         house: 122,
//         city: "Moscow",
//         country: "Russia",
//     },
//     "id tech": {
//         1: "test1",
//         2: "test2",
//         3: "test3",
//     }
// };

// console.log(student.name);
// console.log(student["id student"]);
// console.log(student.age);
// console.log(student.proactive);
// console.log(student.addres.street);
// console.log(student.addres.house);
// console.log(student.addres.city);
// console.log(student.addres.country);
// console.log(student["id tech"][1]);
// console.log(student["id tech"][2]);
// console.log(student["id tech"][3]);



// 32. Задача +

// Придумайте на подобии 26-28 задачи похожие объекты и опишите их и выведите каждое свойство в консоль

// const boardGame = {
//     rulesGame: ["rules", "guide", "scriptBook"],
//     cards: {
//         detectives: 5,
//         miniDetectives: 5,
//         script: 110,
//         player: 119,
//     },
//     resourcesTokens: {
//         life: 30,
//         chaos: 44,
//         horror: 18,
//         wound: 27,
//         evidence: 30,
//     }
// };

// console.log(boardGame.rulesGame[0]);
// console.log(boardGame.rulesGame[1]);
// console.log(boardGame.rulesGame[2]);
// console.log(boardGame.cards.detectives);
// console.log(boardGame.cards.miniDetectives);
// console.log(boardGame.cards.script);
// console.log(boardGame.cards.player);
// console.log(boardGame.resourcesTokens.life);
// console.log(boardGame.resourcesTokens.chaos);
// console.log(boardGame.resourcesTokens.horror);
// console.log(boardGame.resourcesTokens.wound);
// console.log(boardGame.resourcesTokens.evidence);



// 33. Задача +

// Написать функцию, которая проверяет, является ли переданный параметр примитивом

// function chekPrimitive(value) {
//     return typeof value !== 'object' && typeof value !== 'function' || value === null
// }
// console.log(chekPrimitive(1));

// 8 типов
// string, number, boolean, undefined, null, symbol, bigint - примитивы
// object - ссылочные типы [Array, Object, Argumnets, Function]
// console.log(typeof (null)); // "object"
// console.log(typeof (function test() {})); // "function"



// ★ Задачи повышенной сложности ★

// ★ 34. Задача ★ +

// Вывести каждое значение всех свойств и подствойст по отдельности через console.log()

// const man = {
//     name: 'John',
//     age: 28,
//     mother: {
//         name: "Kate",
//         age: 50,
//         work: {
//             position: "doctor",
//             experience: 15
//         },
//         parents: [
//             {
//                 name: "Kevin",
//                 age: 80,
//                 favoriteDish: {
//                     title: "borscht",
//                     ingredients: [
//                         { title: "beet", amount: 3 },
//                         { title: "potatoes", amount: 5 },
//                         { title: "carrot", amount: 1 },
//                     ]
//                 }
//             },
//             {
//                 name: "Jennifer",
//                 age: 78,
//                 favoriteDish: {
//                     title: "sushi",
//                     ingredients: [
//                         { title: "fish", amount: 1 },
//                         { title: "rise", amount: 0.5 }
//                     ]
//                 }
//             },
//         ]
//     }
// };

// console.log(man.name);
// console.log(man.age);
// console.log(man.mother.name);
// console.log(man.mother.age);
// console.log(man.mother.work.position);
// console.log(man.mother.work.experience);
// console.log(man.mother.parents[0].name);
// console.log(man.mother.parents[0].age);
// console.log(man.mother.parents[0].favoriteDish.title);
// console.log(man.mother.parents[0].favoriteDish.ingredients[0].title);
// console.log(man.mother.parents[0].favoriteDish.ingredients[0].amount);
// console.log(man.mother.parents[0].favoriteDish.ingredients[1].title);
// console.log(man.mother.parents[0].favoriteDish.ingredients[1].amount);
// console.log(man.mother.parents[0].favoriteDish.ingredients[2].title);
// console.log(man.mother.parents[0].favoriteDish.ingredients[2].amount);
// console.log(man.mother.parents[1].name);
// console.log(man.mother.parents[1].age);
// console.log(man.mother.parents[1].favoriteDish.title);
// console.log(man.mother.parents[1].favoriteDish.ingredients[0].title);
// console.log(man.mother.parents[1].favoriteDish.ingredients[0].amount);
// console.log(man.mother.parents[1].favoriteDish.ingredients[1].title);
// console.log(man.mother.parents[1].favoriteDish.ingredients[1].amount);


// ★ 35. Задача ★ +

// Написать функцию, на вход которой подаётся массив объектов с сотрудниками, каждый сотрудник имеет имя и возраст [{name: 'Иван', age: 23}, {name: 'Илья', age: 27}, ..., {name: 'Ольга', age: 22}]). Фукция возвращает массив, где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23".

// const staff = [
//     { name: 'Иван', age: 23 },
//     { name: 'Илья', age: 27 },
//     { name: 'Ольга', age: 22 }
// ];

// function getArr(arr) {
//     const newArr = [];
//     for (const el of arr) {
//         newArr.push(`Имя: ${el.name}, возвраст: ${el.age}`);
//     }
//     return newArr
// }

// console.log(getArr(staff));



// ★ 36. Задача ★ +

// Напишите функцию isEmpty, которая проверяет есть ли у объекта свойства или нет.


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