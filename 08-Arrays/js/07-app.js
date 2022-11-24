const carrito = [];

// Definir un producto
const producto = {
    nombre: 'Monitor 32 Pulgdas',
    precio: 400 
}

const producto2 = {
    nombre: 'Phone 13 pro max',
    precio: 600

}

const producto4 = {
    nombre: 'Phone 13 pro max',
    precio: 100

}

// .push agrega al final de un arreglo
carrito.push(producto)
carrito.push(producto2)
carrito.push(producto4)


// Para colocar a la primera lista y empujar lo demas
const producto3 = {
    nombre: 'Teclado Mecanico',
    precio: 100
}

carrito.unshift(producto3)
console.table(carrito);


// // Eliminar ultimo elemento de un arreglo...
// carrito.pop()
// console.table(carrito);


// // Eliminar del incio del arreglo
// carrito.shift();
// console.table(carrito);

// splice elimina los arreglos seleccionados
carrito.splice(1, 1)
console.table(carrito);