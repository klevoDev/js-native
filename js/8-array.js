// * ===== Array (Массив) ===== * //

// * Примитивы
// undefined, null, number, string, boolean
// bigint / symbol

// * Ссылочный тип (объект -> структура данных)
// object -> [Array, Function, Object]

// * Array * //


const arrTest = []; // Пустой массив
console.log(typeof arrTest); // object

//                    0    1   2   3    4
const userNumbers = [128, 89, 44, 342, 564];
console.log(userNumbers);


const countItems = userNumbers.length; // 5
console.log(countItems);

// * == Вывод элемента массива == * //

console.log(userNumbers[0]); // 128 - первый эелемнт (нулевой)

// Неуниверсально:
console.log(userNumbers[4]); // 564 - четвёртый элемент
console.log(userNumbers[5]); // undefined

// Первый с конца
console.log(userNumbers[userNumbers.length - 1]); // Последний элемент

// Второй с конца
console.log(userNumbers[userNumbers.length - 2]); // Предпоследний элемент


// * == Методы массивов (функции) == * //

const taskArray = [33, 6, 77, 43, 78];

// 1. array.push(...items)
// Добавляет элемент/элементы в конец массива, изменяя сам массив (мутируя)
// Метод возвращает новую длину массива

const a = taskArray.push(10); // Возвращает 6, добавляя 10
console.log(taskArray); // [33, 6, 77, 43, 78, 10]
console.log(taskArray.length); // 6
console.log(a); // 6

taskArray.push(7, 2, 3);
console.log(taskArray); // [33, 6, 77, 43, 78, 10, 7, 2, 3]

// 2. array.pop()
// Удаляет только последний элемент из массива, мутируя массив
// Метод возвращает удалённый элемент

const deleteItem = taskArray.pop()
console.log(deleteItem); // 3
console.log(taskArray); // [33, 6, 77, 43, 78, 10, 7, 2]


// 3. array.shift() - извлекает элемент из начала массива
// Возвращает удалённый элемент

// 4. array.unshift(...items) 
// Добавляет элемент/элементы в начало массива, изменяя сам массив (мутируя)
// Метод возвращает новую длину массива

// 5. Array.isArray(array) - функция - Проверить объект на массив
// Возвращает true/false, на вход в функцию подаётся одна переменная

console.log(Array.isArray(taskArray));
console.log(Array.isArray('423'));
console.log(Array.isArray([]));
console.log(Array.isArray({}));

console.log([3, null, [6, true, 765, [765, 'x']], 4]);


// * == Обратиться сразу ко всем элементам == * //

// Мы не можем обратиться к массиву и прибавить к нему 10, чтобы все значения внутри увеличились на 10

// 1 способ
console.log(taskArray);
for (let i = 0; i < taskArray.length; i++) {
    // console.log(taskArray); // Получить массив
    console.log(taskArray[i]); // Значение массива
    console.log(i); // Получить текущий индекс


    // taskArray[i] = taskArray[i] + 10;
    taskArray[i] += 10; // Переприсовить значение
}
console.log(taskArray);


// 2 способ (только для чтения)
// Пробежаться по массиву taskArray
// Кажду итерацию value = taskArray[i]
for (const value of taskArray) {
    // value - только для чтения
    console.log(value);

    // Переприсовить не получится в этом цикле
    // Индекс нету
}

// * == Копирование массива == *

let testArray = [3, 4, 7]; // Хранит не массив чисел, а ссылку на область памяти, в которой подряд идут эти значения

let testArrayCopy = testArray; // Копируем ссылку, а не значения
testArrayCopy[0] = 1000;
console.log(testArrayCopy);
console.log(testArray);

// Ссылаются ли массивы на одну область видимости или нет
console.log(testArrayCopy === testArray); // true, значит они связаны по сслыки

console.log([] === []); // false
console.log([10] === [10]); // false

// * Если нужна копия, то создаём пустой массив и пушим туда все элементы (примитивы) в цикле
// ! Такая копия будет только поверхностной


let tester = 10; // Тестер хранит число 10
let copyTester = tester;
copyTester += 10;
console.log(copyTester);
console.log(tester);



// * === Дополнение

const arr = [3, null, [3, '6 el'], 'text', false, [3, [5, false]]];

console.log(arr[2][1]);


const city = [
    'Moscow',
    'Paris',
    'London', // Висячая запятая
];





















