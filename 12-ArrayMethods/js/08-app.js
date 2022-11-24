const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

// push modifica el arreglo original
meses.push("Agosto");
console.log(meses);

// spreed operator no modifica el arreglo original , si no se crea un clon
//  Agregar un elemento al final de un arreglo
const meses2 = [...meses, "Agosto"];
console.log(meses2);

// Arreglo con objetos
const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// Agregar nuevo prodcto en el arreglo con objetos
const producto = { nombre: "Disco Duro", precio: 300 };
// para agregar un nuevo objeto no agreges los 3 puntos
const carrito2 = [...carrito, producto];

console.log(carrito2); // muestra el carrito con un nuevo objeto añadido
