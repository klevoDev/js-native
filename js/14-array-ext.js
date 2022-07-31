// * ===== Array Methods ===== * //


// 0. let hasArray = Array.isArray(<any>)
// Проверка на массив - возвращает true/false

// 1. <array>.push(...items) // Добавляет элемент(ы) в конец массива 
// Мутирует исходный массив
// Возвращает новую длину массива

// 2. <array>.pop() // Удаляет последний элемент массива 
// Мутирует исходный массив
// Возвращает удалённый элемент

// 3. <array>.unshift(...items) // Добавляет элемент(ы) в начало массива 
// Мутирует исходный массив
// Возвращает новую длину массива

// 4. <array>.shift() // Удаляет нулевой элемент массива 
// Мутирует исходный массив
// Возвращает удалённый элемент

// 5. let index = <array>.indexOf(value, startIndex = 0) // Ищет индекс первого встречного значения value, начиная с позиции startIndex (по умолчанию равен 0)

// Возвращает найденный индекс или -1, если ничего не найдёт
// ! lastIndexOf - аналогичная функция, только начинается с индекса -1 

// 6. let hasValue = <array>.includes(value, startIndex = 0)
// Проверка на наличие value в массиве, начиная с индекса  startIndex (по умолчанию равен 0)
// Возвращает true/false
// ! поддерживает отрицательные индексы

// 7. let array = <array>.slice(start, end = array.length) // Копирует все элементы массива с позиции start до end НЕ ВКЛ
// по умолчанию (end = array.length)
// Возвращает новый массив 

// 8. let array = <array>.splice(idx, deleteCount, ...items) // Удаляет элементы и добавляет на их место новые элементы (добавлять не обязательно)
// Мутирует исходный массив

// Начиная с индекс idx, удаляет элементы, количеством deleteCount и вставляет на его место элемент(ы) items

// Добавление - необязательный параметр
// Возвращает массив удалённых элементов

const arr = [132, 6546, 546, 54, 65, 47, 658, 6]

console.log(arr.splice(3, 1, 777, 777));
console.log(arr);

// Если не указали второй параметр, то удаляет с idx до конца массива

// 9. let array = <array>.concat(...arrays)
// Добавленные элементы могут быть массивом, или числами
// Склеивает массивы между собой
// Возвращае новый массив

// 10. <array>.reverse() // Изменяет порядок элементов наоборот
// Мутирует исходный массив
// Возвращает ссылку на этот же массив

// 11. let string = <array>.join(spl) // Преобразует массив в строку, добавляя разделитель spl
// Возвращает строку


// 12. Array.from(<Arguments | HTMLCollection | NodeList | Object | string (для строк есть налог split())>) // Преобразует массиво-подобный объект в массив
// Возвращает массив








