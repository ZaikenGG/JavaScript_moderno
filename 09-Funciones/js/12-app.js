const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Phone 13 pro', precio: 1000},
    {nombre: 'Teclado Mecanico', precio: 150},
    {nombre: 'Microfono', precio: 50},
    {nombre: 'Mause', precio: 25},
    {nombre: 'Mochila', precio: 25},
]


// Arrow function en un .foreach y .map

const nuevoArreglo = carrito.map( producto => `${ producto.nombre } - Precio: ${ producto.precio }`)

carrito.forEach( producto => `${ producto.nombre } - Precio: ${ producto.precio }`)
