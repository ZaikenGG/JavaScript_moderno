

//como saber si son pares o inpares
for( let i = 1; i <= 20; i++ ) {
    if( i % 2 === 0 ){
        console.log(`El numero ${i} es PAR`);
    } else {
        console.log(`El numero ${i} es INPAR`);
    }
}





// Carrito de compla ejemplo
const carrito = [

    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'cleluar', precio: 700 },

]

for( let i = 0; i < carrito.length; i++ ){
    console.log(carrito[i].nombre);
}

//  por ejemplo tenemos 6 cosas dentro del carrito con el carrito.length indicamos que se quede en el 6 y si en el carrto se elimina un producto pues quedarian 5 y automaticamente carrito.length dice ya no hay 6 ahora hay 5