const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD'


// Concat es para unir los textos y usarlo como string
console.log(producto.concat(precio));
console.log(producto.concat(' En descuento'));

/*
==============================================
== DIFERENTES FORMAS DE CONCATENAR/Agregar ==
==============================================
*/

// concatenar con el simbolo +
console.log('El producto ' + producto + ' tiene un precio de ' + precio);

// concatenar con el simbolo ,
console.log('El producto ' , producto , ' tiene un precio de ' , precio);

//concatenar recomendable con el signo ${}
console.log(`El producto ${producto} tiene un precio de $${precio}`);