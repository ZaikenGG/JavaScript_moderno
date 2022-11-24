const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;
const numero5 = 20.5;

//normal
console.log(numero1); // 20

// Convertir un string a un numero entero
console.log(Number.parseInt(numero1)); // 20

// Convertir numero decimales
console.log(Number.parseFloat(numero2)); // 20.2

// Revisar si un numero es un entero o no
console.log(Number.isInteger(numero4)); // true
console.log(Number.isInteger(numero5)); // false