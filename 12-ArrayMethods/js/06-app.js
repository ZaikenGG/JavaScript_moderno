const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500 },
    { nombre: "Televisión", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 },
  ];
  
// .Every Es un poco extraño, ya que todo los elementos de un arreglo deben de cumplir esa condicion para que retorne un true
// .Every se deben que cumplir todas las condiciones, es decir, todos los elementos deben de cumplir la condicion
const resultado = carrito.every( producto => producto.precio < 1000 )
console.log(resultado); // true