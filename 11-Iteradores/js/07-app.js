//  Este litera sobre los valores de un arreglo

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript']

const carrito = [
    {nombre: 'Monitor 27 Pulgadas', precio: 500},
    {nombre: 'Phone 13 pro', precio: 1000},
    {nombre: 'Teclado Mecanico', precio: 150},
    {nombre: 'Microfono', precio: 50},
    {nombre: 'Mause', precio: 25},
    {nombre: 'Mochila', precio: 25},
]

for( let pendiente of pendientes ){
    console.log(pendiente);
}

for( let producto of carrito){
    console.log(producto.nombre);
}