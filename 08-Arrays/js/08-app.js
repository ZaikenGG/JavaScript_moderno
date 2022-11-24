const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

// const nombre = producto.nombre;
// console.log(nombre);

// Destructuring mas facil de extraer // Recomendale

const { nombre } = producto;

console.log(nombre); //Monitor 20 pulgadas

// Destructuring con Arreglos
const numeros = [10, 20, 30, 40, 50];
const [, , tercero] = numeros;
console.log(tercero); // 30

// Segunda opcion
const numeros2 = [10, 20, 30, 40, 50];
const [primera, segunda, tercer] = numeros;

console.log(primera); // 10
console.log(segunda); //20
console.log(tercer); // 30

// tercera opcion / igual es importante si queires aprender usar react
const numero3 = [10, 20, 30, 40, 50];
const [uno, dos, ...tres] = numero3;

console.log(tres);
