const carrito = [
    { nombre: "Monitor 27 Pulgadas", precio: 500 },
    { nombre: "Televisión", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 },
  ];
  
  // con un foreach
  let resultado = '';
  
  carrito.forEach((producto, index) => {
      if(producto.nombre === 'Tablet')  {
          resultado  = carrito[index]
      }
  })
  
  console.log(resultado); // { nombre: 'Tablet', precio: 200 }
  
  
  
  
// con .find
//   Muy importante es que .find solamente te va a retornar el primer elemento que cumpla la condicion
// .find va obtener o va asignarle el resultado, el primer elemento que cumpla esta condicion
const resultado2 = carrito.find((producto) => producto.nombre === 'Tablet' )
console.log(resultado2); // { nombre: 'Tablet', precio: 200 }