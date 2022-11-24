// Veamos otra forma de revisar si una condicion se cumple
// se conoce como El operador ternario

const autenticado = true
const puedePagar = false

// ? este codigo es como la primera parte de if
// : este codigo quiere decir como si fuera el else
console.log( autenticado &&  puedePagar ? 'Si puede pagar' : 'No esta autenticado' );

// otro ejemplo si hay 2 variables
console.log( autenticado  ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si autenticado, no puede pagar' : 'No esta autenticado' );