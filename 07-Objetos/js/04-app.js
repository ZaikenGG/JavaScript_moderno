const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

// const nombre = producto.nombre;
// console.log(nombre);





// Destructuring ==> Extraer un variable
// const { nombre }= producto;
// const { precio } = producto;
// const { disponible } = producto;

// console.log(nombre)// 'Monitor 20 pulgadas'
// console.log(precio)// 300
// console.log(disponible)// true






// Destructuring mas facil de extraer // Recomendale

const { nombre, precio, disponible } = producto

console.log(nombre)// 'Monitor 20 pulgadas'
console.log(precio)// 300
console.log(disponible)// true