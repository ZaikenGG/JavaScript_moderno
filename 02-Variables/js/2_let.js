// Inicializar una variable con un valor
let producto = "Monitor de 24 Pulgadas";
console.log(producto);

// Las variables se puede resaignar
producto = "Monitor de 25 Pulgadas";
console.log(producto);

//JavaScript es un lenguaje de tipo dinamico, no se especifica tipo de dato
producto = 20;
console.log(producto);

// Se pueden inicializar sin valor y asignarlo despues
let disponible;

disponible = true;
disponible = false;

// Inicializar multiples variables
let categoria = "Computadoras",
  marca = "Marca Famosa",
  calificacion = 5;

// Las variables no pueden iniciar con numeros

let 99dias; //error
let dias99; // correct

let 01_; //error
let _01; // correct

// Crear variables con mas de una palabra
let nombreProducto;
let nombre_producto_categoria_precio;
let NombreProducto;