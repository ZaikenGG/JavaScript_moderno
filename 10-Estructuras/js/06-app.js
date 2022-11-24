const usuario = true;
const puedePagar = false;

// && es para indentificar si se cumple las 2 condiciones , si una de las dos no se cumple va caer en el false por que el && revisa que se cumplan las ambas
if (usuario && puedePagar) {
    console.log("Si puedes comrpar");

} else if (!usuario && !puedePagar) {
  console.log("No puedes comprar");

} else if (!usuario) {
    console.log("Inicia secion o saca una cuenta");
    
} else if (!puedePagar) {
    console.log("Fondos insuficientes");
}