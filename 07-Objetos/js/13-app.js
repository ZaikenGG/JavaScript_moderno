const producto = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
}

// Object.keys es para saber si tiene o no tiene informacion
// Object.keys busca informacion de parte izquierda
console.log(Object.keys( producto ));

//Object.values es para sab er si hay valores
// Object.values busca informacion de parte derecha
console.log(Object.values( producto ));

//Object.entries te retorna todo en pares 
console.log(Object.entries( producto ));