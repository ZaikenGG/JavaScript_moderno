// Operador Mayor que y menor que

const dinero = 300;
const totalPagar = 500;
const tarjeta = true;

if(dinero >= totalPagar){
    console.log('si puedes Pagar');
} else if(tarjeta){
    console.log('Si puedo pagar porque tengo la tarjeta');
} else {
    console.log('Saldo insuficiente');
}