const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Phone 13 pro', precio: 1000},
    {nombre: 'Teclado Mecanico', precio: 150},
    {nombre: 'Microfono', precio: 50},
    {nombre: 'Mause', precio: 25},
    {nombre: 'Mochila', precio: 25},
]


const nuevoArreglo = carrito.map( function(producto){
    return `${ producto.nombre } - Precio: ${ producto.precio }`;
} )

const nuevoArreglo2 = carrito.forEach( function(producto){
    return `${ producto.nombre } - Precio: ${ producto.precio }`;
} )

console.log(nuevoArreglo);
console.log(nuevoArreglo2);