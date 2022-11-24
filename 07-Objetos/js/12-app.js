// object literal
const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}


// object constructor
//guardar los datos como estructura
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

//agregar los datos en la estructura de function
const producto2 = new Producto('Monitor 24 Pulgadas,', 500)
console.log(producto2);

const producto3 = new Producto('Televicion', 100)
console.log(producto3);