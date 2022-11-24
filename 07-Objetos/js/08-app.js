"use strict"; // Congerlar un objeto para que no se pueda modificar


const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}


Object.freeze( producto ) // congelar objeto no puede modificar

// producto.disponible = false
// producto.imagen = 'imagen.jpg'
// delete producto.precio;

console.log(producto);

//como averiguar si un objeto esta congelado ?
console.log(Object.isFrozen(producto));


