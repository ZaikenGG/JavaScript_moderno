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

// .push agrega al final de un arreglo
carrito.push(producto)
carrito.push(producto2)


// Para colocar a la primera lista y empujar lo demas
const producto3 = {
    nombre: 'Teclado Mecanico',
    precio: 100
}

carrito.unshift(producto3)



console.table(carrito);