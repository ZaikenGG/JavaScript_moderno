const carrito = [];

// Definir un producto
const producto = {
    nombre: 'Monitor 32 Pulgdas',
    precio: 400 
}

const producto2 = {
    nombre: 'Phone 13 pro max',
    precio: 600

}

const producto3 = {
    nombre: 'Teclado Mecanico',
    precio: 100
}

let resultado;
resultado = [...carrito, producto]

resultado = [...resultado, producto2]

resultado = [producto3, ...resultado]


console.table(resultado);