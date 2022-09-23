// * ===== spread - оператор (оператор расширения) ===== * //

// * array *
// 1 задача
const arrayNum = [20, 55, 42, 543, 56, 476, 5]
// [20, 55, 42, 543, 56, 476, 5] -> 20, 55, 42, 543, 56, 476, 5
console.log(Math.max(...arrayNum));
// console.log(Math.max(20, 55, 42, 543, 56, 476, 5));
// console.log(...arrayNum);


// 2 задача - быстрое приведение к типу / Поверхностное копирование
// Array.from()
const divList = document.querySelectorAll('div');
console.log(divList);

console.log(Array.from(divList));
console.log([...divList]); // + Поверхностное копирование]

// 3 задача - склеивание
// ! concat - работает быстрее spread

console.log(arrayNum.concat([3, 5, 6]));
console.log(arrayNum.concat(3, 5, 6));
console.log([...arrayNum, 3, 5, 6, ...[6, 7, 8, 8, 8, 8, 8]]);


// * object *
const user = {
    name: 'Pavel',
    age: 30,
    isAdmin: false
}

// typeError
// console.log(...user); // console.log(name: 'Pavel', age: 30);

// 1 задача
// Быстрое поверхностное копирование
console.log({ ...user });

// 2 задача 
// склеивание объектов
console.log({ ...user, isAdmin: true });

// ** Нюанс
// Если свойства совпадают, то записывается то, что новее
// То что правее, считается новым


// * ===== rest - оператор (остаточный оператор) ===== * //
// В функциях (много параметров)

function sum(a, ...params) {
    console.log(a);
    console.log(params);
}

sum(356, 45, 765, 756, 756)

// деструкторизации
function calc(a, b) {
    return [
        a + b,
        a - b,
        a * b
    ]
}
const [summator, ...rest] = calc(13, 17)
console.log(summator); // 30
console.log(rest); // [-4, 221]





/// * ==== Practice ===== * /


// const userMan = {
//     name: 'Pavel',
//     age: 20,
//     address: {
//         country: 'Russia',
//         city: 'Moscow',
//         street: {
//             title: 'String',
//             house: 22
//         }

//     },
//     items: [
//         'pencil', 'water', 'candy'
//     ]
// }



const userMan = {
    name: 'Pavel',
    age: 24,
    gender: 'male',
    address: {
        country: 'Russia',
        city: 'Moscow',
        street: {
            title: 'String',
            house: 22,
            entrance: 3
        }
    },
    items: [
        'pencil', 'water', 'candy'
    ]
}



// Написать функцию, на вход которой подаётся название улицы и объект
// Функция возвращает глубокую копию данного объекта, изменяя в нём улицу 


function changeStreet(obj, title) {
    return {
        ...obj,
        address: {
            ...obj.address,
            street: {
                ...obj.address.street,
                title,
            },
        },
        items: [
            ...obj.items
        ],
    }
}

const newObj = changeStreet(userMan, 'Pupa-street')
console.log(newObj);



// const test = {
//     title: 'HEading',
//     isFlex: false,
//     tags: ['p', 'h1', 'div'],
//     blocks: {
//         border: true,
//         color: 'blue',
//         geom: {
//             width: 100,
//             heaight: 200
//         }
//     }
// }


// const testCopy = {
//     ...test,
//     tags: [...test.tags],
//     blocks: {
//         ...test.blocks,
//         geom: {
//             ...test.blocks.geom
//         }
//     }
// }

// console.log(test === testCopy); // 
// console.log(test.tags === testCopy.tags);
// console.log(test.blocks === testCopy.blocks);
// console.log(test.blocks.geom === testCopy.blocks.geom);

// console.log(testCopy);




// ДЗ:
// * Написать такую же функцию, только которая добавляет 1 предмет в массив
// * Написать такую же функцию, только которая добавляет 1 или много предметов в массив
// * Написать фунукию, которая меняет и дом и улицу
// * Написать фунукию, которая меняет имя
// * Написать фунукию, которая меняет возраст на 1 (день рождения)

// ~ Массив с объектами не делай


function userManOne(obj, items) {
    return {
        ...obj,
        address: {
            ...obj.address,
            street: {
                ...obj.address.street
            }
        },
        items: [
            ...obj.items,
            items,
        ],
    };
}

console.log(userManCopy(userMan, 'table'));

function userManTwo(obj, ...items) {
    return {
        ...obj,
        address: {
            ...obj.address,
            street: {
                ...obj.address.street
            }
        },
        items: [
            ...obj.items,
            ...items,
        ],
    };
}

console.log(userManTwo(userMan, 'table', 'cards', 'book'));



// ============

const newUserMan = {
    name: 'Pavel',
    age: 24,
    gender: 'male',
    address: {
        country: 'Russia',
        city: 'Moscow',
        street: {
            title: 'String',
            house: 22,
            entrance: 3,
            evenOddStreets: {
                even: '+',
                odd: '-'
            }
        }
    },
    items: [
        'pencil', 'water', 'candy'
    ]
}



function userManThree(obj, title, house) {
    return {
        ...obj,
        address: {
            ...obj.address,
            street: {
                ...obj.address.street,
                title,
                house,
                evenOddStreets: {
                    ...obj.address.street.evenOddStreets
                }
            }
        },
        items: [
            ...obj.items
        ],
    }
}

console.log(userManThree(newUserMan, 'Lenina', 10));


function changeName(obj, name) {
    return {
        ...obj,
        name,
        address: {
            ...obj.address,
            street: {
                ...obj.address.street,
                evenOddStreets: {
                    ...obj.address.street.evenOddStreets
                }
            },
        },
        items: [
            ...obj.items
        ]
    }
}


console.log(changeName(newUserMan, 'Max'));

function changeAge(obj, age) {
    return {
        ...obj,
        age,
        address: {
            ...obj.address,
            street: {
                ...obj.address.street,
                evenOddStreets: {
                    ...obj.address.street.evenOddStreets
                },
            },
        },
        items: [
            ...obj.items
        ]
    }
}

console.log(changeAge(newUserMan, 25));