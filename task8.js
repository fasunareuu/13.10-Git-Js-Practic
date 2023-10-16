const calculateBalance = (incomes, expenses) => {
    const readlineSync = require('readline-sync');
    const earning = readlineSync.question('Введите ваш доход: ');
    const expensess = readlineSync.question('Введите ваши расходы: ');

    const result = earning - expensess;
    console.log(`Ваш баланс: ${result}₽`)
};
calculateBalance();