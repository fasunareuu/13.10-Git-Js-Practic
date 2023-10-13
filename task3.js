const calculateDiscount = (price, discountPercentage) => {
    const readlineSync = require('readline-sync');
    const priceInput = readlineSync.question('Введите цену товара: ');
    const discountPercentageInput = readlineSync.question('Введите процент скидки: ');

    const result = priceInput - (priceInput / 100 * discountPercentageInput);
    console.log(`Стоимость товара с учетом скидки: ${result}`);
};


calculateDiscount(100, 0.10) // => 90