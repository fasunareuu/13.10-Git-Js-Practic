const calculateTime = (distance, speed) => {
    const readlineSync = require('readline-sync');
    const distancee = readlineSync.question('Введите расстояние (км): ');
    const speede = readlineSync.question('Введите скорость (км/ч): ');

    const result = distancee / speede;
    console.log(`Время в пути: ${result}ч`)
};
calculateTime();