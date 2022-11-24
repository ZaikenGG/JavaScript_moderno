const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

//seleccion de sintaxis comun
console.log(producto.nombre); // Monitor 20 pulgadas
console.log(producto.precio); // 300
console.log(producto.disponible); // true

// Otra forma para seleccionar sintaxis pero no es tan comun
console.log(producto['nombre']); // Monitor 20 pulgadas
console.log(producto['precio']); // 300
console.log(producto['disponible']); // true