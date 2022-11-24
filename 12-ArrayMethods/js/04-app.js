const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];


// Te crea un nuevo arreglo con la condicion que estes revisando en ese momento
let resultado;

resultado = carrito.filter( (producto) => producto.precio > 400) // te busca solo los precios mayores que 400
resultado = carrito.filter( (producto) => producto.precio < 600) // te busca solo los precios menores que 600

// que no salgo un producto en el nuevo arreglo
resultado = carrito.filter( (producto) => producto.nombre !== 'Audifonos' ) // Te trae todo la lista pero menos el producto Audifonos

// y si solo quieres que aparesca solo los audifonos
resultado = carrito.filter( (producto) => producto.nombre === 'Audifonos' ) // Te va agregar solo los audifonos y los demas ya no aparecen


console.log(resultado);