"use strict"; // Congerlar un objeto para que no se pueda modificar


const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}


Object.seal( producto ) // no se pueden agregar ni eliminar propiedades pero si se puede modificar las existentes

producto.disponible = false
// producto.imagen = 'imagen.jpg'
// delete producto.precio;

console.log(producto);

//como averiguar si un objeto esta congelado ?
console.log(Object.isSealed(producto));