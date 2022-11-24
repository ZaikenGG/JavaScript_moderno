const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// Comprobar si un valor existe en un arreglo

meses.forEach((mes) => {
    if(mes  === 'Enero'){
        console.log('Enero si existe'); // Enero si existe
    }
});

// Mas corta opcion 

const resultado = meses.includes('Enero');
console.log(resultado); // true





// Si quieres revisar si un valor existe en un arreglo de objetos, punto includes
// En un arreglo de objetos se utiliza .some

const existe = carrito.some((producto, ) => {
    return producto.nombre === 'Celular'
})
console.log(existe); // true


// mismo arreglo pero mas corta y limpio 
const existe2 = carrito.some(producto => producto.nombre === 'Celular'
)
console.log(existe2); // true