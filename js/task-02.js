'use strict';

// функцию countProps(obj), считающую кол - во свойств в объекте.
// Функция возвращает число - количество свойств.

const countProps = function (obj) {
  let counter = 0;
  for (const prop in obj) {
    counter += 1;
  }
  return counter;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
