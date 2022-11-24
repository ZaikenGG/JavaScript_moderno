
// Variable con su valor con espacios
const producto = '                   Monitor 20 Pulgadas                        ';

console.log(producto);// Monitor 20 Pulgadas
console.log(producto.length);// 62

// Eliminar del inicio...
console.log(producto.trimStart() );// '<=====Monitor 20 Pulgadas                        '
console.log(producto.trimEnd() );// '                   Monitor 20 Pulgadas========>'

console.log(producto.trimStart().trimEnd());// '<== Monitor 20 Pulgadas ==>'



//antigua funcion
console.log(producto.trim());// '<== Monitor 20 Pulgadas ==>'