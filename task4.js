const calculateRectangleProperties = (width, height) => {
    const readlineSync = require('readline-sync');
    const widthInput = readlineSync.question('Введите длину: ');
    const heightInput = readlineSync.question('Введите ширину: ');

    const perimeter = (widthInput * 2) + (heightInput * 2);

    const square = widthInput * heightInput;
    console.log(`Периметр: ${perimeter}\nПлощадь: ${square}`);
};
calculateRectangleProperties();