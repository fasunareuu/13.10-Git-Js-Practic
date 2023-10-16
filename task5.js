    const readlineSync = require('readline-sync');
    const x1Input = parseInt(readlineSync.question('Введите x1: '));
    const y1Input = parseInt(readlineSync.question('Введите y1: '));
    const x2Input = parseInt(readlineSync.question('Введите x2: '));
    const y2Input = parseInt(readlineSync.question('Введите y2: '));

    function calculateDistance  (x1, y1, x2, y2)  {

    let result2 = 0;   
    let result1 = 0;
    let results = [];

    if (x1 > y1) {
        result1 = x1 - y1;
    } 

    else if (y1 > x1) {
        result1 = y1 - x1;
    } 

    else if (x1 === y1) {
        result1 = 0;
    }

    if (x2 > y2) {
        result2 = x2 - y2;
    }

    else if (y2 > x2) {
        result2 = y2 - x2;
    }

    else if (x2 === y2) {
        result2 = 0;
    }
    console.log(`Расстоние между точками: ${results = [result1, result2]}`)

    
};

calculateDistance(x1Input, y1Input, x2Input, y2Input);