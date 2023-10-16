const readlineSync = require('readline-sync');
let grades = readlineSync.question('Введите ваши оценки: ');
const calculateAverageGrade = (grades) => {
    
    let massive = grades.split(' ');
    let count = 0;
    let sum = 0;
    for (let i = 0; i <= massive.length - 1; i += 1) {
    sum += parseInt(massive[i]);
    ++count;
    }
    const average = sum / count;
    console.log('Средний балл: '+ average);

};
calculateAverageGrade(grades);