const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito
const totaPagar = 600


// or || revisa que se cumpla una || o que se cumpla la otra
if( efectivo > credito || credito > totaPagar || disponible > totaPagar) {
    console.log('Si puedes pagar');
} else {
    console.log('Fondo insuficiente');
}