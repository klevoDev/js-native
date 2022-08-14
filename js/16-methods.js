// * ===== object -function (methods) ===== * //


// Вынесли общую функию
function birthday() {
    this.age++
}

// const birthday = () => {
//     // У стрелочной функции нету this
//     // У стрелочной функции нету argumnets
//     this.age++
// }

// birthday()
// window.birthday()

// alert()
// window.alert()


const userList = [
    {
        name: 'Alex',
        age: 33,
        hello: function () {
            console.log('Hello');
        },

        birthday: birthday
    },

    {
        name: 'Bob',
        age: 30,

        // Лучше использовать этот способ
        hello() {
            console.log('Hello');
        },

        birthday
    }
]

// this - контекст - (ссылка на объект - объект)
// Методы лучше не делать стрелочными функциями



userList[0].hello()
userList[0].birthday()
console.log(userList[0]);





