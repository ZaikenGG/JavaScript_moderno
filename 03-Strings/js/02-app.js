const producto = 'Monitor 20 Pulgadas';
console.log(producto); // Monitor 20 Pulgadas

//.length es conocer la cantidad de letras de la cadena de texto
console.log(producto.length);// 19

// indexOf() devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde ; o -1 si no se encuentra dicho valor.
console.log(producto.indexOf('Monitor'));//0
console.log(producto.indexOf('20'));//8



//include() verifica si una matriz incluye el elemento pasado o no . Si la matriz contiene ese elemento, devolverá verdadero; de lo contrario, devolverá falso
console.log(producto.includes('Monitor'));//true