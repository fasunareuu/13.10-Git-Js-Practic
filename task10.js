const generateRandomEquation = () => {
    let a = Math.random() * 100;
    let b = Math.random() * 100;
    let c = Math.random() * 100;
    let x = Math.random() * 100;

    let result = (a * x + b);

    let resultat = result = c.toFixed(0);

    console.log(resultat);
};
generateRandomEquation();