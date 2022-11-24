// foreach

// const pendiente = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript']

// pendiente.forEach( (pendientes, indice) =>{
//     console.log(`${indice} ${pendientes}`);
// } )


const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Phone 13 pro', precio: 1000},
    {nombre: 'Teclado Mecanico', precio: 150},
    {nombre: 'Microfono', precio: 50},
    {nombre: 'Mause', precio: 25},
    {nombre: 'Mochila', precio: 25},
]

carrito.forEach( (producto, indice) => {
    console.log( `${indice} ${producto.nombre}` );
} )