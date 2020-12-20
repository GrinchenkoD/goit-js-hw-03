'use strict';

// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const transaction = {
      amount: amount,
      type: type,
      id: Math.floor(Math.random() * (10000000 - 1)) + 1,
    };
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.transactions.push(this.createTransaction(amount, 'DEPOSIT'));
    this.balance += amount;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Снятие такой суммы невозможно, недостаточно средств');
      return;
    }
    this.transactions.push(this.createTransaction(amount, 'WITHDRAW'));
    this.balance -= amount;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const desiredObject of this.transactions) {
      if (desiredObject.id === id) {
        return desiredObject;
      }
    }
    return console.log('Операция с таким id отсутствует');
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let typeTotalValue = 0;
    for (const obj of this.transactions) {
      if (obj.type === type) {
        typeTotalValue += obj.amount;
      }
    }
    return typeTotalValue;
  },
};
// console.log(account.deposit(200));
// account.deposit(300);
// account.deposit(400);
// account.withdraw(500);
// account.withdraw(300);
// console.log(account.transactions);
// console.log(account.balance);
// console.log(account.getTransactionTotal('WITHDRAW'));
// console.log(account.getTransactionDetails(9054317));
