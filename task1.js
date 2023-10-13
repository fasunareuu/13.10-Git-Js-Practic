const incomeTaxCalculator = (income) => {
    const readlineSync = require('readline-sync');
    const earningInput = readlineSync.question('Введите сумму вашего дохода: ');

    const result = (`${earningInput}` * 0.15);
    console.log(`Сумма вашего налога: ${result}₽`);
};
incomeTaxCalculator();