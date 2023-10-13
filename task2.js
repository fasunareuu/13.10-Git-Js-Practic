const gradusConvert = () => {
    const readlineSync = require('readline-sync');
    const TemperatureInput = readlineSync.question('Введите температуру(C): ');

    const Celsius = TemperatureInput;
    const gradusF = (Celsius * 9/5) + 32;

console.log(`${gradusF}F`);
};
gradusConvert();