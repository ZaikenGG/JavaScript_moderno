
const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Phone 13 pro', precio: 1000},
    {nombre: 'Teclado Mecanico', precio: 150},
    {nombre: 'Microfono', precio: 50},
    {nombre: 'Mause', precio: 25},
    {nombre: 'Mochila', precio: 25},
]


for(let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[1].precio}`);
}

carrito.forEach( function(producto){
    console.log(`${ producto.nombre } - Precio: ${ producto.precio }`);
} )