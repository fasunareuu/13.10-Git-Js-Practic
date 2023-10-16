const countWords = (sentence) => {
    const readlineSync = require('readline-sync');
    const str = readlineSync.question('Введите текст чтобы посчитать кол-во слов в нем: ');
    let arr = str.split(/\s+/);
    console.log(`Количество строк: ${arr.length}`); 
};
countWords();
