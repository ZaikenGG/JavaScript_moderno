const producto = 'Monitor 20 Pulgadas';


// .replace es para reemplazar
console.log(producto);// Monitor 20 Pulgadas
console.log(producto.replace('Pulgadas', '"'));// Monitor 20 "
console.log(producto.replace('Monitor', 'Monitor curvo'));// Monitor curvo 20 Pulgadas



// .slice es para cortar
console.log(producto.slice(0, 10));// Monitor 20
console.log(producto.slice(8));// 20 Pulgadas



// Alternativa a slice
console.log(producto.substring(0, 10));// Monitor 20
console.log(producto.substring(2, 1));// 0





/*
==============================================
================= Ejemplo ====================
==============================================
*/

//Este ejemplo nos sirve poner de icono la palabra inical de nuestro nombre como lo hace GOOGLE
const usuario = 'Erick'

//substring es la alternatica de slice que es cortar
console.log(usuario.substring(0, 1));// E

// chartAt es lo mismo que substring
console.log(usuario.charAt(0));// E