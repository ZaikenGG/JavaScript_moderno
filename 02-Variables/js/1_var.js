
// Inicializar una variable con un valor
var producto = "Monitor de 24 Pulgadas";
console.log(producto); // Monitor de 24 Pulgadas

// Las variables se puede reasignar
producto = "Monitor de 25 Pulgadas";
console.log(producto); // Monitor de 25 Pulgadas

//JavaScript es un lenguaje de tipo dinamico, no se especifica tipo de dato
producto = 20;
console.log(producto); // 20

// Se pueden inicializar sin valor y asignarlo despues
var disponible;

disponible = true;
disponible = false;

// Inicializar multiples variables
var categoria = "Computadoras",
  marca = "Marca Famosa",
  calificacion = 5;

// Las variables no pueden iniciar con numeros

var 99dias; //error
var dias99; // correct

var 01_; //error
var _01; // correct

// Crear variables con mas de una palabra
var nombreProducto;
var nombre_producto_categoria_precio;
var NombreProducto;
